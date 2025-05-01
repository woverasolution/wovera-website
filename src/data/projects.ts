export interface Technology {
  name: string;
  logo: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  technologies: Technology[];
  client: string;
  duration: string;
  completionDate: string;
  category: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const technologies = {
  React: { logo: "/logos/React.svg", name: "React" },
  Nextjs: { logo: "/logos/nextjs.svg", name: "Next.js" },
  Csharp: { logo: "/logos/Csharp.svg", name: ".NET Core" },
  Python: { logo: "/logos/Python.svg", name: "Python" },
  Postgres: { logo: "/logos/PostgreSQL.svg", name: "PostgreSQL" },
  QGIS: { logo: "/logos/qgis.svg", name: "QGIS" },
};

export const projects: Project[] = [
  {
    id: "cadastre-cis",
    slug: "cadastre-information-system",
    title: "Cadastre Information System (CIS10)",
    shortDescription:
      "Complete rewrite and modernization of Ethiopia's premier cadastre platform into a workflow-driven CIS10 for the Dire Dawa Land Development and Management Bureau.",
    fullDescription:
      "Wovera Solutions PLC, subcontracted by INTAPS Consultancy PLC, partnered with the Dire Dawa Land Development and Management Bureau (DDLDMB) to rewrite and modernize the Cadastre Information System (CIS). We led end-to-end requirements gathering, technical documentation, and a full-scale rewrite of the CIS Core platform, and developed a CIS Appointment Portal to enable online services for landowners—significantly reducing on-site congestion and wait times.",
    thumbnail: "/images/projects/cis.png",
    images: [
      "/images/projects/cis1.jpg",
      "/images/projects/cis2.jpg",
      "/images/projects/cis3.jpg",
    ],
    technologies: [
      technologies.React,
      technologies.Csharp,
      technologies.Postgres,
    ],
    client: "Dire Dawa Land Development and Management Bureau (DDLDMB)",
    duration: "1 year",
    completionDate: "April 2025",
    category: "Government",
    challenges: [
      "Lack of enforced workflows leading to data inconsistency",
      "Migrating 15+ years of unstructured legacy data",
    ],
    solutions: [
      "Introduced configurable workflows for every land transaction",
      "Built a semi-automated data migration framework to cleanse and transfer legacy records",
    ],
    results: [
      "Thousands of records migrated with full data validation",
      "Reduced wait times via the CIS Appointment Portal",
      "Elevated DDLDMB's operational efficiency",
    ],
    // testimonial: {
    //   quote:
    //     "Wovera's work transformed our legacy CIS into a modern, reliable system that has streamlined our land administration processes.",
    //   author: "John Doe",
    //   position: "Director, DDLDMB",
    // },
  },
  {
    id: "wumis-water-utility-mis",
    slug: "water-utility-mis",
    title: "Water Utility Management Information System (WUMIS)",
    shortDescription:
      "Comprehensive MIS for 22 Ethiopian urban water utilities—covering finance, customer service, asset maintenance, water production, HR, and centralized analytics—under the World Bank–funded UWSSP II.",
    fullDescription:
      "Over two years, Wovera team members led system architecture, sprint planning, detailed requirements gathering, UI/UX workflows, and rollout across 22 utilities. The suite—WUMIS Core, Mobile, Portal, and Aggregator—unified financial processes, field data collection, self-service, and national KPI monitoring, transforming utility operations and governance.",
    thumbnail: "/images/projects/wumis.png",
    images: [
      "/images/projects/wumis3.jpg",
      "/images/projects/wumis2.jpg",
      "/images/projects/wumis1.jpg",
      "/images/projects/wumis4.jpg",
    ],
    technologies: [
      technologies.React,
      technologies.Csharp,
      technologies.Postgres,
    ],
    client: "Ministry of Water and Energy (MoWE)",
    duration: "2 years",
    completionDate: "April 2025",
    category: "Utilities",
    challenges: [
      "Fragmented financial processes and poor asset management",
      "No national mechanism for benchmarking utility performance",
    ],
    solutions: [
      "Built WUMIS Core, Mobile, Portal, and Aggregator modules",
      "Designed aggregated data models for cross-utility KPI benchmarking",
    ],
    results: [
      "Unified digital operations in 22 utilities serving over 1 million customers",
      "Real-time KPI dashboards improved national oversight",
      "Now a reference MIS implementation in Ethiopia's utility sector",
    ],
  },
  {
    id: "brewtech-sensory-analysis",
    slug: "lims-integrated-sensory-analysis",
    title: "LIMS-Integrated Sensory Analysis Software",
    shortDescription:
      "Multi-tenant sensory analysis platform integrated with existing LIMS to automate brewery testing workflows and statistical reporting for Brewtech GmbH.",
    fullDescription:
      "Acting as sole technology partner, we conducted deep requirements analysis with sensory-science experts, designed a scalable multi-tenant architecture, and implemented a robust statistical engine. The result is a state-of-the-art platform that accelerates new product development, standardizes quality control, and delivers actionable, historical trend insights to brewery clients worldwide.",
    thumbnail: "/images/projects/brew-tech.png",
    images: [
      "/images/projects/brew-tech1.jpg",
      "/images/projects/brew-tech2.jpg",
      "/images/projects/brew-tech3.jpg",
    ],
    technologies: [
      technologies.Nextjs,
      technologies.Csharp,
      technologies.Postgres,
    ],
    client: "Brewtech GmbH",
    duration: "6 months",
    completionDate: "April 2025",
    category: "International",
    challenges: [
      "Need for a cost-effective, customizable solution for global users",
      "Off-the-shelf products misaligned with brewery-specific workflows",
    ],
    solutions: [
      "Comprehensive stakeholder interviews to map sensory workflows",
      "Flexible data models and an advanced statistical reporting engine",
    ],
    results: [
      "Deployed across multiple brewery clients, ensuring consistent product evaluation",
      "Accelerated new product development and enhanced QA",
      "Delivered measurable ROI through data-driven insights",
    ],
  },
];
