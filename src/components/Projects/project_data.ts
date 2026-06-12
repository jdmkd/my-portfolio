import {
  Rental_vehicle_customer_side1,
  Rental_vehicle_customer_side2,
  Rental_vehicle_customer_side3,
  Rental_vehicle_customer_side4,
  Rental_vehicle_customer_side5,
  Rental_vehicle_customer_side6,
  Rental_vehicle_customer_side7,
  Rental_vehicle_customer_side8,
  Rental_vehicle_vendor_side1,
  Rental_vehicle_vendor_side2 
} from "../../assets/index";
import { ProjectData } from "../../types";

export const projectData: ProjectData[] = [
  {
    "id": 1,
    "slug": "inventoryops",
    "title": "InventoryOps – Multi-Tenant SaaS POS & Inventory",
    "tech_stack": [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "NextAuth",
      "RBAC",
      "REST APIs",
      "TypeScript"
    ],
    "live_demo": "https://iinvops.vercel.app",
    "code": null,
    "about": "A powerful multi-tenant SaaS point-of-sale and inventory management system.",
    "features": [
      "Reduced backend response times from 7s–9s to 300–800ms through Redis caching, MongoDB aggregation pipelines, query optimization, and intelligent cache invalidation.",
      "Engineered Redis-backed request coalescing to prevent cache stampedes and eliminate duplicate database queries during concurrent cache misses.",
      "Architected a dual-layer Redis + in-memory caching system with graceful degradation fallback, maintaining API responsiveness during cache outages.",
      "Built centralized event-driven cache invalidation across inventory, orders, products, and dashboard analytics.",
      "Implemented RBAC enforcement across 40+ protected API routes and multi-role administrative workflows.",
      "Designed transactional inventory update mechanisms to maintain stock consistency and prevent overselling across billing, purchase, and order operations."
    ],
    "isClientProject": true,
    "clientMessage": "SaaS Platform currently in production"
  },
  {
    "id": 2,
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
    "live_demo": "https://www.paramdivya.com",
    "code": null,
    "about": "A specialized B2B Premium Timber Import & Custom Woodwork Platform.",
    "features": [
      "Reduced product search API latency from 4.2s to 400–620ms by introducing Redis caching, PostgreSQL GIN index, query prefetching, and eliminating N+1 ORM queries.",
      "Optimized frontend delivery using route-level code splitting, lazy loading, and WebP media optimization, reducing total network payload from 60.8MB to 9.7MB (84% reduction).",
      "Implemented dual-layer caching with Redis and TanStack Query, reducing repeat requests to 1ms–20ms with tag-based invalidation ensuring catalog stays fresh on every admin product update.",
      "Optimized global and product search using PostgreSQL vector search, GIN index, and trigram fuzzy matching for partial and misspelled query support.",
      "Implemented react-snap SSG with dynamic sitemap ensuring 100% indexability across product and blog pages."
    ],
    "isClientProject": true,
    "clientMessage": "Code repository restricted due to client confidentiality"
  },
  
  {
    "id": 3,
    "slug": "greenmendbio",
    "title": "GreenmendBio – Global Export Platform",
    "tech_stack": [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Vercel"
    ],
    "live_demo": "https://wwww.greenmendbio.com",
    "code": null,
    "about": "Global export platform for a Made-in-India manufacturer of FDA-approved, ISO-certified sugarcane bagasse tableware serving businesses across 5+ countries.",
    "features": [
      "Designed and developed the complete B2B website catering to global enterprise clients.",
      "Achieved Lighthouse scores of 98 performance, 92 SEO, and 0 CLS.",
      "Optimized loading speed with 0.5s FCP and 0.9s LCP through Next.js SSG, WebP image optimization, and route-level code splitting."
    ],
    "isClientProject": true,
    "clientMessage": "Code repository restricted due to client confidentiality"
  },
  {
    "id": 4,
    "slug": "housingwalaa",
    "title": "HousingWalaa - Real Estate Platform",
    "tech_stack": [
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
    "live_demo": "https://www.housingwaala.com",
    "code": null,
    "about": "A comprehensive real estate platform enabling high-performance property searches and filtering.",
    "features": [
      "Reduced listing API response from 8.5s to 500–700ms by returning only card-essential fields and deferring full property data to the detail page.",
      "Optimized multi-table property detail queries from 9s–12s to 800ms–1.5s using prefetch_related, select_related, PostgreSQL index across images, amenities, pricing, location, and specification relationships.",
      "Implemented dual-layer caching with Redis and TanStack Query, reducing repeat requests to under 20ms with event-driven invalidation across listing, detail, and search endpoints.",
      "Optimized property search using PostgreSQL vector search, Q objects, and GIN index across multi-table relational data.",
      "Built a global configurable pagination system with dynamic page size override and next/previous links in the response, eliminating frontend pagination business logic."
    ],
    "isClientProject": true,
    "clientMessage": "Code repository restricted due to client confidentiality"
  },
  {
    "id": 5,
    "slug": "ecotte-ecommerce",
    "title": "ECOTTE Ecommerce REST API",
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
    "isClientProject": false
  },
  {
    "id": 6,
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
      Rental_vehicle_customer_side1,
      Rental_vehicle_customer_side2,
      Rental_vehicle_customer_side3,
      Rental_vehicle_customer_side4,
      Rental_vehicle_customer_side5,
      Rental_vehicle_customer_side6,
      Rental_vehicle_customer_side7,
      Rental_vehicle_customer_side8,
      Rental_vehicle_vendor_side1,
      Rental_vehicle_vendor_side2,
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
    "slug": "flutter-ecommerce-app",
    "title": "Flutter E-Commerce App",
    "tech_stack": [
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "Cloudinary",
      "MongoDB"
    ],
    "live_demo": null,
    "code": "https://github.com/jdmkd/flutter-nodejs-ecomm-app-complete",
    "about": "Designed a cross-platform e-commerce app with Node.js backend and MongoDB, dedicated interfaces for admins and customers. Allowing real-time product management for admin and seamless customer checkout experience.",
    "isClientProject": false
  },
  {
    "id": 8,
    "slug": "personal-portfolio",
    "title": "Personal Portfolio Application",
    "tech_stack": [
      "Next.js",
      "React.js",
      "Tailwind CSS"
    ],
    "live_demo": "https://my-portfoliox.vercel.app",
    "code": "https://github.com/jdmkd/my-portfolio",
    "about": "A modern and responsive personal portfolio website built with Next.js and React, showcasing professional skills, education, and project work. Features a clean user interface with smooth navigation, project showcase section with detailed descriptions and tech stacks, contact information, and optimized performance. Styled with Tailwind CSS for a professional appearance and deployed on Vercel for fast global access.",
    "isClientProject": false
  }
];

// Helper function to get display message for code link
export const getCodeLinkDisplay = (project) => {
  if (project.isClientProject) {
    return project.clientMessage || "Code repository restricted due to client confidentiality";
  }
  return project.code;
};

// Helper function to check if code is available
export const isCodeAvailable = (project) => {
  return !project.isClientProject && project.code;
};