import type { ComponentType, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";
import { ExpressionOfInterestButton } from "@/components/expression-of-interest";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-border bg-brand-tint">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-brand-deep md:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-[760px] px-6 py-16 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:text-brand-deep [&_h2:first-child]:mt-0 [&_li]:leading-relaxed [&_p]:mt-5 [&_p]:leading-relaxed [&_p]:text-foreground/85 [&_ul]:mt-5 [&_ul]:space-y-2 [&_ul]:border-l-2 [&_ul]:border-gold [&_ul]:pl-5">
      {children}
    </section>
  );
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  to,
  eoiRepository,
  hideEoi,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  to: string;
  eoiRepository?: boolean;
  hideEoi?: boolean;
  children?: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col bg-background p-8">
      <div className="flex h-14 w-14 items-center justify-center bg-brand-tint text-brand">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-6 text-xl leading-snug text-brand-deep">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {children}
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          to={to}
          className="border-b-2 border-gold pb-1 text-sm font-semibold tracking-wide text-brand transition-colors hover:text-brand-deep"
        >
          Learn more
        </Link>
        {hideEoi ? null : (
          <ExpressionOfInterestButton
            serviceName={title}
            askRepository={eoiRepository}
            className="inline-flex items-center gap-2 border-2 border-brand px-4 py-2 text-xs font-semibold tracking-[0.08em] uppercase text-brand transition-colors hover:bg-brand hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          />
        )}
      </div>
    </article>
  );
}

export function ProjectListItem({ project }: { project: Project }) {
  return (
    <li className="border-b border-border">
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group flex flex-col gap-3 py-8 transition-colors hover:bg-brand-tint sm:flex-row sm:items-center sm:justify-between sm:gap-8"
      >
        <div className="sm:max-w-2xl">
          <h3 className="text-xl leading-snug text-brand-deep">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.body}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold tracking-wide text-brand transition-colors group-hover:text-brand-deep">
          View project
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </li>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col bg-background p-8">
      <h3 className="text-xl leading-snug text-brand-deep">{project.title}</h3>
      <p className="mt-4 max-w-prose flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.body}
      </p>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-fit items-center gap-2 self-start border-2 border-brand px-6 py-3 text-xs font-semibold tracking-[0.08em] uppercase text-brand transition-colors hover:bg-brand hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Learn More
        <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </article>
  );
}
