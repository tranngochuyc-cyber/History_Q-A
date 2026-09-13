import Link from "next/link";
import { ArrowRight, Hourglass } from "lucide-react";
export const metadata = { title: "Giới thiệu và cách chơi" };
export default function Page() {
  return (
    <main id="main" className="page-shell about-page">
      <div className="page-heading">
        <Hourglass size={34} />
        <div className="eyebrow">CHÀO MỪNG ĐẾN CHRONOQUEST</div>
        <h1>Lịch sử không chỉ là niên đại.</h1>
        <p>
          Đó là những lựa chọn, mối liên hệ và cuộc đời. Khám phá từng câu
          chuyện qua một hành trình của riêng bạn.
        </p>
      </div>
      <article className="about-content">
        <section>
          <h2>Năm bước cho một hành trình.</h2>
          <ol>
            <li>
              <strong>Khám phá.</strong> Chọn 10, 20 hoặc 30 vòng và phạm vi
              lịch sử. Bộ lọc cần có ít nhất ba sự kiện phù hợp.
            </li>
            <li>
              <strong>Lựa chọn.</strong> Mỗi vòng có ba sự kiện. Chọn câu chuyện
              bạn thích; sự kiện chưa xuất hiện được ưu tiên trước khi lặp lại.
            </li>
            <li>
              <strong>Tìm hiểu.</strong> Đọc ảnh và tóm tắt về bối cảnh, diễn
              biến, tác động của sự kiện.
            </li>
            <li>
              <strong>Trả lời.</strong> Thử trắc nghiệm, đúng/sai hoặc đoán năm.
              Niên đại được ẩn khi đoán năm. Không giới hạn thời gian.
            </li>
            <li>
              <strong>Lưu dấu.</strong> Đọc giải thích. Sự kiện được lưu vào bộ
              sưu tập dù trả lời đúng hay sai.
            </li>
          </ol>
        </section>
        <section>
          <h2>Điểm số ghi nhận hiểu biết.</h2>
          <p>
            Trả lời đúng nhận 100 điểm cơ bản. Hệ số độ khó: Dễ ×1, Vừa ×1,25,
            Khó ×1,5. Mỗi câu đúng liên tiếp trước đó cộng 10 điểm thưởng, tối
            đa 100. Trả lời sai đặt lại chuỗi đúng.
          </p>
          <p>
            Đoán năm chính xác được 100 điểm cơ bản; lệch tối đa 1 năm: 90; 5
            năm: 70; 10 năm: 40; 25 năm: 20; xa hơn: 0. Hệ số độ khó vẫn áp
            dụng. Chỉ năm chính xác mới được tính đúng và nối chuỗi. Nhập số âm
            cho năm trước Công nguyên; không có năm 0.
          </p>
        </section>
        <section>
          <h2>Kho lịch sử lớn lên cùng bạn.</h2>
          <p>
            Tiến trình và hành trình chưa hoàn thành tự động lưu trong trình
            duyệt. Đọc hồ sơ luôn miễn phí; trả lời câu hỏi sẽ lưu sự kiện. Độ
            chính xác tính mọi lượt trả lời, còn số câu đã hoàn thành chỉ đếm
            các câu khác nhau.
          </p>
          <p>
            Các nhóm quốc gia, khu vực, thời kỳ và chủ đề giới hạn lẫn nhau.
            Trong cùng một nhóm, sự kiện chỉ cần khớp một mục đã chọn. Bộ sưu
            tập nhỏ sẽ dùng lại sự kiện ít xuất hiện nhất và luân phiên câu hỏi.
          </p>
        </section>
        <section>
          <h2>Lịch sử cần được đặt trong bối cảnh.</h2>
          <p>
            Mỗi hồ sơ có liên kết nguồn để đọc thêm. Nhãn quốc gia hiện đại chỉ
            vị trí địa lý, không khẳng định các quốc gia hay biên giới đó đã tồn
            tại khi sự kiện diễn ra.
          </p>
          <p>
            Thời kỳ là quy ước điều hướng: Cổ đại trước năm 500; Trung đại
            500–1499; Cận đại 1500–1799; Hiện đại 1800–1944; Hiện đại từ 1945.
            Chuyển tiếp lịch sử khác nhau giữa các vùng. Tác phẩm không có năm
            chính xác được ghi khoảng niên đại và không dùng cho câu hỏi đoán
            năm.
          </p>
        </section>
        <section>
          <h2>Khám phá theo nhịp riêng.</h2>
          <p>
            Bạn có thể dùng bàn phím, trạng thái lấy nét rõ ràng và tùy chọn
            giảm chuyển động. Tiến trình lưu trên thiết bị này; xóa dữ liệu
            trình duyệt sẽ xóa tiến trình đã lưu.
          </p>
        </section>
      </article>
      <Link className="button primary" href="/play">
        Bắt đầu khám phá <ArrowRight size={18} />
      </Link>
    </main>
  );
}
