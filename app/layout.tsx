import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/providers";
import { Navbar, Footer } from "@/components/layout";
export const metadata: Metadata = {
  title: {
    default: "ChronoQuest — Explore history",
    template: "%s | ChronoQuest",
  },
  description:
    "Three events. One choice. Explore world history, test your knowledge, and build your personal archive.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "ChronoQuest",
    description: "Explore history. One event at a time.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
