import { Setup } from "@/components/game/setup";
export const metadata = { title: "Plan your journey" };
export default function Page() {
  return (
    <main id="main" className="page-shell">
      <Setup />
    </main>
  );
}
