import type { ReactNode } from "react";

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
