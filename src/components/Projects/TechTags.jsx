import React from "react";
import PropTypes from "prop-types";

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
  
  const getRandomPair = () =>
    colorPairs[Math.floor(Math.random() * colorPairs.length)];

const TechTags = ({ tags }) => (
  <p className="flex flex-wrap gap-3 items-center text-sm">
    {tags.map((tag, index) => {
      const { text, bg } = getRandomPair();

      return (
        <span
          key={index}
          className={`px-3 py-1 font-normal 
            ${text} ${bg}
            bg-opacity-100 cursor-pointer
                      rounded-full 
                      transition-all
                      duration-400 ease-in-out`}
        >
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
