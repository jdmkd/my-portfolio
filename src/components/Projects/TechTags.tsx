import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { TECH_STACK } from "../../config/tech-stack";

const TechTags = ({ tags }) => (
  <div className="flex flex-wrap gap-2 sm:gap-3 items-center mt-6">
    {tags.map((tag, index) => {
      // Direct dictionary lookup - perfectly scalable
      const tech = TECH_STACK[tag];
      const imageUrl = tech ? tech.imageUrl : null;

      return (
        <span
          key={index}
          className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 border border-white/10 bg-[#0a0a0a] text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] text-white transition-all rounded-none hover:border-white hover:bg-white/10"
        >
          {imageUrl && (
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
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
