import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-24 grid gap-6">
      <h1 className="h1">This page doesn&apos;t exist</h1>
      <p className="lede">It may have moved. The work is all on one page.</p>
      <p>
        <Link href="/work" className="btn">
          Go to work
        </Link>
      </p>
    </div>
  );
}
