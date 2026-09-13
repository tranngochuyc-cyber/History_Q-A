import { Game } from "@/components/game/game";
export const metadata = { title: "Hành trình của bạn" };
export default function Page() {
  return (
    <main id="main" className="page-shell">
      <Game />
    </main>
  );
}
