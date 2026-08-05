import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";
import { ExpressionOfInterestButton } from "@/components/expression-of-interest";

export const Route = createFileRoute("/services/institutional-repositories/dspace")({
  head: () => ({
    meta: [
      { title: "DSpace Repositories | Eko-Konnect" },
      {
        name: "description",
        content:
          "DSpace repository deployment, hosting, upgrades and training for Nigerian universities and research institutes.",
      },
      { property: "og:title", content: "DSpace Repositories | Eko-Konnect" },
      {
        property: "og:description",
        content: "Deployment, hosting and training for DSpace institutional repositories.",
      },
    ],
  }),
  component: DSpace,
});

function DSpace() {
  return (
    <>
      <PageHeader
        eyebrow="Institutional Repositories"
        title="DSpace"
        lead="The most widely deployed open source repository platform in the research and education community, supported end to end by Eko-Konnect."
      />
      <Prose>
        <h2>Deployment and hosting</h2>
        <p>
          We install and configure DSpace to institutional branding and collection structure, host
          it on community infrastructure, and manage backups, security updates and version upgrades.
          Institutions that prefer to host on campus receive the same configuration and support.
        </p>

        <h2>Metadata and interoperability</h2>
        <ul>
          <li>Metadata schema design and quality review for each collection.</li>
          <li>OAI-PMH exposure so records are harvested by national and global aggregators.</li>
          <li>DOI minting through the DataCite consortium directly from the repository.</li>
          <li>ORCID identifiers attached to author records.</li>
        </ul>

        <h2>Training</h2>
        <p>
          Workshops cover submission workflows, curation policy, embargoes, statistics and
          day-to-day administration, so library teams can operate the repository independently.
        </p>

        <h2>Our DSpace Hosting Includes:</h2>
        <ul>
          <li>Hosting &amp; Installation</li>
          <li>Managed system administration (if required)</li>
          <li>Annual Support &amp; Upgrades</li>
          <li>Handle identifier</li>
          <li>Basic site branding</li>
          <li>Custom Submission Workflow</li>
          <li>Item access management</li>
          <li>Basic usage statistics</li>
          <li>Automatic backup</li>
          <li>Online quick startup training</li>
        </ul>

        <h2>FAIR-Compliant by Design</h2>
        <p>
          Our DSpace service ensures digital assets are secure, sovereign, and well-managed — so
          your team can focus on research, not infrastructure.
        </p>
      </Prose>
      <div className="mx-auto max-w-[760px] px-6 pb-16">
        <ExpressionOfInterestButton serviceName="DSpace" askRepository />
      </div>
    </>
  );
}
