import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/services/persistent-identifiers/orcid-consortium")({
  head: () => ({
    meta: [
      { title: "ORCID Consortium | Eko-Konnect" },
      {
        name: "description",
        content:
          "Join the Nigerian ORCID consortium through Eko-Konnect for researcher identifiers, system integration and adoption support.",
      },
      { property: "og:title", content: "ORCID Consortium | Eko-Konnect" },
      {
        property: "og:description",
        content: "Researcher identifiers and integration support for Nigerian institutions.",
      },
    ],
  }),
  component: Orcid,
});

function Orcid() {
  return (
    <>
      <PageHeader
        eyebrow="Persistent Identifiers"
        title="ORCID Consortium"
        lead="A unique, persistent identifier for every researcher, connected to their affiliations, publications, datasets, grants and peer review activity."
      />
      <Prose>
        <h2>Why institutions join</h2>
        <p>
          ORCID resolves the ambiguity of names. It allows an institution to report accurately on
          the work of its researchers, reduces repeated data entry across systems, and follows
          researchers throughout their careers and across institutions.
        </p>

        <h2>Consortium membership</h2>
        <ul>
          <li>Member API credentials for reading and writing trusted assertions.</li>
          <li>Integration with repositories, journals and research information systems.</li>
          <li>Affiliation assertion so employment and education records are institution-verified.</li>
          <li>Consortium pricing, shared training and a national community of practice.</li>
        </ul>

        <h2>Adoption support</h2>
        <p>
          Eko-Konnect works with member institutions on outreach campaigns, registration clinics for
          academic staff and postgraduate students, and technical implementation with campus IT and
          library teams.
        </p>
      </Prose>
    </>
  );
}
