"use client";
import { projectData } from "./project_data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-[#030303] border-b border-white/10"
    >
      <div className="mt-20 border-b border-white/10 p-8 sm:p-12 bg-[#000000]">
        <span className="text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold mb-4 block text-center">
          Portfolio
        </span>
        <h3 className="text-center text-4xl sm:text-8xl uppercase font-black text-white tracking-tighter">
          Featured Works.
        </h3>
      </div>

      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {projectData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
