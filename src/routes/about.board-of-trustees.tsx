import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/about/board-of-trustees")({
  head: () => ({
    meta: [
      { title: "Board of Trustees | Eko-Konnect" },
      {
        name: "description",
        content:
          "The Eko-Konnect Board of Trustees provides governance and strategic direction for the initiative on behalf of member institutions.",
      },
      { property: "og:title", content: "Board of Trustees | Eko-Konnect" },
      {
        property: "og:description",
        content: "Governance and strategic direction for Eko-Konnect member institutions.",
      },
    ],
  }),
  component: BoardOfTrustees,
});

const trustees = [
  {
    name: "Chair of the Board",
    role: "Chair",
    affiliation: "Nominated by the member institutions",
    bio: "Leads the board, represents the initiative in national and regional forums, and oversees the delivery of the strategic plan.",
  },
  {
    name: "Vice Chair",
    role: "Vice Chair",
    affiliation: "Member university",
    bio: "Deputises for the chair and coordinates board engagement with vice chancellors and rectors across the cluster.",
  },
  {
    name: "Honorary Treasurer",
    role: "Treasurer",
    affiliation: "Member institution",
    bio: "Oversees financial stewardship, membership contributions and the annual audit of the initiative.",
  },
  {
    name: "Trustee, Research and Libraries",
    role: "Trustee",
    affiliation: "University library community",
    bio: "Represents librarians and repository managers, and guides open science and scholarly communication policy.",
  },
  {
    name: "Trustee, Network Engineering",
    role: "Trustee",
    affiliation: "Technical community",
    bio: "Advises on network architecture, campus infrastructure readiness and service reliability.",
  },
  {
    name: "Executive Secretary",
    role: "Secretary to the Board",
    affiliation: "Eko-Konnect Secretariat",
    bio: "Leads the secretariat, manages service delivery and reports to the board on operations and partnerships.",
  },
];

function BoardOfTrustees() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Board of Trustees"
        lead="The board holds the initiative in trust for its members, setting strategy, approving the annual programme of work and safeguarding the not-for-profit character of Eko-Konnect."
      />
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {trustees.map((trustee) => (
            <article key={trustee.name} className="bg-background p-8">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
                {trustee.role}
              </p>
              <h2 className="mt-3 text-xl text-brand-deep">{trustee.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{trustee.affiliation}</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">{trustee.bio}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Names, portraits and full biographies will be published here once confirmed by the
          secretariat.
        </p>
      </section>
    </>
  );
}
