import { Stats } from "@/components/stats/stats";
export const metadata = { title: "Your exploration statistics" };
export default function Page() {
  return (
    <main id="main" className="page-shell">
      <Stats />
    </main>
  );
}
