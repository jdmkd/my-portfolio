import React from "react";
import { FaPython, FaJava, FaJsSquare, FaCuttlefish, FaDatabase, FaGitAlt, FaLinux, FaAndroid, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaPlug, FaChartLine} from "react-icons/fa";
import { SiCplusplus, SiDart, SiDjango, SiNextdotjs, SiExpress, SiFlutter, SiTailwindcss, SiJquery, SiHtml5, SiCss, SiJson, SiPostgresql, SiMongodb, SiMysql, SiNumpy, SiPandas, SiMatplotlib, SiPostman } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";

const SKILLS = [
  { icon: <FaPython />, name: "Python", color: "text-[#111111]" },
  { icon: <FaJava />, name: "Java", color: "text-[#111111]" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "text-[#111111]" },
  { icon: <SiCplusplus />, name: "C++", color: "text-[#111111]" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-[#111111]" },
  { icon: <FaReact />, name: "React.js", color: "text-[#111111]" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-[#111111]" },
  { icon: <SiDjango />, name: "Django", color: "text-[#111111]" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-[#111111]" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-[#111111]" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-[#111111]" },
  { icon: <FaGitAlt />, name: "Git", color: "text-[#111111]" },
  { icon: <FaLinux />, name: "Linux", color: "text-[#111111]" },
  { icon: <SiPandas />, name: "Pandas", color: "text-[#111111]" },
];

export default function ResumeSkills() {
  return (
    <section className="w-full border-b border-gray-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12">
        
        {/* Left Column: Title */}
        <div className="col-span-1 md:col-span-3 border-r border-gray-200 p-8 sm:p-12 flex flex-col justify-center bg-[#fcfcfc]">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4 block">
            Capabilities
          </span>
          <h2 className="text-3xl font-black tracking-tighter text-[#111111]">
            Technical<br/>Arsenal.
          </h2>
        </div>

        {/* Right Column: Marquee */}
        <div className="col-span-1 md:col-span-9 p-8 sm:p-12 flex items-center overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex gap-4 py-4 w-max animate-scroll">
            {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 border border-gray-200 bg-[#fcfcfc] rounded-sm min-w-fit"
              >
                <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                <span className="text-sm font-bold tracking-tight text-[#111111] uppercase">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
