import Button from "../../widgets/Button";
import Heading from "../../widgets/Heading";
import Tagline from "../../widgets/Tagline";
import { check2, grid, loading1 } from "../../assets";
// import { Gradient } from "../design/Roadmap";
import Image from "next/image";

import {projectData} from "./project_data"
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section id="projects" className="relative my-[2rem]">
    <h3 className="text-[2rem] md:text-[3rem] mb-[3rem] font-bold flex justify-center">
        Project Works
    </h3>

    <div className="px-[1.3rem] sm:px-[2rem] lg:px-[8rem] mb-5 justify-center items-center">
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-8 md:pb-[7rem]">
        {projectData.map((item, index) => (

          <ProjectCard key={index} item={item} />
          
        ))}

        {/* <Gradient /> */}
      </div>
    </div>
  </section>
);

export default Projects;
