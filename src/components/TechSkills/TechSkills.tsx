import Image from "next/image";
import React from "react";

import { techSkillsImg } from "../../constants/constants";

const Tech = () => {
  return (
    <section className="w-full bg-white border-b border-gray-200" id="skills">
      {/* Heading */}
      <div className="border-b border-gray-200 p-8 sm:p-12 bg-[#fcfcfc]">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4 block text-center">
          Technical Arsenal
        </span>
        <h3 className="text-center text-4xl md:text-5xl font-black text-[#111111] tracking-tighter">
          Skills & Stack.
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="w-full">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border-t-0">
          {techSkillsImg.map((item, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center border-r border-b border-gray-200 bg-white hover:bg-[#fcfcfc] transition-colors group cursor-pointer p-4"
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={item.imageUrl}
                  alt="tech-skill"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
