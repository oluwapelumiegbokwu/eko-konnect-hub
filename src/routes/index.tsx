import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-campus.jpg";
import { ProjectCard, ServiceCard } from "@/components/page-parts";
import { projects } from "@/lib/projects";
import {
  CloudHostingIcon,
  PersistentIdentifiersIcon,
  RepositoriesIcon,
  TrustIdentityIcon,
} from "@/components/service-icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eko-Konnect Research and Education Initiative" },
      {
        name: "description",
        content:
          "Eko-Konnect is a cluster of the Nigerian Research and Education Network, supporting connectivity, trust and identity, and open science for Nigerian institutions.",
      },
      { property: "og:title", content: "Eko-Konnect Research and Education Initiative" },
      {
        property: "og:description",
        content:
          "Network connectivity and collaboration between education and research organisations in Nigeria.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    title: "Trust and Identity",
    to: "/services/trust-and-identity",
    icon: TrustIdentityIcon,
    description:
      "Federated identity through eduroam and eduGAIN, so staff and students reach resources with a single institutional login, wherever they work.",
  },
  {
    title: "Persistent Identifiers",
    to: "/services/persistent-identifiers",
    icon: PersistentIdentifiersIcon,
    description:
      "DOIs for Nigerian research outputs and an ORCID consortium that keeps researchers, datasets and publications reliably connected.",
  },
  {
    title: "Cloud Hosting Services",
    to: "/services/cloud-hosting",
    icon: CloudHostingIcon,
    description:
      "Locally hosted virtual machines, journal platforms and web services, operated for the education and research community at community cost.",
  },
  {
    title: "Institutional Repositories",
    to: "/services/institutional-repositories",
    icon: RepositoriesIcon,
    eoiRepository: true,
    description:
      "DSpace and RUMBU deployments that help institutions collect, preserve and openly publish their scholarly record.",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate">
        <img
          src={heroImage}
          alt="A university student working at a laptop showing research and repository services"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-deep/80" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/70 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
              Research and Education Networking in Nigeria
            </p>
            <h1 className="mt-5 text-4xl leading-[1.1] text-primary-foreground md:text-6xl">
              Eko-Konnect Research and Education Initiative
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Eko-Konnect is a cluster of the Nigerian Research and Education Network (NgREN). We
              aim to support network connectivity and collaborations between education and research
              organisations as part of wider efforts for a sustainable National Research and
              Education Network.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-block border-2 border-gold px-8 py-3.5 text-sm font-semibold tracking-[0.08em] uppercase text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="max-w-3xl rule-accent">
          <p className="eyebrow">Our Services</p>
          <h2 className="mt-3 text-3xl leading-tight text-brand-deep md:text-4xl">
            Shared infrastructure that encourages trust and promotes open science for Nigerian
            institutions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Our services are built and operated with the community. They lower the cost of identity,
            publishing and hosting for member institutions, and make Nigerian research visible,
            verifiable and openly available.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.to}
              icon={service.icon}
              title={service.title}
              description={service.description}
              to={service.to}
              eoiRepository={service.eoiRepository}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-brand-tint">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <div className="max-w-3xl rule-accent">
            <p className="eyebrow">Projects</p>
            <h2 className="mt-3 text-3xl leading-tight text-brand-deep md:text-4xl">
              Work we deliver with and for our member institutions
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Eko-Konnect convenes universities, research institutes, libraries and partners around
              projects that build lasting national capability.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid gap-12 border border-border p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="eyebrow">Mailing List</p>
            <h2 className="mt-3 text-3xl leading-tight text-brand-deep">
              Stay informed about our services, training and community events
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We send occasional updates on network developments, DOI and ORCID consortium news,
              repository training and upcoming events. No more than one message a month.
            </p>
          </div>
          <form
            className="self-center"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="ml-name" className="block text-sm font-medium text-foreground">
              Full name
            </label>
            <input
              id="ml-name"
              name="name"
              required
              className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand"
            />
            <label
              htmlFor="ml-institution"
              className="mt-5 block text-sm font-medium text-foreground"
            >
              Institution
            </label>
            <input
              id="ml-institution"
              name="institution"
              className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand"
            />
            <label htmlFor="ml-email" className="mt-5 block text-sm font-medium text-foreground">
              Email address
            </label>
            <input
              id="ml-email"
              name="email"
              type="email"
              required
              className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="mt-7 w-full bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.08em] uppercase text-primary-foreground transition-colors hover:bg-brand-deep sm:w-auto"
            >
              Join the mailing list
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
