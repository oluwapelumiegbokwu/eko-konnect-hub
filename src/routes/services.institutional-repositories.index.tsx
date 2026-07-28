import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/services/institutional-repositories/")({
  head: () => ({
    meta: [
      { title: "Institutional Repositories | Eko-Konnect" },
      {
        name: "description",
        content:
          "Repository platforms, hosting and training that help Nigerian institutions collect, preserve and openly publish their scholarly record.",
      },
      { property: "og:title", content: "Institutional Repositories | Eko-Konnect" },
      {
        property: "og:description",
        content: "DSpace and RUMBU repository services for Nigerian institutions.",
      },
    ],
  }),
  component: Repositories,
});

function Repositories() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Institutional Repositories"
        lead="The scholarly output of an institution deserves a permanent, openly accessible home. We help members build and run one."
      />
      <Prose>
        <h2>From collection to open access</h2>
        <p>
          An institutional repository gathers theses, articles, reports, datasets and teaching
          material into a single managed collection. Combined with persistent identifiers and good
          metadata, it raises the visibility of an institution's research and preserves it for the
          long term.
        </p>

        <h2>Platforms we support</h2>
        <ul>
          <li>
            <Link to="/services/institutional-repositories/dspace" className="text-brand">
              DSpace
            </Link>{" "}
            deployment, hosting, upgrades and administrator training.
          </li>
          <li>
            <Link to="/services/institutional-repositories/rumbu" className="text-brand">
              RUMBU
            </Link>{" "}
            for institutions seeking a lighter, locally supported repository option.
          </li>
        </ul>

        <h2>What is included</h2>
        <p>
          Repository services can be combined with DOI minting, ORCID integration and cloud hosting,
          so an institution moves from an empty installation to a fully indexed, citable collection
          with support at each step.
        </p>
      </Prose>
    </>
  );
}
