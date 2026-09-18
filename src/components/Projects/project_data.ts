import { ProjectData } from "../../types";

export interface CompanyMetadata {
  company: string;
  role: string;
  duration: string;
  location: string;
  overview: string;
  customProjects?: {
    name: string;
    slug?: string;
    liveLink?: string | null;
    achievements?: string[];
    techStack: string[];
  }[];
}

export const projectData: ProjectData[] = [
  {
    "id": 1,
    "company": "Param Divya",
    "slug": "acrspace",
    "title": "ACRSpace – Multi-Tenant SaaS Inventory, POS & Billing Platform",
    "tech_stack": [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "TypeScript",
      "Razorpay",
      "REST APIs",
      "RBAC",
      "Cloudinary",
      "Tally XML",
      "Zustand",
      "TanStack Query"
    ],
    "live_demo": "https://acrspace.com",
    "code": null,
    "about": "Architected and engineered an enterprise-grade multi-tenant, multi-warehouse B2B SaaS platform powering point-of-sale (POS), procurement, inventory control, automated billing, and ledger accounting with strict organization-level data isolation.",
    "features": [
      "Architected a 'Two-Lock Door' authorization engine decoupling Subscription Entitlements (Limit Engine) from Enterprise RBAC across 50+ protected REST API routes with sub-millisecond permission checks and zero-downtime instant revocation.",
      "Cut API latency from 7s–9s to 300–800ms (and repeat lookups to 1–20ms) using a dual-layer waterfall cache (L1 In-Memory LRU <1ms + L2 Remote Redis) backed by a Promise Coalescing Stampede Shield preventing thundering herd database overload.",
      "Engineered multi-warehouse stock management featuring O(1) embedded warehouseStocks arrays with atomic MongoDB arrayFilters, x-warehouse-id header context, and automated plan-based location quota guards (WarehouseQuotaGuard).",
      "Engineered an append-only immutable StockMovement accounting ledger tracking Purchase, Sale, Return, Adjustment, and Multi-Warehouse Transfer operations with zero-ghost immutability.",
      "Built an ACID-compliant POS checkout & revision pipeline using MongoDB $session transactions for split payments, atomic stock deductions, and strict bounds checking preventing overselling.",
      "Integrated Razorpay subscription billing with a deterministic state machine, HMAC-SHA256 webhooks, automated PDF invoice generation, and an institutional Tally Prime XML export engine for CPA balance-sheet reconciliation.",
      "Designed a direct-to-cloud media upload pipeline using HMAC-SHA1 signatures and client-side HTML5 canvas interception, compressing 5MB smartphone photos down to ~150KB WebP assets before transit.",
      "Developed real-time cross-device & tab synchronization via browser BroadcastChannel API and tab-visibility heartbeat polling (/api/v1/sync/version), eliminating stale state without hard refreshes.",
      "Built serverless background worker queues and cron endpoints for Redis Audit Log Flushing, Subscription Expiration Sweeping (with Redis mutex locks), and Nightly MongoDB Aggregation Usage Reconciliation.",
      "Engineered an automated Fraud & Anti-Abuse engine featuring O(1) Redis Token Bucket velocity tracking, disposable email domain filtering, and a Mongoose Change Data Capture (CDC) audit system pushing pre-mutation snapshots to a Redis Outbox (batch-processed at 1,000 logs/batch)."
    ],
    "isClientProject": true,
    "clientMessage": "Code repository restricted due to client confidentiality",
    "images": [
      "/assets/project_images/acrspace/acrspace_image_14.webp",
      "/assets/project_images/acrspace/acrspace_image_1.webp",
      "/assets/project_images/acrspace/acrspace_image_2.webp",
      "/assets/project_images/acrspace/acrspace_image_3.webp",
      "/assets/project_images/acrspace/acrspace_image_4.webp",
      "/assets/project_images/acrspace/acrspace_image_5.webp",
      "/assets/project_images/acrspace/acrspace_image_6.webp",
      "/assets/project_images/acrspace/acrspace_image_7.webp",
      "/assets/project_images/acrspace/acrspace_image_8.webp",
      "/assets/project_images/acrspace/acrspace_image_9.webp",
      "/assets/project_images/acrspace/acrspace_image_10.webp",
      "/assets/project_images/acrspace/acrspace_image_11.webp",
      "/assets/project_images/acrspace/acrspace_image_12.webp",
      "/assets/project_images/acrspace/acrspace_image_13.webp",
    ]
  },
  {
    "id": 2,
    "company": "Param Divya",
    "slug": "param-divya-agency",
    "title": "Param Divya Agency - Wood Import/Export Platform",
    "tech_stack": [
      "React.js",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "REST API",
      "PostgreSQL",
      "Redis",
      "TanStack Query",
      "Tailwind CSS",
      "Cloudinary"
    ],
    "images": [
      "/assets/project_images/paramdivya/paramdivya_image_1.webp",
      "/assets/project_images/paramdivya/paramdivya_image_2.webp",
      "/assets/project_images/paramdivya/paramdivya_image_3.webp",
    ],
    "live_demo": "https://www.paramdivya.com",
    "code": null,
    "about": "Built a production-grade B2B digital catalog for a Kutch/Gandhinagar based premium hardwood importer and custom woodwork manufacturer. Covers two distinct product lines — imported timber (teak logs, sawn timber, planks, veneers) and custom woodwork projects (mandirs, doors, furniture, flooring, wall paneling).",
    "features": [
      "Developed advanced product discovery capabilities with multi-dimensional filtering across timber species, grade, drying type, origin, dimensions, and product forms, enabling efficient navigation across large product inventories.",
      "Built a direct-to-cloud image pipeline with client-side WebP compression and signed Cloudinary uploads, eliminating server-side upload processing and orphaned storage.",
      "Reduced product search and catalog REST API response times from 5–6s to 200–620ms through PostgreSQL query optimization, GIN indexing, trigram fuzzy matching, and N+1 query elimination.",
      "Implemented Redis + TanStack Query caching with event-driven invalidation, serving repeat requests in 1–5ms while reducing database load.",
      "Built a Node.js + Sharp image optimization pipeline that automatically converts, compresses, and rewrites static asset imports to WebP, reducing frontend payload from 60.8MB to 9.7MB (84% reduction).",
      "Implemented react-snap SSG with dynamic sitemap generation ensuring 100% indexability of all product and blog pages."
    ],
    "isClientProject": true,
    "clientMessage": "Code repository restricted due to client confidentiality"
  },
  {
    "id": 3,
    "company": "Param Divya",
    "slug": "housingwaala",
    "title": "HousingWaala - Real Estate Platform",
    "tech_stack": [
      "Next.js",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "TanStack Query",
      "REST API",
      "Cloudinary"
    ],
    "images": [
      "/assets/project_images/housingwaala/housingwaala_image_1.webp",
      "/assets/project_images/housingwaala/housingwaala_image_14.webp",
      "/assets/project_images/housingwaala/housingwaala_image_15.webp",
      "/assets/project_images/housingwaala/housingwaala_image_2.webp",
      "/assets/project_images/housingwaala/housingwaala_image_3.webp",
      "/assets/project_images/housingwaala/housingwaala_image_4.webp",
      "/assets/project_images/housingwaala/housingwaala_image_5.webp",
      "/assets/project_images/housingwaala/housingwaala_image_6.webp",
      "/assets/project_images/housingwaala/housingwaala_image_7.webp",
      "/assets/project_images/housingwaala/housingwaala_image_8.webp",
      "/assets/project_images/housingwaala/housingwaala_image_9.webp",
      "/assets/project_images/housingwaala/housingwaala_image_10.webp",
      "/assets/project_images/housingwaala/housingwaala_image_11.webp",
      "/assets/project_images/housingwaala/housingwaala_image_12.webp",
      "/assets/project_images/housingwaala/housingwaala_image_13.webp",
    ],
    "live_demo": "https://www.housingwaala.com",
    "code": null,
    "about": "A full-scale real estate platform featuring dynamic, admin-managed property listings across multiple property types, unit configurations, and cities. Includes property discovery with filtering, lead capture, developer profiles, possession tracking, and Cloudinary media handling.",
    "features": [
      "Built property listings, search, detail pages, filtering, lead capture, developer profiles, and map-based property discovery.",
      "Reduced property listing REST API response times from 6–8s to 500–700ms by implementing selective field projections and deferred ORM model hydration, eliminating expensive multi-table join overhead during paginated catalog queries.",
      "Optimized multi-table property detail queries from 9–12s to 0.7–1.5s using prefetch_related, select_related, and PostgreSQL indexing across images, amenities, pricing, location, and specification relationships.",
      "Designed a dual-layer caching system (Redis + TanStack Query) with event-driven invalidation, bringing repeat requests to under 20ms across listing, detail, and search endpoints.",
      "Built a global pagination system with configurable default page size, dynamic ?page_size override per endpoint, and next/previous links directly in the response — reducing frontend pagination logic to zero."
    ],
    "isClientProject": true,
    "clientMessage": "Code repository restricted due to client confidentiality"
  },
  {
    "id": 4,
    "company": "Freelance / Independent",
    "slug": "greenmendbio",
    "title": "GreenmendBio – B2B Showcase Landing Page",
    "tech_stack": [
      "Next.js",
      "React.js",
      "Tailwind CSS",
    ],
    "live_demo": "https://www.greenmendbio.com",
    "code": null,
    "about": "A high-performance B2B showcase landing page built with Next.js, React, and static data (SSG) for a Made-in-India manufacturer of FDA-approved, ISO-certified sugarcane bagasse tableware.",
    "features": [
      "Designed and developed a responsive B2B showcase landing page using Next.js static site generation (SSG) with zero backend/REST API overhead.",
      "Achieved Lighthouse scores of 98 performance, 92 SEO, and 0 CLS.",
      "Optimized asset delivery with 0.5s FCP and 0.9s LCP through static generation, WebP image optimization, and route-level code splitting."
    ],
    "isClientProject": true,
    "clientMessage": "Code repository restricted due to client confidentiality",
    "images": [
      "/assets/project_images/greenmendbio/greenmendbio_image_1.webp",
      "/assets/project_images/greenmendbio/greenmendbio_image_2.webp",
      "/assets/project_images/greenmendbio/greenmendbio_image_3.webp",
      "/assets/project_images/greenmendbio/greenmendbio_image_4.webp",
      "/assets/project_images/greenmendbio/greenmendbio_image_5.webp",
      "/assets/project_images/greenmendbio/greenmendbio_image_6.webp",
      "/assets/project_images/greenmendbio/greenmendbio_image_7.webp",
      "/assets/project_images/greenmendbio/greenmendbio_image_8.webp"
    ]
  },
  {
    "id": 5,
    "company": "Freelance / Independent",
    "slug": "ecotte-ecommerce-backend",
    "title": "Ecotte - E-Commerce Backend",
    "tech_stack": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Stripe",
      "Razorpay"
    ],
    "live_demo": "https://ecomm-nodejs-backend.vercel.app",
    "code": "https://github.com/jdmkd/ecomm-nodejs-backend",
    "about": "A scalable and highly secure backend engine for eCommerce applications.",
    "features": [
      "Designed 75+ scalable ecommerce REST APIs.",
      "Implemented comprehensive workflows covering JWT authentication, cart management, and order processing.",
      "Integrated Cloudinary media handling and Stripe/Razorpay dual payment gateways.",
      "Enforced Role-Based Access Control (RBAC) and secure password management."
    ],
    "isClientProject": false,
    "images": [
      "/assets/images/wolf_placeholder.webp"
    ]
  },
  {
    "id": 6,
    "company": "Freelance / Independent",
    "slug": "starlettecars",
    "title": "StarletteCars – Vehicle Rental Platform",
    "tech_stack": [
      "Python",
      "Django",
      "PostgreSQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap"
    ],
    "live_demo": "https://starlettex.pythonanywhere.com",
    "code": "https://github.com/jdmkd/Starlettecars",
    "images": [
      "/assets/project_images/starlettecars/Rental_vehicle_customer_side1.webp",
      "/assets/project_images/starlettecars/Rental_vehicle_customer_side2.webp",
      "/assets/project_images/starlettecars/Rental_vehicle_customer_side3.webp",
      "/assets/project_images/starlettecars/Rental_vehicle_customer_side4.webp",
      "/assets/project_images/starlettecars/Rental_vehicle_customer_side5.webp",
      "/assets/project_images/starlettecars/Rental_vehicle_customer_side6.webp",
      "/assets/project_images/starlettecars/Rental_vehicle_customer_side7.webp",
      "/assets/project_images/starlettecars/Rental_vehicle_customer_side8.webp",
      "/assets/project_images/starlettecars/Rental_vehicle_vendor_side1.webp",
      "/assets/project_images/starlettecars/Rental_vehicle_vendor_side2.webp",
    ],
    "about": "A complete B2B/B2C vehicle rental ecosystem handling complex booking scheduling and conflict resolution.",
    "features": [
      "Engineered a robust date-range conflict prevention system enforced on both frontend and backend.",
      "Enabled multiple independent bookings on the same vehicle across non-overlapping periods.",
      "Built distinct role-based workflows for customers, vehicle owners, and administrators.",
      "Delivered GST-compliant auto-generated PDF invoices, detailed booking history, and fast pagination."
    ],
    "isClientProject": false
  },
  {
    "id": 7,
    "company": "Freelance / Independent",
    "slug": "personal-portfolio",
    "title": "Personal Portfolio Application",
    "tech_stack": [
      "Next.js",
      "React.js",
      "Tailwind CSS"
    ],
    "live_demo": "https://dineshkumar9.vercel.app",
    "code": "https://github.com/jdmkd/my-portfolio",
    "about": "A modern and responsive personal portfolio website built with Next.js and React, showcasing professional skills, education, and project work. Features a clean user interface with smooth navigation, project showcase section with detailed descriptions and tech stacks, contact information, and optimized performance. Styled with Tailwind CSS for a professional appearance and deployed on Vercel for fast global access.",
    "isClientProject": false,
    "images": [
      "/assets/images/wolf_placeholder.webp"
    ]
  }
];

