import Hero from "@/components/Hero/Hero";
import Tech from "@/components/TechSkills/TechSkills";
import Contactus from "@/components/Contactus/Contactus";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";


export default function Home() {
  return (
    <>
      {/* <Cursor /> */}
      <Hero />
      <Education />
      <Tech />
      {/* <Aboutus /> */}
      {/* <WorkExperience /> */}
      <Projects />
      <Contactus />
    </>
  );
}
