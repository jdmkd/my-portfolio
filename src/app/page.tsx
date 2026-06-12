import Hero from "@/components/Hero/Hero";
import Tech from "@/components/TechSkills/TechSkills";
import Contactus from "@/components/Contactus/Contactus";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";
import WorkExperience from "@/components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkExperience />
      <Education />
      <Tech />
      <Projects />
      <Contactus />
    </>
  );
}
