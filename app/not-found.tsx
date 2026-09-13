import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="page-shell empty-state">
      <div className="eyebrow">RECORD NOT FOUND</div>
      <h1>This chapter is missing.</h1>
      <p>The archive may have a different story for you.</p>
      <Link href="/archive" className="button primary">
        Return to the archive
      </Link>
    </main>
  );
}
