import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [{ title: "Project | Eko-Konnect" }],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Prose>
        <h2>Project not found</h2>
        <p>
          <Link to="/projects" className="text-brand">
            ← Back to Projects
          </Link>
        </p>
      </Prose>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Projects" title={project.title} />
      <Prose>
        <p>{project.body}</p>
        <p>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-gold pb-0.5 font-semibold text-brand"
          >
            External reference
            <span aria-hidden="true"> ↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
        <p>
          <Link to="/projects" className="text-brand">
            ← Back to Projects
          </Link>
        </p>
      </Prose>
    </>
  );
}
