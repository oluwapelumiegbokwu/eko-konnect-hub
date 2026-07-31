import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | Eko-Konnect" },
      {
        name: "description",
        content:
          "Workshops, training programmes and community meetings hosted by Eko-Konnect for Nigerian research and education institutions.",
      },
      { property: "og:title", content: "Events | Eko-Konnect" },
      {
        property: "og:description",
        content: "Workshops, training and community meetings for member institutions.",
      },
    ],
  }),
  component: Events,
});

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="7" y="10" width="34" height="30" rx="2" />
      <path d="M7 18h34M15 6v8M33 6v8" />
    </svg>
  );
}

function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Training, clinics and community meetings"
        lead="Eko-Konnect convenes the people who run networks, libraries and research services across Nigerian institutions."
      />
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mx-auto max-w-xl border border-border bg-brand-tint px-8 py-16 text-center sm:px-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center bg-background text-brand">
            <CalendarIcon className="h-7 w-7" />
          </div>
          <p className="mt-6 eyebrow">No events scheduled</p>
          <h2 className="mt-3 text-2xl leading-snug text-brand-deep">
            There are no recent events right now, but new ones are coming soon.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Join the mailing list on the homepage to hear about new workshops, clinics and community
            meetings as soon as they're announced.
          </p>
        </div>
      </section>
    </>
  );
}
