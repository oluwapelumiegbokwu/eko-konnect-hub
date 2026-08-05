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
      </Prose>
      <div className="mx-auto max-w-[760px] px-6 pb-16">
        <ExpressionOfInterestButton serviceName="DSpace" askRepository />
      </div>
    </>
  );
}