export const companiesData: CompanyMetadata[] = [
  {
    company: "Param Divya",
    role: "Full Stack Developer",
    duration: "Jul 2025 — Present",
    location: "Gandhinagar, Gujarat",
    overview:
      "Core engineering team building high-performance B2B, SaaS, and ecommerce systems in production. Focused on massive latency reductions and architectural scaling.",
  },
  {
    company: "Freelance / Independent",
    role: "Full Stack Developer",
    duration: "2023 — 2025",
    location: "Remote",
    overview:
      "Architected and deployed multiple full-stack applications while pursuing my MCA. Focused heavily on mastering production-level system design, authentication flows, and relational database architecture.",
  },
  {
    company: "InfoLabz",
    role: "Python Developer (Intern)",
    duration: "May 2021 — Dec 2021",
    location: "Ahmedabad, Gujarat",
    overview:
      "Completed an intensive internship focusing on backend software engineering, API design, and web development using Python and the Django framework.",
    customProjects: [
      {
        name: "Backend Engineering Internship",
        slug: "",
        liveLink: "",
        achievements: [
          "Developed core backend logic and RESTful APIs using Python and Django.",
          "Gained hands-on experience with relational database modeling and integrating with Django's ORM.",
          "Collaborated on codebase management, learning industry-standard version control and deployment practices.",
        ],
        techStack: ["Python", "Django", "SQL", "REST APIs", "Git"],
      },
    ],
  },
];

// Single Source of Truth for Experience Data derived directly from projectData & companiesData
export const experienceData = companiesData.map((company) => {
  const companyProjects = projectData
    .filter((p) => p.company === company.company)
    .map((p) => ({
      name: p.title,
      slug: p.slug,
      liveLink: p.live_demo,
      achievements: p.features || [],
      techStack: p.tech_stack,
    }));

  return {
    company: company.company,
    role: company.role,
    duration: company.duration,
    location: company.location,
    overview: company.overview,
    projects: [...companyProjects, ...(company.customProjects || [])],
  };
});

// Helper function to get display message for code link
export const getCodeLinkDisplay = (project: ProjectData) => {
  if (project.isClientProject) {
    return project.clientMessage || "Code repository restricted due to client confidentiality";
  }
  return project.code;
};

// Helper function to check if code is available
export const isCodeAvailable = (project: ProjectData) => {
  return !project.isClientProject && project.code;
};