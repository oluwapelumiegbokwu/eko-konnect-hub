import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, ServiceCard } from "@/components/page-parts";
import { primaryNav } from "@/lib/site-nav";
import {
  CloudHostingIcon,
  PersistentIdentifiersIcon,
  RepositoriesIcon,
  TrustIdentityIcon,
} from "@/components/service-icons";

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
    "Federated identity for access to services and platforms such as eduroam and eduGAIN among many others, so staff and students can reach resources with a single institutional login, wherever they work.",
  "/services/persistent-identifiers":
    "Including provision of Digital Object Identifiers - DOIs for Nigerian research outputs and ORCID consortium leadership that keeps researchers, datasets and publications reliably connected and visible to the global research and education ecosystem.",
  "/services/cloud-hosting":
    "Locally hosted infrastructure for institutional repositories, journal platforms and Internet services, operated for the education and research community.",
  "/services/institutional-repositories":
    "DSpace and RUMBU deployments that help institutions collect, preserve and openly publish their scholarly records.",
};

const icons: Record<string, typeof TrustIdentityIcon> = {
  "/services/trust-and-identity": TrustIdentityIcon,
  "/services/persistent-identifiers": PersistentIdentifiersIcon,
  "/services/cloud-hosting": CloudHostingIcon,
  "/services/institutional-repositories": RepositoriesIcon,
};

const items = primaryNav.find((n) => n.to === "/services")?.children ?? [];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Shared infrastructure that encourages trust and promotes open science for Nigerian institutions"
        lead="Our services are built and operated with community governance. They lower the cost of identity, publishing and hosting for member institutions, and make Nigerian research visible, verifiable and openly available."
      />
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {items.map((item) => (
            <ServiceCard
              key={item.to}
              icon={icons[item.to] ?? TrustIdentityIcon}
              title={item.label}
              description={summaries[item.to]}
              to={item.to}
              eoiRepository={item.to === "/services/institutional-repositories"}
            >
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
            </ServiceCard>
          ))}
        </div>
      </section>
    </>
  );
}
