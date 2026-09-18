import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Tech from "@/components/TechSkills/TechSkills";
import Contactus from "@/components/Contactus/Contactus";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Marquee from "@/components/Marquee/Marquee";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title:
    "Dinesh Harish Kumar | Senior Full Stack Developer & Software Engineer",
  description:
    "Official portfolio of Dinesh Harish Kumar. Full Stack Developer specializing in Node.js, React, Next.js, Django, PostgreSQL, and high-performance system architecture.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title:
      "Dinesh Harish Kumar | Senior Full Stack Developer & Software Engineer",
    description:
      "Explore the software engineering portfolio, production projects, and technical skills of Dinesh Harish Kumar.",
    url: siteConfig.url,
    type: "website",
  },
};

export default function Home() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
      description: siteConfig.description,
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.instagram,
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Tech />
      <Projects />
      <Marquee />
      <Contactus />
    </>
  );
}
