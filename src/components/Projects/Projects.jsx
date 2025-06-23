import {projectData} from "./project_data"
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section
    id="projects"
    className="relative px-4 sm:px-6 lg:px-6 py-10 bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c]/70 to-[#0f0f0f] backdrop-blur-xl shadow-inner border-t border-neutral-800"
  >
    <h3 className="text-center text-[2rem] md:text-[3rem] font-bold text-white mb-10">
      Project Works
    </h3>

    <div className="px-2 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
      {projectData.map((item, index) => (
        <ProjectCard key={index} item={item} />
      ))}
    </div>
  </section>
);

export default Projects;
