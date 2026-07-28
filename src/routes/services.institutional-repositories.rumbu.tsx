import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/services/institutional-repositories/rumbu")({
  head: () => ({
    meta: [
      { title: "RUMBU Repository Service | Eko-Konnect" },
      {
        name: "description",
        content:
          "RUMBU is a lightweight, locally supported repository option for Nigerian institutions beginning their open access programme.",
      },
      { property: "og:title", content: "RUMBU Repository Service | Eko-Konnect" },
      {
        property: "og:description",
        content: "A lightweight repository option for institutions starting out with open access.",
      },
    ],
  }),
  component: Rumbu,
});

function Rumbu() {
  return (
    <>
      <PageHeader
        eyebrow="Institutional Repositories"
        title="RUMBU"
        lead="A lighter repository path for institutions that want to publish their scholarly record without operating a large platform."
      />
      <Prose>
        <h2>Designed for a straightforward start</h2>
        <p>
          RUMBU suits departments, colleges and smaller institutions with modest collections and
          limited technical staff. It offers the essentials of a repository, deposit, description,
          search and open access delivery, with a shorter route from decision to live service.
        </p>

        <h2>Service features</h2>
        <ul>
          <li>Hosted setup with institutional branding and collection structure.</li>
          <li>Simple deposit and review workflow for library staff.</li>
          <li>Open indexing so records are discoverable through search engines.</li>
          <li>An upgrade path to DSpace as collections and requirements grow.</li>
        </ul>

        <h2>Support</h2>
        <p>
          The Eko-Konnect secretariat provides onboarding, staff training and continuing technical
          support, together with guidance on deposit policy and copyright.
        </p>
      </Prose>
    </>
  );
}
