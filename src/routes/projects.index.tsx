import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ProjectCard } from "@/components/page-parts";
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
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-px bg-border lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
