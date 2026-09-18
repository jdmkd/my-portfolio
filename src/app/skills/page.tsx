import type { Metadata } from "next";
import Tech from "@/components/TechSkills/TechSkills";
import { siteConfig } from "@/config/site";
import { TECH_STACK } from "@/config/tech-stack";

export const metadata: Metadata = {
  title: "Technical Skills & Engineering Stack",
  description:
    "Explore the technical expertise, languages, databases, cloud, and backend architecture tools used by Dinesh Harish Kumar including React, Next.js, Node.js, Django, Redis, and PostgreSQL.",
  alternates: {
    canonical: `${siteConfig.url}/skills`,
  },
  openGraph: {
    title: "Technical Skills & Tech Stack | Dinesh Harish Kumar",
    description:
      "Comprehensive breakdown of programming languages, frontend/backend frameworks, database engines, and DevOps tools.",
    url: `${siteConfig.url}/skills`,
    type: "website",
  },
};

export default function SkillsPage() {
  const skillNames = Object.keys(TECH_STACK);

  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Dinesh Harish Kumar - Technical Skills",
    definedTerm: skillNames.map((skillKey) => ({
      "@type": "DefinedTerm",
      name: TECH_STACK[skillKey].name,
      inDefinedTermSet: TECH_STACK[skillKey].category,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
      />
      <Tech />
    </>
  );
}
