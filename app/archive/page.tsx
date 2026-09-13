import { Suspense } from "react";
import { Archive } from "@/components/archive/archive";
export const metadata = { title: "The event archive" };
export default function Page() {
  return (
    <main id="main" className="page-shell">
      <Suspense
        fallback={
          <div className="loading-skeleton" aria-label="Loading archive" />
        }
      >
        <Archive />
      </Suspense>
    </main>
  );
}
