import type { Metadata } from "next";
import Projects from "@/components/Projects/Projects";
import { siteConfig } from "@/config/site";
import { projectData } from "@/components/Projects/project_data";

export const metadata: Metadata = {
  title: "Featured Projects & Full Stack Case Studies",
  description:
    "Explore production-grade B2B SaaS platforms, POS systems, real estate applications, and eCommerce backends engineered by Dinesh Harish Kumar.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title:
      "Featured Works & Software Engineering Portfolio | Dinesh Harish Kumar",
    description:
      "Full stack B2B SaaS platforms, high-concurrency Node.js/Django backend engines, and web performance engineering case studies.",
    url: `${siteConfig.url}/projects`,
    type: "website",
  },
};

export default function ProjectDetail() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dinesh Harish Kumar - Software Engineering Projects",
    itemListElement: projectData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.about,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        url: project.live_demo || `${siteConfig.url}/projects#${project.slug}`,
        author: {
          "@type": "Person",
          name: siteConfig.author.name,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Projects />
    </>
  );
}
