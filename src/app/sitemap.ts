import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projectData } from "@/components/Projects/project_data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const mainRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/skills", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/education", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/resume", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact-us", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const projectRoutes = projectData.map((project) => ({
    path: `/projects/${project.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const allRoutes = [...mainRoutes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
