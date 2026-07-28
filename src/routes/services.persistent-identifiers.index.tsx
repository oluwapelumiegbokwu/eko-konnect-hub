import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/services/persistent-identifiers/")({
  head: () => ({
    meta: [
      { title: "Persistent Identifiers (PIDs) | Eko-Konnect" },
      {
        name: "description",
        content:
          "Persistent identifier services from Eko-Konnect: DataCite DOIs for research outputs and the ORCID consortium for Nigerian researchers.",
      },
      { property: "og:title", content: "Persistent Identifiers | Eko-Konnect" },
      {
        property: "og:description",
        content: "DOIs and ORCID identifiers that keep Nigerian research findable and citable.",
      },
    ],
  }),
  component: PersistentIdentifiers,
});

function PersistentIdentifiers() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Persistent Identifiers (PIDs)"
        lead="Stable, machine-readable identifiers for research outputs, researchers and organisations, so Nigerian scholarship remains findable long after a web address changes."
      />
      <Prose>
        <h2>An identifier infrastructure for Nigerian research</h2>
        <p>
          A persistent identifier is a permanent reference to a thing: an article, a dataset, a
          sample, a person. Because the identifier never changes, citations continue to resolve,
          metrics can be gathered accurately and contributions can be attributed to the right
          researcher and institution.
        </p>
        <p>
          Eko-Konnect operates national consortium arrangements that make these identifiers
          affordable and supportable for institutions of every size.
        </p>

        <h2>Our PID services</h2>
        <ul>
          <li>
            <Link to="/services/persistent-identifiers/dois" className="text-brand">
              Digital Object Identifiers (DOIs)
            </Link>{" "}
            through the DataCite consortium for Nigeria.
          </li>
          <li>
            <Link to="/services/persistent-identifiers/orcid-consortium" className="text-brand">
              ORCID Consortium
            </Link>{" "}
            membership, integration support and training.
          </li>
        </ul>

        <h2>Support and training</h2>
        <p>
          Membership includes metadata guidance, workshops for library and repository staff, and
          technical assistance integrating identifiers with journals, repositories and research
          information systems.
        </p>
      </Prose>
    </>
  );
}
