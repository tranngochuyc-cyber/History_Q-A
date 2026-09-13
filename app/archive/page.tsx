import { Suspense } from "react";
import { Archive } from "@/components/archive/archive";
export const metadata = { title: "Kho lịch sử sự kiện" };
export default function Page() {
  return (
    <main id="main" className="page-shell">
      <Suspense
        fallback={
          <div className="loading-skeleton" aria-label="Đang tải kho lịch sử" />
        }
      >
        <Archive />
      </Suspense>
    </main>
  );
}
