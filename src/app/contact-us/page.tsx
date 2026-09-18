import type { Metadata } from "next";
import Contactus from "@/components/Contactus/Contactus";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Dinesh Harish Kumar | Full Stack Developer",
  description:
    "Get in touch with Dinesh Harish Kumar for software engineering opportunities, freelance projects, technical consultations, or project inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/contact-us`,
  },
  openGraph: {
    title: "Contact Dinesh Harish Kumar | Software Engineer",
    description:
      "Get in touch for software engineering, full stack development, and web performance consultations.",
    url: `${siteConfig.url}/contact-us`,
    type: "website",
  },
};

export default function ContactUsPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Dinesh Harish Kumar",
    description:
      "Get in touch with Dinesh Harish Kumar for software development and engineering inquiries.",
    url: `${siteConfig.url}/contact-us`,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
      email: siteConfig.author.email,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Contactus />
    </>
  );
}
