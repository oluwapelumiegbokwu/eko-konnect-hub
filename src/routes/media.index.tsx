import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/page-parts";

export const Route = createFileRoute("/media/")({
  head: () => ({
    meta: [
      { title: "Media | Eko-Konnect" },
      {
        name: "description",
        content:
          "Blog posts and LinkedIn updates from Eko-Konnect, covering service announcements, project milestones and community reporting.",
      },
      { property: "og:title", content: "Media | Eko-Konnect" },
      {
        property: "og:description",
        content: "Blog and LinkedIn updates from the Eko-Konnect network.",
      },
    ],
  }),
  component: Media,
});

function Media() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Media"
        lead="Writing and updates from Eko-Konnect, across our blog and LinkedIn."
      />
      <Prose>
        <h2>Where to find us</h2>
        <ul>
          <li>
            <Link to="/media/blog" className="text-brand">
              Blog Posts
            </Link>{" "}
            — longer-form updates on services, projects and community milestones.
          </li>
          <li>
            <Link to="/media/linkedin" className="text-brand">
              LinkedIn Posts
            </Link>{" "}
            — shorter updates and announcements shared with the wider network.
          </li>
        </ul>
      </Prose>
    </>
  );
}
