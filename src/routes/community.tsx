import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community | Eko-Konnect" },
      {
        name: "description",
        content:
          "The Eko-Konnect community brings together universities, research institutes, libraries, hospitals and partners across Nigeria.",
      },
      { property: "og:title", content: "Community | Eko-Konnect" },
      {
        property: "og:description",
        content: "Members, working groups and partners of the Eko-Konnect network.",
      },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="A network of institutions and the people who run it"
        lead="Eko-Konnect exists because its members contribute expertise, infrastructure and time to shared services."
      />
      <Prose>
        <h2>Who belongs</h2>
        <p>
          Membership is open to universities, polytechnics, colleges of education, research
          institutes, teaching hospitals, libraries and other not-for-profit organisations engaged
          in research and education in Nigeria.
        </p>

        <h2>Working groups</h2>
        <ul>
          <li>Network engineering: campus infrastructure, routing, monitoring and eduroam.</li>
          <li>Identity and access: federation policy, attribute release and service integration.</li>
          <li>
            Open science: repositories, journals, persistent identifiers and research data
            management.
          </li>
        </ul>

        <h2>Partners</h2>
        <p>
          We work alongside NgREN nationally, WACREN regionally, and international partners in the
          research and education networking, persistent identifier and open science communities.
        </p>

        <h2>Joining</h2>
        <p>
          Institutions interested in membership can contact the secretariat for an introductory
          conversation, a review of current connectivity and services, and details of contribution
          arrangements.
        </p>
      </Prose>
    </>
  );
}
