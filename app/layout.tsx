import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/providers";
import { Navbar, Footer } from "@/components/layout";
export const metadata: Metadata = {
  title: {
    default: "ChronoQuest — Khám phá lịch sử",
    template: "%s | ChronoQuest",
  },
  description:
    "Ba sự kiện. Một lựa chọn. Khám phá lịch sử thế giới, thử tài kiến thức và xây dựng bộ sưu tập riêng.",
  icons: { icon: (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/favicon.svg" },
  openGraph: {
    title: "ChronoQuest",
    description: "Khám phá lịch sử qua từng sự kiện.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <AppProvider>
          <a className="skip-link" href="#main">
            Đến nội dung chính
          </a>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}

