import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News | Eko-Konnect" },
      {
        name: "description",
        content:
          "Announcements and updates from the Eko-Konnect Research and Education Initiative and its member institutions.",
      },
      { property: "og:title", content: "News | Eko-Konnect" },
      {
        property: "og:description",
        content: "Announcements and updates from Eko-Konnect and its member institutions.",
      },
    ],
  }),
  component: News,
});

const stories = [
  {
    date: "Latest",
    title: "Eko-Konnect assumes role as consortium lead for DataCite DOIs in Nigeria",
    summary:
      "Nigerian institutions can now obtain DataCite DOIs for journals, theses and datasets through a national consortium coordinated by Eko-Konnect.",
  },
  {
    date: "Recent",
    title: "ORCID consortium expands across the Lagos cluster",
    summary:
      "New member institutions have completed onboarding, with registration clinics scheduled for academic staff and postgraduate researchers.",
  },
  {
    date: "Recent",
    title: "Repository administrators complete DSpace metadata training",
    summary:
      "Library teams from member universities worked through submission workflows, metadata quality and DOI integration during a week-long programme.",
  },
];

function News() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="News from the network"
        lead="Service announcements, project milestones and community reporting from across the Eko-Konnect membership."
      />
      <section className="mx-auto max-w-[840px] px-6 py-20">
        <ul className="divide-y divide-border border-y border-border">
          {stories.map((story) => (
            <li key={story.title} className="py-8">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
                {story.date}
              </p>
              <h2 className="mt-3 text-2xl leading-snug text-brand-deep">{story.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{story.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
