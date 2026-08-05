import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/events/past-events")({
  head: () => ({
    meta: [
      { title: "Past Events | Eko-Konnect" },
      {
        name: "description",
        content: "Past training, clinics and community meetings hosted by Eko-Konnect.",
      },
      { property: "og:title", content: "Past Events | Eko-Konnect" },
      {
        property: "og:description",
        content: "An archive of past events hosted by Eko-Konnect.",
      },
    ],
  }),
  component: PastEvents,
});

function PastEvents() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Past Events"
        lead="Training, clinics and community meetings Eko-Konnect has hosted for member institutions."
      />
      <section className="mx-auto max-w-[1200px] px-6 pt-10">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-sm font-semibold tracking-wide text-brand transition-colors hover:text-brand-deep"
        >
          ← Back to current Events
        </Link>
      </section>
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto max-w-xl border border-border bg-brand-tint px-8 py-16 text-center sm:px-14">
          <p className="eyebrow">Archive</p>
          <h2 className="mt-3 text-2xl leading-snug text-brand-deep">
            The Past Events archive is being compiled.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Check back soon for a record of training, clinics and community meetings hosted by
            Eko-Konnect.
          </p>
        </div>
      </section>
    </>
  );
}
