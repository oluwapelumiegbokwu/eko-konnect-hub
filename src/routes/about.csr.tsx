import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-parts";
import { contact } from "@/lib/site-nav";

export const Route = createFileRoute("/about/csr")({
  head: () => ({
    meta: [
      { title: "Corporate Social Responsibility (CSR) | Eko-Konnect" },
      {
        name: "description",
        content: "Eko-Konnect's Corporate Social Responsibility (CSR) programme.",
      },
      { property: "og:title", content: "Corporate Social Responsibility (CSR) | Eko-Konnect" },
    ],
  }),
  component: Csr,
});

function Csr() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Corporate Social Responsibility (CSR)" />
      <section className="mx-auto max-w-[760px] px-6 py-20">
        {/* TODO: replace with real CSR programme content before launch */}
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gold">
          Content pending
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          This page was added as part of a navigation update and does not yet contain Eko-Konnect's
          Corporate Social Responsibility programme details.
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          For current CSR information, contact the secretariat at{" "}
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
