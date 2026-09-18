import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectData } from "@/components/Projects/project_data";
import { siteConfig } from "@/config/site";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.title} | Case Study`;
  const description = project.about;
  const canonicalUrl = `${siteConfig.url}/projects/${project.slug}`;
  const firstImage =
    project.images && project.images[0]
      ? typeof project.images[0] === "string"
        ? project.images[0]
        : project.images[0].src
      : `${siteConfig.url}/opengraph-image`;

  return {
    title,
    description,
    keywords: [
      ...project.tech_stack,
      project.title,
      project.company || "Dinesh Harish Kumar Projects",
      "Case Study",
      "Software Architecture",
      "Full Stack Development",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: firstImage,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [firstImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailProps) {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.about,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    keywords: project.tech_stack.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}
