import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Cursor from "@/components/Cursor/Cursor";
import Tech from "@/components/TechSkills/TechSkills";
import Contactus from "@/components/Contactus/Contactus";
import Footer from "@/components/Footer/Footer";
import Aboutus from "@/components/Aboutus/Aboutus";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";
import WorkExperience from "@/components/WorkExperience/WorkExperience";


export default function Home() {
  return (
    <>
      {/* <Cursor /> */}
      <Navbar />
      <Hero />
      <Education />
      <Tech />
      <Aboutus />
      {/* <WorkExperience /> */}
      <Projects />
      <Contactus />
      <Footer />
    </>
  );
}
