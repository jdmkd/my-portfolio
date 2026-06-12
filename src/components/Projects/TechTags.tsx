"use client";
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import DRFIcon from "../../assets/tech_skill_Icon/django_rest_framework.png";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiExpress,
  SiCloudinary,
  SiRedis,
  SiReactquery,
  SiRadixui,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbApi, TbBrandVite, TbBrandTypescript } from "react-icons/tb";

const iconMap = {
  Python: <FaPython className="text-[#3776AB]" />,
  Django: <SiDjango className="text-[#092E20]" />,
  "Django REST Framework": (
    <Image src={DRFIcon} alt="Django REST Framework" className="h-4 w-auto object-contain" />
  ),
  "REST API": <TbApi className="text-gray-600" />,
  "REST APIs": <TbApi className="text-gray-600" />,
  Vite: <TbBrandVite className="text-[#646CFF]" />,
  TypeScript: <TbBrandTypescript className="text-[#3178C6]" />,
  "shadcn/ui": <SiRadixui className="text-black" />,
  PostgreSQL: <SiPostgresql className="text-[#4169E1]" />,
  MySQL: <GrMysql className="text-[#4479A1]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  HTML: <FaHtml5 className="text-[#E34F26]" />,
  CSS: <FaCss3Alt className="text-[#1572B6]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  PHP: <FaPhp className="text-[#777BB4]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  Flutter: <SiFlutter className="text-[#02569B]" />,
  Dart: <SiDart className="text-[#0175C2]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-black" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "React.js": <FaReact className="text-[#61DAFB]" />,
  Cloudinary: <SiCloudinary className="text-[#3448C5]" />,
  Redis: <SiRedis className="text-[#DC382D]" />,
  "TanStack Query": <SiReactquery className="text-[#FF4154]" />,
  NextAuth: <FaLock className="text-black" />,
  RBAC: <FaShieldAlt className="text-gray-600" />,
};

const TechTags = ({ tags }) => (
  <div className="flex flex-wrap gap-3 items-center mt-6">
    {tags.map((tag, index) => {
      const Icon = iconMap[tag];
      return (
        <span
          key={index}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white text-xs font-bold uppercase tracking-widest text-gray-700 hover:border-gray-400 hover:text-black hover:shadow-sm transition-all"
        >
          {Icon && (
            <span className="text-base flex items-center justify-center">
              {Icon}
            </span>
          )}
          {tag}
        </span>
      );
    })}
  </div>
);

TechTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechTags;
