import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ProjectListItem } from "@/components/page-parts";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Eko-Konnect" },
      {
        name: "description",
        content:
          "Projects Eko-Konnect delivers with partner institutions and international collaborators to advance open science, digital preservation and capacity building in Nigeria.",
      },
      { property: "og:title", content: "Projects | Eko-Konnect" },
      {
        property: "og:description",
        content:
          "Selected initiatives delivered by Eko-Konnect with partners in Nigeria and internationally.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        lead="A selection of initiatives Eko-Konnect delivers with partner institutions and international collaborators to advance open science and digital capacity in Nigeria."
      />
      <section className="border-b border-border bg-brand-tint">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <p className="eyebrow">Upcoming Projects</p>
          <h2 className="mt-3 text-2xl leading-snug text-brand-deep">
            No upcoming projects announced yet
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            New initiatives will be listed here as they're confirmed. Join the mailing list on the
            homepage to hear about them first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <p className="eyebrow">Current &amp; Past Projects</p>
        <ul className="mt-6 border-t border-border">
          {projects.map((project) => (
            <ProjectListItem key={project.slug} project={project} />
          ))}
        </ul>
      </section>
    </>
  );
}
