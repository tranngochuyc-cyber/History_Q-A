import { notFound } from "next/navigation";
import { events } from "@/lib/data/events";
import { EventDetail } from "@/components/event/event-detail";
export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  return {
    title: event?.title ?? "Không tìm thấy sự kiện",
    description: event?.shortSummary,
    openGraph: {
      title: event?.title,
      description: event?.shortSummary,
      type: "article",
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();
  return (
    <main id="main" className="page-shell">
      <EventDetail event={event} />
    </main>
  );
}
