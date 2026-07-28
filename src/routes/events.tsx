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

const events = [
  {
    period: "Quarterly",
    title: "Repository and Open Access Workshop",
    location: "Lagos and online",
    summary:
      "Practical sessions for librarians and repository administrators covering deposit workflows, metadata and persistent identifiers.",
  },
  {
    period: "Quarterly",
    title: "Campus Network Engineering Clinic",
    location: "Host member campus",
    summary:
      "Hands-on work with campus engineers on routing, wireless design, eduroam and monitoring.",
  },
  {
    period: "Annual",
    title: "Eko-Konnect Community Meeting",
    location: "Lagos",
    summary:
      "Members, trustees and partners review the year's work, set priorities and share institutional practice.",
  },
];

function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Training, clinics and community meetings"
        lead="Eko-Konnect convenes the people who run networks, libraries and research services across Nigerian institutions."
      />
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {events.map((event) => (
            <article key={event.title} className="bg-background p-8">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
                {event.period}
              </p>
              <h2 className="mt-3 text-xl leading-snug text-brand-deep">{event.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{event.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">{event.summary}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Dates and registration details for the next scheduled events will be published here.
        </p>
      </section>
    </>
  );
}
