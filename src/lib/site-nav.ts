export type NavNode = {
  label: string;
  to: string;
  children?: NavNode[];
};

export const primaryNav: NavNode[] = [
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Board of Trustees", to: "/about/board-of-trustees" },
      { label: "Projects", to: "/about/projects" },
      { label: "Corporate Social Responsibility (CSR)", to: "/about/csr" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Trust and Identity", to: "/services/trust-and-identity" },
      {
        label: "Persistent Identifiers",
        to: "/services/persistent-identifiers",
        children: [
          {
            label: "Digital Object Identifiers (DOIs)",
            to: "/services/persistent-identifiers/dois",
          },
          {
            label: "ORCID Consortium",
            to: "/services/persistent-identifiers/orcid-consortium",
          },
        ],
      },
      { label: "Cloud Hosting Services", to: "/services/cloud-hosting" },
      {
        label: "Institutional Repositories",
        to: "/services/institutional-repositories",
        children: [
          { label: "DSpace", to: "/services/institutional-repositories/dspace" },
          { label: "RUMBU", to: "/services/institutional-repositories/rumbu" },
        ],
      },
    ],
  },
  { label: "News", to: "/news" },
  { label: "Events", to: "/events" },
  { label: "Community", to: "/community" },
];

export const contact = {
  address: "11B Taiye Olowu Street, Lekki Phase 1, Lagos, Nigeria",
  phone: "+234 705 804 6509",
  email: "secretariat@eko-konnect.org.ng",
};
