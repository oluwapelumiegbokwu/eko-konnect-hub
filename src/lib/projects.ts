import { contact } from "@/lib/site-nav";

export type Project = {
  title: string;
  href: string;
  body: string;
};

export const projects: Project[] = [
  {
    title: "GAF Demonstrator Project",
    href: "https://datacite.org/global-access-fund/#GAF-awardees",
    body: "Eko-Konnect collaborated with the National Commission of Museums and Monuments (NCMM), under the Federal Ministry of Arts, Culture & Creative Economy, to advance the GAF Demonstrator Project. The project's objective is to digitize Nigeria's archaeological artefacts and historical objects, ensuring their long-term accessibility in Open Access Repositories. This initiative supports the broader goal of enhancing cultural heritage preservation while promoting Open Science and Open Access practices.",
  },
  {
    title: "Deployment of the National Repository of Nigeria",
    href: "https://nigeriareposit.nln.gov.ng/",
    body: "Eko-Konnect successfully deployed the National Repository of Nigeria on behalf of the National Library of Nigeria, the apex library for Nigeria. The National Repository has as its objective the preservation of Nigeria's intellectual and cultural resources for posterity. The national repository represents the vision of the National Librarian/CEO Prof. Chinwe Veronica Anunobi to increase the availability and accessibility of the Nigerian knowledge storehouse that contains its scholarly, literary, and cultural heritage to the Nigerian and global community.",
  },
  {
    title: "Global Access Program (GAP)",
    href: `mailto:${contact.email}`,
    body: "Eko-Konnect's Global Access Program (GAP) works to expand affordable, reliable access to global research and education infrastructure for Nigerian institutions, supporting the identity, hosting and open science services that keep the community connected to international research and education networks. Contact the secretariat for current programme details.",
  },
];
