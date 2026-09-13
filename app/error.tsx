"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="page-shell empty-state">
      <h1>A pause in the journey.</h1>
      <p>
        Something prevented this page from loading. Your saved discoveries
        remain in this browser.
      </p>
      <button className="button primary" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
