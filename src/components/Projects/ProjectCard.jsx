import Image from "next/image";
import Tagline from "../../widgets/Tagline";
import TechTags from "./TechTags";
import Link from "next/link";

const ProjectCard = ({ item }) => (
  <div className="relative rounded-[.8rem] overflow-hidden bg-neutral-900/90 hover:bg-gray-900/70 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105">
    <Link href={`/projects/${item.id}`}>
        <div className="p-6 xl:p-13">
          <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-[2rem] text-[1.1rem] font-semibold">
            <h2>{item.title}</h2>
          </div>

          <TechTags tags={item.tech_stack} />

          <p className="body-2 my-[1rem]">{item.about}</p>

          {/* <div className="flex gap-4 mt-4">
            {item.live_demo && (
              <Link
                href={item.live_demo}
                className="text-sm underline text-blue-500 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Link>
            )}
            <Link
              href={item.code}
              className="text-sm underline text-blue-500 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Code
            </Link>
          </div> */}
        </div>
    </Link>
  </div>
);

export default ProjectCard;
