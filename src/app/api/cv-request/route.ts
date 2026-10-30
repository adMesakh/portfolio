import { readFile } from "node:fs/promises";
import path from "node:path";
import { isValidEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/*
 * CV request
 * - Validates the email, rejects honeypot hits and instant submissions.
 * - Rate limits per IP and dedupes per email (in memory, per server instance).
 * - Reads the CV server-side (private URL or ./private/cv.pdf) and sends it
 *   as an attachment through Resend. The CV is never served from /public.
 * - Stores nothing. Mesakh receives a notification email with the address.
 */

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_IP = 5;
const DEDUPE_MS = 10 * 60 * 1000;
const ipHits = new Map<string, number[]>();
const recentEmails = new Map<string, number>();

function json(status: number, body: Record<string, unknown>) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] || req.headers.get("x-real-ip") || "unknown").trim();
}

function rateLimited(ip: string, now: number) {
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_PER_IP) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  if (ipHits.size > 5000) ipHits.clear(); // keep memory bounded
  return false;
}

function config() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CV_REQUEST_FROM_EMAIL;
  const notify = process.env.CV_NOTIFICATION_EMAIL;
  const fileUrl = process.env.CV_FILE_URL;
  const fileName = process.env.CV_FILE_NAME || "Mesakh-CV.pdf";
  return { apiKey, from, notify, fileUrl, fileName, ready: Boolean(apiKey && from) };
}

async function loadCv(fileUrl?: string): Promise<Buffer | null> {
  try {
    if (fileUrl) {
      const res = await fetch(fileUrl, { cache: "no-store" });
      if (!res.ok) return null;
      return Buffer.from(await res.arrayBuffer());
    }
    return await readFile(path.join(process.cwd(), "private", "cv.pdf"));
  } catch {
    return null;
  }
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 300)}`);
  }
}

export async function POST(req: Request) {
  let body: { email?: unknown; website?: unknown; elapsed?: unknown };
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "invalid_request" });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const honeypot = typeof body.website === "string" ? body.website : "";
  const elapsed = typeof body.elapsed === "number" ? body.elapsed : 0;

  if (!isValidEmail(email)) return json(400, { error: "invalid_email" });

  // Bots: pretend success so they learn nothing, send nothing.
  if (honeypot.trim() !== "" || elapsed < 1500) return json(200, { ok: true });

  const now = Date.now();
  if (rateLimited(clientIp(req), now)) return json(429, { error: "rate_limited" });

  const key = email.toLowerCase();
  const last = recentEmails.get(key);
  if (last && now - last < DEDUPE_MS) return json(200, { ok: true, duplicate: true });

  const cfg = config();
  if (!cfg.ready) return json(503, { error: "not_configured" });

  const cv = await loadCv(cfg.fileUrl);
  if (!cv) {
    console.error("[cv-request] CV file could not be loaded");
    return json(503, { error: "not_configured" });
  }

  try {
    await sendEmail(cfg.apiKey!, {
      from: cfg.from,
      to: [email],
      reply_to: cfg.notify || undefined,
      subject: "Mesakh — CV",
      text: [
        "Hi,",
        "",
        "Thanks for your interest. My latest CV is attached.",
        "",
        "If you'd like to talk about a role or a project, just reply to this email.",
        "",
        "Mesakh",
        "UX Lead & Product Designer",
        "https://www.linkedin.com/in/admesakh",
      ].join("\n"),
      attachments: [{ filename: cfg.fileName, content: cv.toString("base64") }],
    });
  } catch (err) {
    console.error("[cv-request] send failed", err);
    return json(502, { error: "send_failed" });
  }

  recentEmails.set(key, now);
  if (recentEmails.size > 5000) recentEmails.clear();

  if (cfg.notify) {
    // Best effort; the visitor already has their CV.
    try {
      await sendEmail(cfg.apiKey!, {
        from: cfg.from,
        to: [cfg.notify],
        subject: `CV requested by ${email}`,
        text: `${email} requested your CV from the portfolio on ${new Date(now).toUTCString()}.`,
      });
    } catch (err) {
      console.error("[cv-request] notify failed", err);
    }
  }

  return json(200, { ok: true });
}

export function GET() {
  return json(405, { error: "method_not_allowed" });
}
