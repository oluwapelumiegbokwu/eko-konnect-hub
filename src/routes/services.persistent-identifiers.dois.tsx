import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

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
        <h2>What a DOI gives you</h2>
        <p>
          A DOI is a permanent link to a research output together with a record of descriptive
          metadata. It survives site migrations and platform changes, allows accurate citation and
          makes outputs discoverable in the global scholarly graph.
        </p>

        <h2>What can be assigned a DOI</h2>
        <ul>
          <li>Journal articles and issues published by institutional journals.</li>
          <li>Theses, dissertations and project reports held in institutional repositories.</li>
          <li>Datasets, software, images, samples and other research artefacts.</li>
          <li>Conference proceedings, working papers and technical reports.</li>
        </ul>

        <h2>How membership works</h2>
        <p>
          Institutions join the Nigerian consortium through Eko-Konnect and receive their own
          DataCite repository account, a DOI prefix, access to the minting APIs and consortium
          pricing. The secretariat handles agreements, invoicing and first-line support.
        </p>
        <p>
          Onboarding includes metadata quality training, integration help for DSpace and Open
          Journal Systems, and ongoing review of published records.
        </p>
      </Prose>
    </>
  );
}
