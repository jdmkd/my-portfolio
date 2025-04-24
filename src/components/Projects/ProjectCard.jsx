// src/components/ProjectCard.jsx
import Image from "next/image";
import Tagline from "../../widgets/Tagline";
import TechTags from "./TechTags";

const ProjectCard = ({ item }) => (
  <div className={`md:flex even:md:translate-y-[5rem] rounded-[.8rem] `}>
    <div className="relative p-6 bg-neutral-900/90 hover:bg-gray-900/70 cursor-pointer w-full rounded-[.8rem] overflow-hidden xl:p-13 justify-center content-center transition-all duration-500 ease-in-out ">
      <div className="absolute top-0 left-0 w-full">

      </div>
      <div className="relative z-1">
        <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-[2rem] text-[1.1rem]  font-semibold">
          <h2>[{item.title}]</h2>
        </div>

        {/* <h4 className="h4 my-4">{item.title}</h4> */}

        <TechTags tags={item.tech_stack} />

        <p className="body-2 my-[1rem]">{item.about}</p>

        <div className="flex gap-4 mt-4">
          {item.live_demo && (
            <a
              href={item.live_demo}
              className="text-sm underline text-blue-500 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          <a
            href={item.code}
            className="text-sm underline text-blue-500 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Code
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
