import { Game } from "@/components/game/game";
export const metadata = { title: "Your expedition" };
export default function Page() {
  return (
    <main id="main" className="page-shell">
      <Game />
    </main>
  );
}
