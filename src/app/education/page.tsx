import type { Metadata } from "next";
import Education from "@/components/Education/Education";
import { siteConfig } from "@/config/site";
import { educationDetails } from "@/constants/constants";

export const metadata: Metadata = {
  title: "Education & Academic Qualifications",
  description:
    "Educational background of Dinesh Harish Kumar including Master of Computer Application (MCA) and Bachelor of Computer Application (BCA) in Computer Science.",
  alternates: {
    canonical: `${siteConfig.url}/education`,
  },
  openGraph: {
    title: "Education & Academic Qualifications | Dinesh Harish Kumar",
    description:
      "Academic degrees and qualifications in Computer Application & Software Engineering.",
    url: `${siteConfig.url}/education`,
    type: "website",
  },
};

export default function EducationPage() {
  const educationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dinesh Harish Kumar - Educational Qualifications",
    itemListElement: educationDetails.map((edu, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "EducationalOccupationalCredential",
        name: edu.specification
          ? `${edu.specification} - ${edu.branch}`
          : edu.schoolName,
        credentialCategory: edu.specification || "High School Certificate",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: edu.collageName || edu.schoolName,
          address: {
            "@type": "PostalAddress",
            addressLocality: edu.city,
            addressCountry: "India",
          },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationSchema) }}
      />
      <Education />
    </>
  );
}
