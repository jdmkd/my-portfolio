import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Cursor from "@/components/Cursor/Cursor";
import Tech from "@/components/TechSkills/TechSkills";
import Projectwork from "@/components/Projectwork/Projectwork";
import Contactus from "@/components/Contactus/Contactus";
import Footer from "@/components/Footer/Footer";
import Aboutus from "@/components/Aboutus/Aboutus";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Education from "@/components/Education/Education";


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
      <div className="my-[4rem]">

      </div>
      {/* <Projectwork /> */}
      <Contactus />
      <Footer />
    </>
  );
}
