import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { TECH_STACK } from "../../config/tech-stack";

const TechTags = ({ tags }) => (
  <div className="flex flex-wrap gap-3 items-center mt-6">
    {tags.map((tag, index) => {
      // Direct dictionary lookup - perfectly scalable
      const tech = TECH_STACK[tag];
      const imageUrl = tech ? tech.imageUrl : null;

      return (
        <span
          key={index}
          className="flex items-center gap-3 px-5 py-3 border border-gray-300 bg-white text-xs font-medium uppercase tracking-[0.15em] text-[#111111] transition-all rounded-none hover:border-[#111111] hover:bg-[#FAFAFA]"
        >
          {imageUrl && (
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Image src={imageUrl} alt={tag} fill className="object-contain" />
            </div>
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
