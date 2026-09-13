import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Globe2, Sparkles } from "lucide-react";
import { HomeSections } from "@/components/home-sections";
export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="tiny-line" /> HÀNH TRÌNH QUA LỊCH SỬ NHÂN LOẠI
          </div>
          <h1>
            Quá khứ rộng lớn. <em>Mỗi chuyện, một khám phá.</em>
          </h1>
          <p>
            Ba sự kiện. Một lựa chọn.
            <br />
            Theo trí tò mò đến những thời khắc đã định hình thế giới.
          </p>
          <div className="button-row">
            <Link href="/play" className="button primary">
              Bắt đầu khám phá <ArrowRight size={18} />
            </Link>
            <Link href="/archive" className="button ghost">
              Xem bộ sưu tập <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-footnote">
            <Globe2 size={15} /> Qua các châu lục và thế kỷ. Theo nhịp riêng của
            bạn.
          </div>
        </div>
        <div className="hero-atlas" aria-label="Những dấu mốc qua các thời kỳ">
          <div className="eyebrow">BA THỜI KỲ · MUÔN CÂU CHUYỆN</div>
          <div className="hero-atlas-grid">
            {[
              {
                id: "constantinople",
                title: "Constantinople",
                date: "1453 · Bước ngoặt đế quốc",
                alt: "Tranh năm 1876 tái hiện Mehmed II tiến vào Constantinople",
              },
              {
                id: "great-wave",
                title: "Sóng lừng của Hokusai",
                date: "Khoảng 1831 · Nghệ thuật",
                alt: "Tranh Sóng lừng ngoài khơi Kanagawa của Hokusai",
              },
              {
                id: "apollo-11",
                title: "Apollo 11",
                date: "1969 · Chạm tới Mặt Trăng",
                alt: "Buzz Aldrin trên Mặt Trăng, ảnh của Neil Armstrong",
              },
            ].map((item, i) => (
              <Link
                key={item.id}
                href={`/event/${item.id}`}
                className={`hero-artwork artwork-${i}`}
              >
                <div className="hero-artwork-image">
                  <Image
                    src={`/images/${item.id}.webp`}
                    alt={item.alt}
                    fill
                    sizes="(max-width:600px) 90vw, 40vw"
                    priority={i === 0}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="hero-artwork-caption">
                  <span>{item.date}</span>
                  <strong>{item.title}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="archive-strip">
        <span>
          <Sparkles size={16} /> TRÍ TÒ MÒ LÀ LA BÀN
        </span>
        <span>3 sự kiện mỗi vòng</span>
        <span>5 thời kỳ lịch sử</span>
        <span>Những câu chuyện kết nối</span>
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">HÀNH TRÌNH DIỄN RA THẾ NÀO</div>
            <h2>Một lựa chọn. Thế giới rộng hơn.</h2>
          </div>
          <Link href="/about" className="text-link">
            Cách chơi <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="steps">
          {[
            ["Khám phá", "Ba thời khắc lịch sử. Những lựa chọn mới mỗi vòng."],
            ["Lựa chọn", "Chọn câu chuyện khiến bạn tò mò."],
            ["Tìm hiểu", "Tìm hiểu câu chuyện phía sau sự kiện."],
            ["Trả lời", "Thử sức với kiến thức vừa khám phá."],
            ["Lưu dấu", "Lưu từng khám phá vào bộ sưu tập."],
          ].map(([title, desc], i) => (
            <div className="step" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <HomeSections />
      <section className="section invitation">
        <div>
          <div className="eyebrow">LỜI MỜI KHÁM PHÁ QUÁ KHỨ</div>
          <h2>Lịch sử sẽ đưa bạn đến đâu?</h2>
          <p>
            Tạo hành trình riêng. Chọn vùng đất, thời kỳ hoặc để cả thế giới
            mang đến bất ngờ.
          </p>
        </div>
        <Link href="/play" className="button primary">
          Chọn hành trình <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
