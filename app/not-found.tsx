import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="page-shell empty-state">
      <div className="eyebrow">KHÔNG TÌM THẤY SỰ KIỆN</div>
      <h1>Câu chuyện này chưa có.</h1>
      <p>Kho lịch sử vẫn còn nhiều câu chuyện khác dành cho bạn.</p>
      <Link href="/archive" className="button primary">
        Về kho lịch sử
      </Link>
    </main>
  );
}
