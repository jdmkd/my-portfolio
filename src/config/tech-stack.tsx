export type TechCategory =
  | "Programming Languages"
  | "Backend"
  | "DevOps & Cloud"
  | "Database"
  | "Frontend"
  | "Tools";

export interface TechItem {
  name: string;
  imageUrl: any;
  category: TechCategory;
}

export const TECH_STACK: Record<string, TechItem> = {
  // Programming Languages
  JavaScript: {
    name: "JavaScript",
    imageUrl: "/assets/tech_skill_Icon/javascript.svg",
    category: "Programming Languages",
  },
  TypeScript: {
    name: "TypeScript",
    imageUrl: "/assets/tech_skill_Icon/typescript.svg",
    category: "Programming Languages",
  },
  Python: {
    name: "Python",
    imageUrl: "/assets/tech_skill_Icon/python.svg",
    category: "Programming Languages",
  },
  Java: {
    name: "Java",
    imageUrl: "/assets/tech_skill_Icon/Java.svg",
    category: "Programming Languages",
  },
  C: {
    name: "C",
    imageUrl: "/assets/tech_skill_Icon/C.svg",
    category: "Programming Languages",
  },
  "C++": {
    name: "C++",
    imageUrl: "/assets/tech_skill_Icon/Cpp.svg",
    category: "Programming Languages",
  },

  // Frontend
  "React.js": {
    name: "React.js",
    imageUrl: "/assets/tech_skill_Icon/React.svg",
    category: "Frontend",
  },
  "Next.js": {
    name: "Next.js",
    imageUrl: "/assets/tech_skill_Icon/Nextjs.svg",
    category: "Frontend",
  },
  Redux: {
    name: "Redux",
    imageUrl: "/assets/tech_skill_Icon/redux.svg",
    category: "Frontend",
  },
  "TanStack Query": {
    name: "TanStack Query",
    imageUrl: "/assets/tech_skill_Icon/ReactQueryIcon.svg",
    category: "Frontend",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    imageUrl: "/assets/tech_skill_Icon/tailwind.svg",
    category: "Frontend",
  },
  MaterialUI: {
    name: "MaterialUI",
    imageUrl: "/assets/tech_skill_Icon/MaterialUI.svg",
    category: "Frontend",
  },
  HTML5: {
    name: "HTML5",
    imageUrl: "/assets/tech_skill_Icon/html.svg",
    category: "Frontend",
  },
  CSS3: {
    name: "CSS3",
    imageUrl: "/assets/tech_skill_Icon/css.svg",
    category: "Frontend",
  },

  // Backend
  "Node.js": {
    name: "Node.js",
    imageUrl: "/assets/tech_skill_Icon/Nodejs.svg",
    category: "Backend",
  },
  "Express.js": {
    name: "Express.js",
    imageUrl: "/assets/tech_skill_Icon/Express.svg",
    category: "Backend",
  },
  Django: {
    name: "Django",
    imageUrl: "/assets/tech_skill_Icon/django-logo-negative.svg",
    category: "Backend",
  },
  "Django REST Framework": {
    name: "Django REST Framework",
    imageUrl: "/assets/tech_skill_Icon/django_rest_framework.webp",
    category: "Backend",
  },
  // "FastAPI": { name: "FastAPI", imageUrl: "/assets/tech_skill_Icon/FastAPI.svg", category: "Backend" },
  "Spring Boot": {
    name: "Spring Boot",
    imageUrl: "/assets/tech_skill_Icon/spring_boot.svg",
    category: "Backend",
  },
  Spring: {
    name: "Spring",
    imageUrl: "/assets/tech_skill_Icon/spring-3.svg",
    category: "Backend",
  },

  // Database
  PostgreSQL: {
    name: "PostgreSQL",
    imageUrl: "/assets/tech_skill_Icon/PostgresQL.svg",
    category: "Database",
  },
  MySQL: {
    name: "MySQL",
    imageUrl: "/assets/tech_skill_Icon/MySQL.svg",
    category: "Database",
  },
  MongoDB: {
    name: "MongoDB",
    imageUrl: "/assets/tech_skill_Icon/MongoDB.svg",
    category: "Database",
  },
  Redis: {
    name: "Redis",
    imageUrl: "/assets/tech_skill_Icon/RedisIcon.svg",
    category: "Database",
  },

  // DevOps & Cloud
  // "AWS": { name: "AWS", imageUrl: "/assets/tech_skill_Icon/AWSIcon.svg", category: "DevOps & Cloud" },
  Linux: {
    name: "Linux",
    imageUrl: "/assets/tech_skill_Icon/Linux.svg",
    category: "DevOps & Cloud",
  },
  Docker: {
    name: "Docker",
    imageUrl: "/assets/tech_skill_Icon/DockerIcon.svg",
    category: "DevOps & Cloud",
  },
  "AWS S3": {
    name: "AWS S3",
    imageUrl: "/assets/tech_skill_Icon/AWS-S3-Icon.svg",
    category: "DevOps & Cloud",
  },
  Cloudflare: {
    name: "Cloudflare",
    imageUrl: "/assets/tech_skill_Icon/CloudflareIcon.svg",
    category: "DevOps & Cloud",
  },
  Cloudinary: {
    name: "Cloudinary",
    imageUrl: "/assets/tech_skill_Icon/Cloudinary.webp",
    category: "DevOps & Cloud",
  },
  Render: {
    name: "Render",
    imageUrl: "/assets/tech_skill_Icon/Render-logo-Black.svg",
    category: "DevOps & Cloud",
  },
  Vercel: {
    name: "Vercel",
    imageUrl: "/assets/tech_skill_Icon/Vercel.svg",
    category: "DevOps & Cloud",
  },

  // Tools
  Git: {
    name: "Git",
    imageUrl: "/assets/tech_skill_Icon/git.svg",
    category: "Tools",
  },
  GitHub: {
    name: "GitHub",
    imageUrl: "/assets/tech_skill_Icon/GitHub.svg",
    category: "Tools",
  },
  "GitHub Actions": {
    name: "GitHub Actions",
    imageUrl: "/assets/tech_skill_Icon/GitHubActionsIcon.svg",
    category: "Tools",
  },
  JWT: {
    name: "JWT",
    imageUrl: "/assets/tech_skill_Icon/JWTIcon.svg",
    category: "Tools",
  },
};
