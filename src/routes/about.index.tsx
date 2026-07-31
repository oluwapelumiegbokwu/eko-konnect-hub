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
        <h2>About Eko-Konnect</h2>
        <p>
          Eko-Konnect is a cluster of the Nigerian Research and Education Network (NgREN). We aim to
          support network connectivity and collaborations between education and research
          organisations as part of wider efforts for sustainable National Research and Education
          Network (NREN).
        </p>
        <p>
          Established in December 2009 as an initiative led by the University of Lagos, Datasphir
          Solutions Limited and the Internet Exchange Point Of Nigeria to exploit the geographical
          proximity to sea cables and telecommunication companies to secure high-speed and
          affordable Internet connectivity for the research and education community.
        </p>

        <h2>Our Vision</h2>
        <p>
          Lead the agenda of global access to knowledge and support open science outcomes in
          Nigeria.
        </p>

        <h2>Our Mission</h2>
        <p>
          The mission is to empower research and education communities through self-governed open
          science infrastructures, fostering transparency, inclusivity, and innovation while
          advocating for accessibility, diversity, and ethical standards.
        </p>

        <h2>Our Objectives</h2>
        <ul>
          <li>
            Enable secure network interoperability across research organisations and higher
            education institutions.
          </li>
          <li>Establish high-speed networks to support academic and research activities.</li>
          <li>Collaborate with stakeholders to build national and regional research networks.</li>
          <li>Promote collaborative research and community development.</li>
          <li>Support open science and open access principles.</li>
          <li>Participate actively in global research and education networks.</li>
        </ul>

        <h2>Governance</h2>
        <p>
          The initiative is directed by a Board of Trustees drawn from member institutions and the
          wider research community, supported by a secretariat in Lagos and technical working groups
          for networking, identity and open science.
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
