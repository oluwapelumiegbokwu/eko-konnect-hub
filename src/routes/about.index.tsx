import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About Us | Eko-Konnect" },
      {
        name: "description",
        content:
          "Eko-Konnect is a cluster of the Nigerian Research and Education Network, supporting connectivity and collaboration between Nigerian education and research organisations.",
      },
      { property: "og:title", content: "About Eko-Konnect" },
      {
        property: "og:description",
        content: "Who we are, how we are governed, and the community we serve.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A community-owned research and education network for Nigerian institutions"
        lead="Eko-Konnect is a cluster of the Nigerian Research and Education Network (NgREN), formed to support network connectivity and collaboration between education and research organisations."
      />
      <Prose>
        <h2>Who we are</h2>
        <p>
          Eko-Konnect Research and Education Initiative began as a regional grouping of
          universities, polytechnics, research institutes and teaching hospitals in and around
          Lagos. Members pooled effort and demand so that each institution could obtain research
          grade connectivity and shared digital services that would be difficult to sustain alone.
        </p>
        <p>
          Today we operate as a not-for-profit initiative serving members nationwide, working as
          part of wider efforts for a sustainable National Research and Education Network and
          contributing to regional and global networking through NgREN, WACREN and the worldwide
          NREN community.
        </p>

        <h2>What we do</h2>
        <ul>
          <li>Coordinate connectivity and campus network development for member institutions.</li>
          <li>Operate trust and identity services, including eduroam and federated access.</li>
          <li>Provide persistent identifier services through the DataCite and ORCID consortia.</li>
          <li>Host repositories, journals and virtual infrastructure for the community.</li>
          <li>Run training, workshops and fellowships that build local technical capacity.</li>
        </ul>

        <h2>Governance</h2>
        <p>
          The initiative is directed by a Board of Trustees drawn from member institutions and the
          wider research community, supported by a secretariat in Lagos and technical working
          groups for networking, identity and open science.
        </p>
        <p>
          <Link
            to="/about/board-of-trustees"
            className="border-b-2 border-gold pb-1 font-semibold text-brand"
          >
            Meet the Board of Trustees
          </Link>
        </p>
      </Prose>
    </>
  );
}
