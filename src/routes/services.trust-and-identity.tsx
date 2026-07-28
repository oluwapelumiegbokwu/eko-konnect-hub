import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/services/trust-and-identity")({
  head: () => ({
    meta: [
      { title: "Trust and Identity | Eko-Konnect" },
      {
        name: "description",
        content:
          "Federated identity, eduroam and access management services that let Nigerian institutions share resources securely with a single institutional login.",
      },
      { property: "og:title", content: "Trust and Identity | Eko-Konnect" },
      {
        property: "og:description",
        content: "Federated identity and secure roaming access for research and education.",
      },
    ],
  }),
  component: TrustAndIdentity,
});

function TrustAndIdentity() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Trust and Identity"
        lead="One institutional login, trusted across the national and global research and education community."
      />
      <Prose>
        <h2>Why it matters</h2>
        <p>
          Research and education depends on people reaching resources that belong to other
          organisations: licensed journals, shared computing, collaborative platforms and campus
          networks abroad. Trust and identity services let an institution vouch for its own users
          once, so that partners can grant access without issuing new accounts.
        </p>

        <h2>What we provide</h2>
        <ul>
          <li>
            eduroam deployment and support, giving staff and students secure wireless access at
            participating campuses worldwide.
          </li>
          <li>
            Identity provider setup and federation onboarding, so institutional credentials work
            with national and international service providers.
          </li>
          <li>
            Attribute release and policy guidance aligned with eduGAIN and community practice.
          </li>
          <li>Technical training for campus identity and network administrators.</li>
        </ul>

        <h2>Getting started</h2>
        <p>
          Institutions typically begin with a readiness review of their directory services and
          campus network, followed by a pilot deployment with the Eko-Konnect engineering team.
          Contact the secretariat to arrange an assessment.
        </p>
      </Prose>
    </>
  );
}
