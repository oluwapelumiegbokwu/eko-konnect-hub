import { createFileRoute } from "@tanstack/react-router";
import { useId, useState } from "react";
import { PageHeader } from "@/components/page-parts";
import charlesUwadia from "@/assets/trustees/charles-uwadia.jpg";
import gloriaChukwudebe from "@/assets/trustees/gloria-chukwudebe.jpg";
import woleAbu from "@/assets/trustees/wole-abu.jpeg";
import annieEimiakhena from "@/assets/trustees/annie-eimiakhena.jpg";
import sahaluJunaidu from "@/assets/trustees/sahalu-junaidu.jpg";
import richardAmafonye from "@/assets/trustees/richard-amafonye.jpg";
import omoOaiya from "@/assets/trustees/omo-oaiya.jpg";
import owenIyoha from "@/assets/trustees/owen-iyoha.jpg";

export const Route = createFileRoute("/about/board-of-trustees")({
  head: () => ({
    meta: [
      { title: "Board of Trustees | Eko-Konnect" },
      {
        name: "description",
        content:
          "The Eko-Konnect Board of Trustees provides governance and strategic direction for the initiative on behalf of member institutions.",
      },
      { property: "og:title", content: "Board of Trustees | Eko-Konnect" },
      {
        property: "og:description",
        content: "Governance and strategic direction for Eko-Konnect member institutions.",
      },
    ],
  }),
  component: BoardOfTrustees,
});

type Trustee = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

const trustees: Trustee[] = [
  {
    name: "Prof. Charles Uwadia",
    role: "Chair",
    photo: charlesUwadia,
    bio: "Professor Charles Onuwa Uwadia is a Professor of Computer Science at the Department of Computer Sciences, University of Lagos. His areas of specialization are Software Engineering, Computer Architecture, Communications and Networking Systems. He holds a BSc (Computer Science), University of Ibadan, 1979; an MSc (Computer Science), University of Lagos, 1983; and a PhD (Computer Science), University of Lagos, 1990. He has served the University in various capacities including Acting Head of Department 1996–1998; Acting Director, Computer Centre 2003–2005; Director, Centre for Information Technology and Systems 2005–2013; and Head of Department 2013–2016, with over 80 academic publications in reputable local and international media. He is a member of ACM, IEEE, and a Fellow of the Nigeria Computer Society, having served as President, Nigeria Computer Society 2007–2011, and President/Chairman-in-Council, Computer Professionals Registration Council of Nigeria 2017–2021. He is the Chair of Eko-Konnect Research and Education Initiative.",
  },
  {
    name: "Prof. Gloria Chukwudebe",
    role: "Member",
    photo: gloriaChukwudebe,
    bio: "Professor Gloria Chukwudebe is the current Dean of the School of Computing and Information Technology and a Professor of Electronic and Computer Engineering at the Federal University of Technology, Owerri (FUTO). She holds B.Eng (Hons) and M.Eng degrees in Electronic Engineering from the University of Nigeria, Nsukka, and a PhD in the same field from the University of Newcastle Upon Tyne, UK. She has served FUTO as Head of Department, Electrical/Electronic Engineering (1999–2005); Director of Computer Centre (2010–2011); Director of ICT (2011–2014); and Director, Public Procurement Research Centre (2016–2018), alongside three years of industrial experience at Shell Petroleum Development Company on skill pool management and IT quality assurance. In the EEE department she leads Microelectronics and Solar Energy research, and has mentored three start-up companies: Green Village Electricity Projects, Skytrain Electronics, and Cyberflux. She is a Fellow of the Nigerian Society of Engineers and the Nigerian Computer Society, a former member of the Council for Regulation of Engineering in Nigeria (COREN), and an active member of the Association of Professional Women Engineers of Nigeria. She served as Nigeria Section Chair of IEEE (2011–2015) and currently chairs the IEEE Africa Area.",
  },
  {
    name: "Wole Abu",
    role: "Member",
    photo: woleAbu,
    bio: "Wole Abu is an ethical business strategist with over 25 years of experience spanning the telecommunications and manufacturing industries, with an in-depth understanding of the telecommunications sector and the global business environment. Over the last 12 years he has held senior leadership positions driving strategy and innovation that delivered increased revenue and market share for multinationals generating over $1bn in revenue, and is accustomed to delivering results in challenging circumstances within high-performing organisations that value innovation, efficient operations, and customer service. He is currently the Chief Executive Officer at Liquid Intelligent Technologies.",
  },
  {
    name: "Annie Eimiakhena",
    role: "Member",
    photo: annieEimiakhena,
    bio: "Annie Eimiakhena is the Director of Lohi Consulting, an experienced consultant with a demonstrated history of working in the management consulting industry, skilled in business process reviews, facilitation, executive coaching, organisational design, and business transformation. She holds a Master's degree in Business Administration from the Lagos Business School, PanAtlantic University, and is a certified Project Management Professional (PMP). She also holds a Certificate in Training (Training Accreditation Program) with a design focus on developing learning solutions, and has experience as a recruiter seeking unique talents and skills.",
  },
  {
    name: "Prof. Sahalu Junaidu",
    role: "Member",
    photo: sahaluJunaidu,
    bio: "Sahalu Junaidu Balarabe is a Professor of Computer Science at Ahmadu Bello University, Zaria, Nigeria. He trained at Ahmadu Bello University, Zaria; Queen Mary & Westfield College, University of London; and St. Andrews University, Scotland. He has held a number of administrative positions, serving as Head, Department of Computer Science; Dean, Faculty of Physical Sciences; and ICT Director for ten years, all at Ahmadu Bello University, Zaria. Since November 2021 he has been on secondment to the Nigerian Communications Commission, serving as Chief Research Adviser to the Honourable Minister of Communications and Digital Economy.",
  },
  {
    name: "Richard Amafonye",
    role: "Member",
    photo: richardAmafonye,
    bio: "Richard Amafonye is Head, IT Resources at Access Bank Plc. He is an experienced technology professional with several years across various IT roles, having managed complex digital transformation projects in banking. His expertise spans technology strategy, IT management, systems analysis, design and implementation, and application development and operational management. His greatest strength is his ability to analyse systems for business improvement opportunities and implement technology solutions, a record that has reduced costs and enhanced productivity while improving efficiency.",
  },
  {
    name: "Omo Oaiya",
    role: "Member",
    photo: omoOaiya,
    bio: "Omo Oaiya has been offering consultancy and management support to research and academic institutions in Africa for the last twenty years. He is currently the Chief Strategy Officer of the West and Central African Research and Education Network (WACREN), where he drives strategic growth, developing partnerships to sustain initiatives across its constituent NRENs and facilitating plans for the future. The creator of the LIBSENSE initiative, he has worked with sister regional African RENs (ASREN and the Ubuntunet Alliance), several national RENs, library associations, universities, and research communities across Africa to build communities of practice and strengthen local and national services supporting open science and research on the continent.",
  },
  {
    name: "Owen Iyoha",
    role: "CEO / Secretary to the Board",
    photo: owenIyoha,
    bio: "Owen Iyoha serves as CEO of Eko-Konnect Research and Education Initiative, a position he has held since the organisation's founding in 2009, directing infrastructure development, capacity building and advocacy to develop all aspects of the research and education network and its community in Nigeria. With more than 25 years in ICT, he has gained international experience across the United Kingdom, United States, and Nigeria, including positions at Server Enterprise UK Limited, OpenLink Software Inc., and Datasphir Solutions Limited, delivering pre-sales support and consultancy on solutions spanning middleware, SAP, business intelligence, data warehousing, and mail and collaboration. He is an ardent advocate for open-source software, open science, and open access initiatives that advance technology and scholarly contribution within Nigeria, and holds a Joint Honours Degree in Chemistry and Biochemistry from the University of Salford in the United Kingdom.",
  },
];

