"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="page-shell empty-state">
      <h1>Hành trình tạm gián đoạn.</h1>
      <p>
        Trang chưa tải được. Những khám phá đã lưu vẫn ở trong trình duyệt này.
      </p>
      <button className="button primary" onClick={reset}>
        Thử lại
      </button>
    </main>
  );
}
