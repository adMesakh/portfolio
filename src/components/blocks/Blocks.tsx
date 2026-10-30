import Image from "next/image";
import type { Block, Figure } from "@/content/types";
import { imageSizes } from "@/content/images";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="grid gap-10">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}

function BlockHeading({ children }: { children?: string }) {
  if (!children) return null;
  return <h3 className="h3 mb-4">{children}</h3>;
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "figure":
      return <FigureView fig={block.image} wide={block.wide} />;

    case "gallery":
      return (
        <figure className="max-w-[60rem]">
          <div
            className={
              "grid gap-4 items-start " +
              (block.images.length >= 3 ? "sm:grid-cols-3" : block.images.length === 2 ? "sm:grid-cols-2" : "max-w-[34rem]")
            }
          >
            {block.images.map((f) => (
              <FigureView key={f.src} fig={f} inGallery />
            ))}
          </div>
          {block.caption && <figcaption className="meta mt-3 max-w-[44rem]">{block.caption}</figcaption>}
        </figure>
      );

    case "scene":
      return (
        <p
          className="max-w-[40rem] text-[clamp(1.3rem,2.2vw,1.65rem)] leading-[1.45] border-l-2 border-[var(--accent)] pl-5"
          style={{ fontFamily: "var(--font-serif)", fontVariationSettings: '"opsz" 30' }}
        >
          {block.text}
        </p>
      );

    case "prose":
      return (
        <div>
          <BlockHeading>{block.heading}</BlockHeading>
          <div className="prose">
            {block.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      );

    case "points":
      return (
        <div>
          <BlockHeading>{block.heading}</BlockHeading>
          {block.intro && <p className="prose mb-5">{block.intro}</p>}
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 max-w-[52rem]">
            {block.items.map((it) => (
              <div key={it.title} className="rule-top pt-3">
                <dt className="font-[600] mb-1">{it.title}</dt>
                <dd className="text-[0.98rem] leading-[1.55] text-[var(--fg-soft)]">{it.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "table":
      return (
        <figure className="max-w-[56rem]">
          <BlockHeading>{block.heading}</BlockHeading>
          {block.intro && <p className="prose mb-6">{block.intro}</p>}
          <table className="table table--stack">
            <thead>
              <tr>
                {block.columns.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((cell, j) => (
                    <td key={j} data-label={j > 0 ? block.columns[j] : undefined}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && <figcaption className="meta mt-3">{block.caption}</figcaption>}
        </figure>
      );

    case "sequence":
      return <Sequence block={block} />;

    case "converge":
      return <Converge block={block} />;

    case "compare":
      return (
        <figure className="max-w-[56rem]">
          <BlockHeading>{block.heading}</BlockHeading>
          <div className="grid sm:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
            {[block.before, block.after].map((side, k) => (
              <div key={side.label} className="bg-[var(--bg)] p-5 sm:p-6">
                <p className={"text-[0.875rem] font-[560] mb-3 " + (k === 1 ? "text-[var(--accent)]" : "text-[var(--fg-soft)]")}>
                  {side.label}
                </p>
                <ul className={"grid gap-1.5 " + (k === 1 ? "font-[560]" : "text-[var(--fg-soft)]")}>
                  {side.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <figcaption className="meta mt-3">{block.caption}</figcaption>
        </figure>
      );

    case "quote":
      return (
        <blockquote className="max-w-[40rem] border-l-2 border-[var(--accent)] pl-5">
          <p className="italic text-[1.375rem] leading-[1.45]" style={{ fontFamily: "var(--font-newsreader-italic), Georgia, serif" }}>
            {block.text}
          </p>
          {block.note && <footer className="meta mt-2">{block.note}</footer>}
        </blockquote>
      );
  }
}

function Sequence({ block }: { block: Extract<Block, { kind: "sequence" }> }) {
  const [a, b] = block.highlight ?? [-1, -1];
  const inRange = (i: number) => i >= a && i <= b;
  return (
    <figure className="max-w-[60rem]">
      <BlockHeading>{block.heading}</BlockHeading>
      <div className="diagram">
        <p className="label mb-4">Diagram</p>
        <ol
          className="seq grid border-l border-t border-[var(--line)]"
          style={{ ["--n" as string]: block.steps.length, ["--n-sm" as string]: Math.min(block.steps.length, 4) }}
        >
          {block.steps.map((s, i) => (
            <li
              key={s}
              className={
                "border-r border-b border-[var(--line)] p-3 flex flex-col gap-1.5 min-h-[5.5rem] " +
                (inRange(i) ? "bg-[color-mix(in_srgb,var(--accent)_7%,var(--bg))]" : "")
              }
            >
              <span className={"text-[0.8125rem] font-[600] " + (inRange(i) ? "text-[var(--accent)]" : "text-[var(--fg-soft)]")}>{i + 1}</span>
              <span className={"text-[0.9375rem] leading-[1.3] " + (inRange(i) ? "font-[600]" : "")}>{s}</span>
            </li>
          ))}
        </ol>
        {block.highlightLabel && (
          <p className="mt-3 text-[0.875rem] flex items-center gap-2">
            <span aria-hidden className="inline-block w-3 h-3 border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_7%,var(--bg))]" />
            {block.highlightLabel}: {a === b ? `step ${a + 1}` : `steps ${a + 1}–${b + 1}`}
          </p>
        )}
      </div>
      <figcaption className="meta mt-3 max-w-[44rem]">{block.caption}</figcaption>
    </figure>
  );
}

function Converge({ block }: { block: Extract<Block, { kind: "converge" }> }) {
  return (
    <figure className="max-w-[60rem]">
      <BlockHeading>{block.heading}</BlockHeading>
      <div className="diagram">
        <p className="label mb-4">Diagram</p>
        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <ul className="grid gap-1.5" aria-label="Channels in">
            {block.inputs.map((s) => (
              <li key={s} className="flex items-center gap-3 text-[0.98rem]">
                <span className="flex-1 border-b border-dashed border-[var(--line)] pb-1">{s}</span>
                <span aria-hidden className="hidden md:block w-8 h-px bg-[var(--fg-soft)]" />
              </li>
            ))}
          </ul>
          <div className="border-2 border-[var(--fg)] px-6 py-8 text-center font-[620] text-[1.25rem] tracking-[-0.01em]">
            {block.hub}
          </div>
          <ul className="grid gap-1.5" aria-label="What it holds">
            {block.outputs.map((s) => (
              <li key={s} className="flex items-center gap-3 text-[0.98rem]">
                <span aria-hidden className="hidden md:block w-8 h-px bg-[var(--accent)]" />
                <span className="flex-1 border-b border-[var(--line)] pb-1 font-[560]">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="meta mt-3 max-w-[44rem]">{block.caption}</figcaption>
    </figure>
  );
}

function FigureView({ fig, wide, inGallery }: { fig: Figure; wide?: boolean; inGallery?: boolean }) {
  const size = imageSizes[fig.src];
  if (!size) throw new Error(`Missing image size for ${fig.src}`);
  const isRecreation = fig.kind === "recreation";
  const Wrap = inGallery ? "div" : "figure";
  // Size by shape: tall phone screens and small UI crops shouldn't fill the column.
  const portrait = size.h / size.w > 1.4;
  const small = size.w < 1200;
  const width = wide ? "max-w-none" : portrait ? "max-w-[20rem]" : small ? "max-w-[34rem]" : "max-w-[60rem]";
  return (
    <Wrap className={inGallery ? (portrait ? "max-w-[18rem] w-full" : "w-full") : width}>
      <a
        href={fig.src}
        target="_blank"
        rel="noopener"
        className="group relative block overflow-hidden border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_60%,#fff)]"
        aria-label={`${fig.alt} (opens full size)`}
      >
        <Image
          src={fig.src}
          alt={fig.alt}
          width={size.w}
          height={size.h}
          sizes={inGallery ? "(min-width: 64rem) 20rem, (min-width: 40rem) 45vw, 100vw" : "(min-width: 64rem) 60rem, 100vw"}
          unoptimized={fig.src.endsWith(".svg")}
          className="block w-full h-auto transition-transform duration-300 group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {isRecreation && (
          <span className="absolute left-2 top-2 bg-[var(--color-ink)]/85 text-[#eef0ec] text-[0.6875rem] leading-none px-2 py-1.5 rounded-[2px]">
            Recreation, sample data
          </span>
        )}
      </a>
      {(fig.caption || !inGallery) && (
        <figcaption className="meta mt-2.5 max-w-[44rem] text-[0.875rem]">
          {fig.caption}
          {isRecreation && !inGallery && (
            <span className="block text-[0.8125rem] mt-1 opacity-80">
              Redrawn from the original Figma design with sample data; not a production screenshot.
            </span>
          )}
        </figcaption>
      )}
    </Wrap>
  );
}
