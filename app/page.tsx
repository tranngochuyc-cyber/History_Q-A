import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EventCard } from "@/components/event/event-card";
import { HeroRotation } from "@/components/hero-rotation";
import { events, eventById } from "@/lib/data/events";
export default function Home() {
  return (
    <main id="main">
      <section className="cinematic-home">
        <div className="cinematic-copy">
          <div className="eyebrow">HÀNH TRÌNH QUA LỊCH SỬ NHÂN LOẠI</div>
          <h1>
            Quá khứ rộng lớn. <em>Khám phá theo cách của bạn.</em>
          </h1>
          <p>
            <strong>Ba sự kiện. Một lựa chọn.</strong> Khám phá những khoảnh
            khắc đã định hình thế giới và thử kiến thức lịch sử của bạn.
          </p>
          <div className="button-row">
            <Link href="/play" className="button primary">
              Bắt đầu khám phá <ArrowRight size={18} />
            </Link>
            <Link href="/archive" className="button ghost">
              Xem kho lịch sử <ArrowUpRight size={17} />
            </Link>
          </div>
          <span className="cinematic-meta">
            10 · 20 · 30 vòng chơi — Tiến trình tự động lưu
          </span>
        </div>
        <HeroRotation />
      </section>
      <section className="section home-event-preview">
        <div className="section-heading">
          <div>
            <div className="eyebrow">KHÁM PHÁ SỰ KIỆN</div>
            <h2>Những dấu mốc làm nên lịch sử.</h2>
          </div>
          <Link className="text-link" href="/archive">
            Xem kho lịch sử <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="event-grid">
          {["french-revolution", "meiji-restoration", "dien-bien-phu"].map(
            (id) => (
              <EventCard key={id} event={eventById(id)} />
            ),
          )}
        </div>
      </section>
      <section className="section home-discovery">
        <div className="eyebrow">CÁCH KHÁM PHÁ</div>
        <h2>Mỗi lượt chơi là một hành trình khác.</h2>
        <ol className="discovery-steps">
          {[
            ["CHỌN PHẠM VI", "Chọn quốc gia, khu vực, thời kỳ hoặc chủ đề bạn muốn khám phá."],
            ["NHẬN 3 SỰ KIỆN", "ChronoQuest chọn ngẫu nhiên ba sự kiện phù hợp."],
            ["KHÁM PHÁ & TRẢ LỜI", "Chọn một sự kiện, đọc câu chuyện và thử kiến thức của bạn."],
            ["TIẾP TỤC HÀNH TRÌNH", "Ghi điểm, mở khóa lịch sử và bước sang vòng tiếp theo."],
          ].map(([title, description], index) => (
            <li key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>
          ))}
        </ol>
      </section>
      <section className="section home-eras">
        <div className="eyebrow">KHÁM PHÁ QUA THỜI ĐẠI</div>
        <h2>Từ thế giới cổ đại đến thời đại hiện đại.</h2>
        <div className="era-overview">
          {[
            ["CỔ ĐẠI", "Trước năm 500", "Những nền văn minh đầu tiên và sự hình thành của các đế chế."],
            ["TRUNG ĐẠI", "500–1499", "Vương quốc, tôn giáo, thương mại và những cuộc chinh phục."],
            ["CẬN ĐẠI", "1500–1799", "Khám phá thế giới, cách mạng và sự thay đổi quyền lực."],
            ["HIỆN ĐẠI", "1800–1944", "Công nghiệp, chiến tranh thế giới và những biến động lớn."],
            ["ĐƯƠNG ĐẠI", "Từ năm 1945", "Khoa học, công nghệ, chính trị và thế giới ngày nay."],
          ].map(([title, range, description]) => (
            <div key={title}><span className="era-range">{range}</span><h3>{title}</h3><p>{description}</p></div>
          ))}
        </div>
      </section>
      <section className="section home-perspective">
        <div>
          <h2>Không chỉ là nhớ ngày tháng.</h2>
          <p className="perspective-intro">ChronoQuest không chỉ hỏi “sự kiện xảy ra khi nào”. Mỗi lượt chơi giúp bạn kết nối con người, địa điểm, nguyên nhân và hệ quả của những khoảnh khắc lịch sử.</p>
        </div>
        <div className="perspective-points">
          {[
            ["KHÁM PHÁ", "Tiếp cận lịch sử từ những sự kiện bạn thực sự tò mò."],
            ["HIỂU BỐI CẢNH", "Mỗi câu hỏi đi kèm giải thích thay vì chỉ báo đúng hoặc sai."],
            ["MỞ RỘNG GÓC NHÌN", "Khám phá sự kiện từ nhiều quốc gia, thời kỳ và chủ đề khác nhau."],
          ].map(([title, description]) => (
            <div key={title}><h3>{title}</h3><p>{description}</p></div>
          ))}
        </div>
      </section>
      <section className="section home-archive-summary">
        <div>
          <div className="eyebrow">KHO LỊCH SỬ CHRONOQUEST</div>
          <h2>{events.length} sự kiện chỉ là điểm khởi đầu.</h2>
          <p>
            Khám phá lịch sử qua nhiều thời kỳ, quốc gia và những câu chuyện đã thay đổi thế giới.
          </p>
        </div>
        <div className="button-row">
          <Link className="button primary" href="/play">
            Chơi ngay <ArrowRight size={17} />
          </Link>
          <Link className="button" href="/archive">
            Xem kho lịch sử
          </Link>
        </div>
      </section>
    </main>
  );
}