function TrusteeCard({ trustee }: { trustee: Trustee }) {
  const [open, setOpen] = useState(false);
  const bioId = useId();

  return (
    <article className="border-2 border-brand p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4 sm:gap-5">
          <img
            src={trustee.photo}
            alt={trustee.name}
            width={112}
            height={112}
            className="h-20 w-20 shrink-0 object-cover sm:h-28 sm:w-28"
          />
          <div className="pt-1">
            <h2 className="text-lg leading-snug text-brand-deep sm:text-xl">{trustee.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{trustee.role}</p>
          </div>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={bioId}
          onClick={() => setOpen((value) => !value)}
          className="shrink-0 border-b-2 border-gold pb-0.5 text-xs font-semibold tracking-wide text-brand transition-colors hover:text-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {open ? "− Hide Bio" : "+ Read Bio"}
        </button>
      </div>
      {open ? (
        <div id={bioId} className="mt-6 border-t border-border pt-5">
          <p className="text-sm leading-relaxed text-foreground/85">{trustee.bio}</p>
        </div>
      ) : null}
    </article>
  );
}

function BoardOfTrustees() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Board of Trustees"
        lead="The board holds the initiative in trust for its members, setting strategy, approving the annual programme of work and safeguarding the not-for-profit character of Eko-Konnect."
      />
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {trustees.map((trustee) => (
            <TrusteeCard key={trustee.name} trustee={trustee} />
          ))}
        </div>
      </section>
    </>
  );
}
