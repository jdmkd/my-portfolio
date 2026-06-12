"use client"
import { projectData } from "./project_data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-white border-b border-gray-200"
    >
      <div className="border-b border-gray-200 p-8 sm:p-12 bg-[#fcfcfc]">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4 block text-center">
          Portfolio
        </span>
        <h3 className="text-center text-4xl md:text-5xl font-black text-[#111111] tracking-tighter">
          Featured Works.
        </h3>
      </div>
      
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200"
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
