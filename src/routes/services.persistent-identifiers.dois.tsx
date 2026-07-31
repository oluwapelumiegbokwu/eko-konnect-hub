import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";
import { ExpressionOfInterestButton } from "@/components/expression-of-interest";

export const Route = createFileRoute("/services/persistent-identifiers/dois")({
  head: () => ({
    meta: [
      { title: "Digital Object Identifiers (DOIs) | Eko-Konnect" },
      {
        name: "description",
        content:
          "Eko-Konnect leads the DataCite consortium in Nigeria, providing DOIs for journals, theses, datasets and other research outputs.",
      },
      { property: "og:title", content: "Digital Object Identifiers (DOIs) | Eko-Konnect" },
      {
        property: "og:description",
        content: "DataCite DOIs for Nigerian journals, theses, datasets and research outputs.",
      },
    ],
  }),
  component: Dois,
});

function Dois() {
  return (
    <>
      <PageHeader
        eyebrow="Persistent Identifiers"
        title="Digital Object Identifiers (DOIs)"
        lead="Eko-Konnect serves as consortium lead for DataCite in Nigeria, enabling institutions to mint DOIs for their research outputs."
      />
      <Prose>
        <h2>What Are DOIs?</h2>
        <p>
          A DOI is a permanent link to a research output together with a record of descriptive
          metadata. It survives site migrations and platform changes, ensures that scholarly and
          research outputs are permanently findable, globally discoverable, and reliably citable,
          regardless of where they are hosted online, allows accurate citation and makes outputs
          discoverable in the global scholarly graph.
        </p>

        <h2>What can be assigned a DOI</h2>
        <ul>
          <li>Journal articles and issues published by institutional journals.</li>
          <li>Theses, dissertations and project reports held in institutional repositories.</li>
          <li>Datasets, software, images, samples and other research artefacts.</li>
          <li>Conference proceedings, working papers and technical reports.</li>
        </ul>

        <h2>Why Use DataCite DOIs?</h2>
        <ul>
          <li>Indexing in DataCite Commons and eligibility for Scopus.</li>
          <li>Rich metadata across multiple research output types.</li>
          <li>Integration with ORCID, Google Scholar, and impact tools.</li>
          <li>Built-in analytics for tracking citations and research impact.</li>
        </ul>

        <h2>Our DOI Services</h2>
        <ul>
          <li>Create and manage DataCite DOI accounts.</li>
          <li>Assign rich, standards-compliant metadata to research outputs.</li>
          <li>Integrate DOIs with institutional repositories and publishing platforms.</li>
          <li>Automate DOI minting using APIs and plugins.</li>
        </ul>

        <h2>How DOI Membership Works</h2>
        <p>
          When an institution subscribes for DOIs, they receive their own DataCite repository
          account, a DOI prefix, access to the minting APIs and consortium pricing. The secretariat
          handles agreements, invoicing and first-line support.
        </p>
        <p>
          Onboarding includes metadata quality training, integration help for DSpace and Open
          Journal Systems, and ongoing review of published records.
        </p>
        <p>Interested in DOIs? Submit an Expression of Interest form.</p>
      </Prose>
      <div className="mx-auto max-w-[760px] px-6 pb-16">
        <ExpressionOfInterestButton serviceName="Digital Object Identifiers (DOIs)" />
      </div>
    </>
  );
}
