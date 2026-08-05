import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/community/ren-ng")({
  head: () => ({
    meta: [
      { title: "ren.ng | Eko-Konnect" },
      {
        name: "description",
        content:
          "ren.ng is the community hub for services and events across Nigeria's research and education network.",
      },
      { property: "og:title", content: "ren.ng | Eko-Konnect" },
      {
        property: "og:description",
        content: "A community hub for services and events in the research and education network.",
      },
    ],
  }),
  component: RenNg,
});

function RenNg() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="ren.ng"
        lead="A community hub for services and events across Nigeria's research and education network."
      />
      <Prose>
        <h2>What ren.ng is for</h2>
        <p>
          ren.ng brings together the services and events relevant to the research and education
          network (REN) community in Nigeria, giving member institutions, working groups and
          partners a single place to keep up with what's on offer and what's coming up.
        </p>

        <h2>Services</h2>
        <p>
          A shared view of the connectivity, identity, hosting and open science services that
          Eko-Konnect and its partners operate for the research and education community.
        </p>

        <h2>Events</h2>
        <p>
          Training, clinics and community meetings across the network are gathered here alongside
          the main{" "}
          <Link to="/events" className="text-brand">
            Events
          </Link>{" "}
          calendar, so members can find relevant activity in one place.
        </p>
      </Prose>
    </>
  );
}
