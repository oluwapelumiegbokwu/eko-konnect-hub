import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/services/cloud-hosting")({
  head: () => ({
    meta: [
      { title: "Cloud Hosting Services | Eko-Konnect" },
      {
        name: "description",
        content:
          "Locally operated virtual machines, journal platforms, repository hosting and web services for Nigerian education and research institutions.",
      },
      { property: "og:title", content: "Cloud Hosting Services | Eko-Konnect" },
      {
        property: "og:description",
        content: "Community-operated hosting for repositories, journals and campus services.",
      },
    ],
  }),
  component: CloudHosting,
});

function CloudHosting() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Cloud Hosting Services"
        lead="Reliable hosting operated within the research and education community, close to the institutions and networks that depend on it."
      />
      <Prose>
        <h2>Infrastructure built for institutions</h2>
        <p>
          Many institutions need dependable hosting for platforms that must remain online and under
          their own control. Eko-Konnect provides virtual infrastructure and managed platforms so
          that libraries, journals and academic units can run their services without building a
          data centre.
        </p>

        <h2>What is available</h2>
        <ul>
          <li>Virtual machines with allocated compute, memory and storage.</li>
          <li>Managed hosting for DSpace repositories and Open Journal Systems.</li>
          <li>Website and application hosting for departments and research projects.</li>
          <li>Backup, monitoring and administrative support from the secretariat.</li>
        </ul>

        <h2>Operating principles</h2>
        <p>
          Services are delivered on a cost-recovery basis, with capacity that can grow as an
          institution's needs change. Data remains under institutional ownership, and access is
          served over research and education network paths wherever available.
        </p>
      </Prose>
    </>
  );
}
