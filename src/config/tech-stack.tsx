import javascriptIcon from "../assets/tech_skill_Icon/javascript.svg";
import CIcon from "../assets/tech_skill_Icon/C.svg";
import CppIcon from "../assets/tech_skill_Icon/Cpp.svg";
import Java from "../assets/tech_skill_Icon/Java.svg";
import reduxIcon from "../assets/tech_skill_Icon/redux.svg";
import ReactQueryIcon from "../assets/tech_skill_Icon/ReactQueryIcon.svg";
import pythonIcon from "../assets/tech_skill_Icon/python.svg";
import typescriptIcon from "../assets/tech_skill_Icon/typescript.svg";
import matplotlibIcon from "../assets/tech_skill_Icon/matplotlib.svg";
import NumPy from "../assets/tech_skill_Icon/NumPy.svg";
import pandasIcon from "../assets/tech_skill_Icon/Pandasx.png";
import scikitlearn from "../assets/tech_skill_Icon/scikit-learn.svg";
import Jupyter from "../assets/tech_skill_Icon/Jupyter.svg";
import MySQL from "../assets/tech_skill_Icon/MySQL.svg";
import PostgresQL from "../assets/tech_skill_Icon/PostgresQL.svg";
import djangoNegative from "../assets/tech_skill_Icon/django-logo-negative.svg";
import djangoRestFramework from "../assets/tech_skill_Icon/django_rest_framework.png";
import Express from "../assets/tech_skill_Icon/Express.svg";
import Flutter from "../assets/tech_skill_Icon/Flutter.svg";
import MongoDB from "../assets/tech_skill_Icon/MongoDB.svg";
import Nextjs from "../assets/tech_skill_Icon/Nextjs.svg";
import Nodejs from "../assets/tech_skill_Icon/Nodejs.svg";
import Reactjs from "../assets/tech_skill_Icon/React.svg";
import FastAPI from "../assets/tech_skill_Icon/FastAPI.svg";
import Cloudinary from "../assets/tech_skill_Icon/Cloudinary.png";
import Render_logo_Black from "../assets/tech_skill_Icon/Render-logo-Black.svg";
import Linux from "../assets/tech_skill_Icon/Linux.svg";
import Spring_Boot from "../assets/tech_skill_Icon/spring_boot.svg";
import Spring_3 from "../assets/tech_skill_Icon/spring-3.svg";
import Bootstrap from "../assets/tech_skill_Icon/Bootstrap.svg";
import tailwindIcon from "../assets/tech_skill_Icon/tailwind.svg";
import cssIcon from "../assets/tech_skill_Icon/css.svg";
import htmlIcon from "../assets/tech_skill_Icon/html.svg";
import GitHub from "../assets/tech_skill_Icon/GitHub.svg";
import gitIcon from "../assets/tech_skill_Icon/git.svg";
import Postman from "../assets/tech_skill_Icon/Postman.svg";
import AWSIcon from "../assets/tech_skill_Icon/AWSIcon.svg";
import CloudflareIcon from "../assets/tech_skill_Icon/CloudflareIcon.svg";
import DockerIcon from "../assets/tech_skill_Icon/DockerIcon.svg";
import GitHubActionsIcon from "../assets/tech_skill_Icon/GitHubActionsIcon.svg";
import JWTIcon from "../assets/tech_skill_Icon/JWTIcon.svg";
import MaterialUI from "../assets/tech_skill_Icon/MaterialUI.svg";
import RedisIcon from "../assets/tech_skill_Icon/RedisIcon.svg";
import Vercel from "../assets/tech_skill_Icon/Vercel.svg"
import AWSS3Icon from "../assets/tech_skill_Icon/AWS-S3-Icon.svg"

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
  "JavaScript": { name: "JavaScript", imageUrl: javascriptIcon, category: "Programming Languages" },
  "TypeScript": { name: "TypeScript", imageUrl: typescriptIcon, category: "Programming Languages" },
  "Python": { name: "Python", imageUrl: pythonIcon, category: "Programming Languages" },
  "Java": { name: "Java", imageUrl: Java, category: "Programming Languages" },
  "C": { name: "C", imageUrl: CIcon, category: "Programming Languages" },
  "C++": { name: "C++", imageUrl: CppIcon, category: "Programming Languages" },

  // Frontend
  "React.js": { name: "React.js", imageUrl: Reactjs, category: "Frontend" },
  "Next.js": { name: "Next.js", imageUrl: Nextjs, category: "Frontend" },
  "Redux": { name: "Redux", imageUrl: reduxIcon, category: "Frontend" },
  "TanStack Query": { name: "TanStack Query", imageUrl: ReactQueryIcon, category: "Frontend" },
  "Tailwind CSS": { name: "Tailwind CSS", imageUrl: tailwindIcon, category: "Frontend" },
  "MaterialUI": { name: "MaterialUI", imageUrl: MaterialUI, category: "Frontend" },
  "HTML5": { name: "HTML5", imageUrl: htmlIcon, category: "Frontend" },
  "CSS3": { name: "CSS3", imageUrl: cssIcon, category: "Frontend" },

  // Backend
  "Node.js": { name: "Node.js", imageUrl: Nodejs, category: "Backend" },
  "Express.js": { name: "Express.js", imageUrl: Express, category: "Backend" },
  "Django": { name: "Django", imageUrl: djangoNegative, category: "Backend" },
  "Django REST Framework": { name: "Django REST Framework", imageUrl: djangoRestFramework, category: "Backend" },
  // "FastAPI": { name: "FastAPI", imageUrl: FastAPI, category: "Backend" },
  "Spring Boot": { name: "Spring Boot", imageUrl: Spring_Boot, category: "Backend" },
  "Spring": { name: "Spring", imageUrl: Spring_3, category: "Backend" },

  // Database
  "PostgreSQL": { name: "PostgreSQL", imageUrl: PostgresQL, category: "Database" },
  "MySQL": { name: "MySQL", imageUrl: MySQL, category: "Database" },
  "MongoDB": { name: "MongoDB", imageUrl: MongoDB, category: "Database" },
  "Redis": { name: "Redis", imageUrl: RedisIcon, category: "Database" },

  // DevOps & Cloud
  // "AWS": { name: "AWS", imageUrl: AWSIcon, category: "DevOps & Cloud" },
  "Linux": { name: "Linux", imageUrl: Linux, category: "DevOps & Cloud" },
  "Docker": { name: "Docker", imageUrl: DockerIcon, category: "DevOps & Cloud" },
  "AWS S3": { name: "AWS S3", imageUrl: AWSS3Icon, category: "DevOps & Cloud" },
  "Cloudflare": { name: "Cloudflare", imageUrl: CloudflareIcon, category: "DevOps & Cloud" },
  "Cloudinary": { name: "Cloudinary", imageUrl: Cloudinary, category: "DevOps & Cloud" },
  "Render": { name: "Render", imageUrl: Render_logo_Black, category: "DevOps & Cloud" },
  "Vercel": { name: "Vercel", imageUrl: Vercel, category: "DevOps & Cloud" },
  
  // Tools
  "Git": { name: "Git", imageUrl: gitIcon, category: "Tools" },
  "GitHub": { name: "GitHub", imageUrl: GitHub, category: "Tools" },
  "GitHub Actions": { name: "GitHub Actions", imageUrl: GitHubActionsIcon, category: "Tools" },
  "JWT": { name: "JWT", imageUrl: JWTIcon, category: "Tools" },
};
