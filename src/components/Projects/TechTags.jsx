'use client'
import React from "react";
import PropTypes from "prop-types";
import { FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiJavascript, SiTailwindcss, SiBootstrap, SiMongodb, SiFlutter, SiDart, SiNextdotjs, SiExpress, SiCloudinary, SiMysql } from 'react-icons/si';
import { GrMysql } from "react-icons/gr";

const colorPairs = [
    { text: "text-red-400", bg: "bg-red-100/10 hover:bg-red-200/20" },
    { text: "text-green-400", bg: "bg-green-100/10 hover:bg-green-200/20" },
    { text: "text-blue-400", bg: "bg-blue-100/10 hover:bg-blue-200/20" },
    { text: "text-yellow-400", bg: "bg-yellow-100/10 hover:bg-yellow-200/20" },
    { text: "text-purple-400", bg: "bg-purple-100/10 hover:bg-purple-200/20" },
    { text: "text-pink-400", bg: "bg-pink-100/10 hover:bg-pink-200/20" },
    { text: "text-orange-400", bg: "bg-orange-100/10 hover:bg-orange-200/20" },
    { text: "text-teal-400", bg: "bg-teal-100/10 hover:bg-teal-200/20" },
    { text: "text-indigo-400", bg: "bg-indigo-100/10 hover:bg-indigo-200/20" },
  ];
  
// const getRandomPair = () =>
//     colorPairs[Math.floor(Math.random() * colorPairs.length)];

const getColorPairForTag = (tag) => {
  const index = [...tag].reduce((sum, char) => sum + char.charCodeAt(0), 0) % colorPairs.length;
  return colorPairs[index];
};

const iconMap = {
  Python: <FaPython className="text-yellow-400" />,
  Django: <SiDjango className="text-green-700" />,
  PostgreSQL: <SiPostgresql className="text-blue-600" />,
  MySQL:<GrMysql className="text-blue-600" />,
  JavaScript: <SiJavascript className="text-yellow-300" />,
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-400" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  Bootstrap: <SiBootstrap className="text-purple-600" />,
  PHP: <FaPhp className="text-indigo-700" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Flutter: <SiFlutter className="text-sky-400" />,
  Dart: <SiDart className="text-blue-400" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'Express.js': <SiExpress className="text-gray-300" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'React.js': <FaReact className="text-sky-300" />,
  'Cloudinary' :<SiCloudinary className="text-purple-300"/>
};


const TechTags = ({ tags }) => (
  <p className="flex flex-wrap gap-3 items-center text-sm">
    {tags.map((tag, index) => {
      // const { text, bg } = getRandomPair();
      const { text, bg } = getColorPairForTag(tag);

      return (
        <span
          key={index}
          className={`flex items-center gap-2 px-3 py-1 font-normal 
            ${text} ${bg}
                  bg-opacity-100 cursor-pointer shadow-md
                  rounded-full transition-all duration-400 ease-in-out`}
          >
          {iconMap[tag] || <span className="w-4 h-4" />}
          {tag}
        </span>
      );
    })}
  </p>
);

TechTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechTags;
