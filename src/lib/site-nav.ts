export type NavNode = {
  label: string;
  to: string;
  children?: NavNode[];
};

export const primaryNav: NavNode[] = [
  {
    label: "About Us",
    to: "/about",
    children: [{ label: "Board of Trustees", to: "/about/board-of-trustees" }],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Trust and Identity", to: "/services/trust-and-identity" },
      { label: "Cloud Hosting Services", to: "/services/cloud-hosting" },
      {
        label: "Institutional Repositories",
        to: "/services/institutional-repositories",
        children: [
          { label: "DSpace", to: "/services/institutional-repositories/dspace" },
          { label: "RUMBU", to: "/services/institutional-repositories/rumbu" },
        ],
      },
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
    ],
  },
  {
    label: "Projects",
    to: "/projects",
    children: [{ label: "Corporate Social Responsibility (CSR)", to: "/projects/csr" }],
  },
  {
    label: "Media",
    to: "/media",
    children: [
      { label: "Blog Posts", to: "/media/blog" },
      { label: "LinkedIn Posts", to: "/media/linkedin" },
    ],
  },
  { label: "News", to: "/news" },
  {
    label: "Events",
    to: "/events",
    children: [{ label: "Past Events", to: "/events/past-events" }],
  },
  {
    label: "Community",
    to: "/community",
    children: [{ label: "ren.ng", to: "/community/ren-ng" }],
  },
  { label: "Contact Us", to: "/contact" },
];

export const contact = {
  address: "11B Taiye Olowu Street, Lekki Phase 1, Lagos, Nigeria",
  phone: "+234 705 804 6509",
  email: "secretariat@eko-konnect.org.ng",
};
