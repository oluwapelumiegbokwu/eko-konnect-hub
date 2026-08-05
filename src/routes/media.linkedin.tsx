import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-parts";
import { contact } from "@/lib/site-nav";

export const Route = createFileRoute("/media/linkedin")({
  head: () => ({
    meta: [
      { title: "LinkedIn Posts | Eko-Konnect" },
      {
        name: "description",
        content: "LinkedIn updates from Eko-Konnect Research and Education Initiative.",
      },
      { property: "og:title", content: "LinkedIn Posts | Eko-Konnect" },
    ],
  }),
  component: LinkedInPosts,
});

function LinkedInPosts() {
  return (
    <>
      <PageHeader eyebrow="Media" title="LinkedIn Posts" />
      <section className="mx-auto max-w-[760px] px-6 py-20">
        {/* TODO: replace with real LinkedIn feed/content before launch */}
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
          Content pending
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          This page was added as part of a navigation update and does not yet contain Eko-Konnect's
          LinkedIn updates.
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          For current updates, contact the secretariat at{" "}
          <a
            href={`mailto:${contact.email}`}
            className="border-b-2 border-gold pb-0.5 font-semibold text-brand"
          >
            {contact.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
