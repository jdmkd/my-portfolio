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

export const projectData = [
  {
    "id": 1,
    "title": "Rental Vehicle Application",
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
    "about": "Developed a full-featured rental platform with separate portals for Users, Vendors, and Admins. Implemented custom authentication, session handling, and a secure PostgreSQL schema. Built core features including vehicle listings, booking system, and dedicated interfaces for managing vehicles and bookings.",
    "isClientProject": false
  },
  {
    "id": 2,
    "title": "HousingWalaa - Real Estate Platform",
    "tech_stack": [
      "React.js",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "REST API",
      "Cloudinary"
    ],
    "live_demo": null,
    "code": null,
    "about": "A comprehensive real estate platform for property search and listings featuring advanced filtering options, interactive map integration for location-based searches, and detailed property views with image galleries. Includes secure user authentication, responsive design for seamless browsing across devices, contact forms for property inquiries, and an admin panel for property management.",
    "isClientProject": true,
    "clientMessage": "Code repository restricted due to client confidentiality"
  },
  {
    "id": 3,
    "title": "Fragment Hub - E-Commerce Application",
    "tech_stack": [
      "React.js",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "REST API",
      "PostgreSQL",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Cloudinary"
    ],
    "live_demo": "https://www.fragmenthub.com",
    "code": null,
    "about": "A modern e-commerce web application built with React and TypeScript, featuring a sleek user interface powered by shadcn/ui component library. Implements type-safe development practices for enhanced code quality and maintainability, with fast build times using Vite. Includes product browsing, shopping cart functionality, and responsive design optimized for all devices.",
    "isClientProject": true,
    "clientMessage": "Source code confidential - client project"
  },
  {
    "id": 4,
    "title": "Param Divya Agency - Wood Import/Export Platform",
    "tech_stack": [
      "React.js",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "REST API",
      "PostgreSQL",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Cloudinary"
    ],
    "live_demo": null,
    "code": null,
    "about": "A specialized e-commerce platform for wood import and export business, featuring product catalog management for various wood types and grades, inquiry and quotation systems for B2B transactions, and order management functionality. Built with type-safe TypeScript and React for reliable performance, includes responsive design for accessing product information across devices, integrated contact forms for business inquiries.",
    "isClientProject": true,
    "clientMessage": "Code repository restricted due to client confidentiality"
  },
  {
    "id": 5,
    "title": "E-Commerce REST API",
    "tech_stack": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary"
    ],
    "live_demo": "https://ecomm-nodejs-backend.vercel.app",
    "code": "https://github.com/jdmkd/ecomm-nodejs-backend",
    "about": "A comprehensive and modular REST API backend for an e-commerce platform featuring secure authentication with OTP-based email verification, complete product management system with categories, brands, and variants, shopping cart functionality, and order processing. Implements role-based access control for admin and user permissions, secure password management with reset capabilities, and image upload integration with Cloudinary.",
    "isClientProject": false
  },
  {
    "id": 6,
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
    "id": 7,
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
  },
  {
    "id": 8,
    "title": "PHP E-Commerce Platform",
    "tech_stack": [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "live_demo": "https://furniture-shop-php.42web.io/",
    "code": "https://github.com/jdmkd/furniture-shop-main-PHP",
    "about": "E-commerce site with user and admin portals.",
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