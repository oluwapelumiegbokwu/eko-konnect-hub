import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-parts";
import { primaryNav } from "@/lib/site-nav";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Eko-Konnect" },
      {
        name: "description",
        content:
          "Trust and identity, persistent identifiers, cloud hosting and institutional repositories, delivered for Nigerian education and research institutions.",
      },
      { property: "og:title", content: "Services | Eko-Konnect" },
      {
        property: "og:description",
        content: "Shared digital infrastructure for Nigerian education and research institutions.",
      },
    ],
  }),
  component: Services,
});

const summaries: Record<string, string> = {
  "/services/trust-and-identity":
    "Federated identity and secure roaming access for staff, students and researchers.",
  "/services/persistent-identifiers":
    "DOIs and ORCID identifiers that make Nigerian research findable and citable.",
  "/services/cloud-hosting":
    "Virtual machines, journal platforms and hosting operated for the community.",
  "/services/institutional-repositories":
    "Repository platforms that preserve and publish the institutional scholarly record.",
};

const items = primaryNav.find((n) => n.to === "/services")?.children ?? [];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Services that encourage trust and promote open science"
        lead="Each service is designed with member institutions, priced for the community and supported by the Eko-Konnect secretariat."
      />
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {items.map((item) => (
            <article key={item.to} className="bg-background p-10">
              <h2 className="text-2xl text-brand-deep">{item.label}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{summaries[item.to]}</p>
              {item.children ? (
                <ul className="mt-5 space-y-2 border-l-2 border-gold pl-5 text-sm">
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <Link to={child.to} className="text-brand hover:text-brand-deep">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link
                to={item.to}
                className="mt-7 inline-block border-b-2 border-gold pb-1 text-sm font-semibold tracking-wide text-brand hover:text-brand-deep"
              >
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
