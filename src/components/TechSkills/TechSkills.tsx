import React from "react";
import Image from "next/image";
import { TECH_STACK, TechCategory } from "../../config/tech-stack";

const Tech = () => {
  const allTech = Object.values(TECH_STACK);

  // Group technologies by category
  const groupedTech: Record<TechCategory, typeof allTech> = allTech.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} as any,
  );

  // Define the exact order for displaying the categories
  const categoryOrder: TechCategory[] = [
    "Programming Languages",
    "Backend",
    "Database",
    "DevOps & Cloud",
    "Frontend",
    "Tools",
  ];

  return (
    <section className="w-full bg-white border-b border-gray-200" id="skills">
      {/* Heading */}
      <div className="border-b border-gray-200 p-8 sm:p-12 bg-[#fcfcfc]">
        <span className="text-sm lg:text-base uppercase tracking-widest text-gray-500 font-bold mb-4 block text-center">
          Technical Arsenal
        </span>
        <h3 className="text-center text-4xl sm:text-8xl uppercase font-black text-[#111111] tracking-tighter">
          Skills & Stack.
        </h3>
      </div>

      {/* Skills Categories */}
      <div className="w-full flex flex-col">
        {categoryOrder.map((category) => {
          const items = groupedTech[category];
          if (!items || items.length === 0) return null;

          return (
            <div
              key={category}
              className="border-b border-gray-200 last:border-b-0 w-full flex flex-col"
            >
              {/* Category Title Area */}
              <div className="w-full p-4 sm:p-6 border-b border-gray-200 bg-[#FAFAFA] flex items-center justify-center sm:justify-start">
                <h4 className="text-base lg:text-lg font-black tracking-widest text-[#111111] uppercase">
                  {category}
                </h4>
              </div>

              {/* Grid Area */}
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="aspect-square flex flex-col items-center justify-center gap-4 border-r border-b border-gray-200 bg-white hover:bg-[#FAFAFA] transition-colors group cursor-pointer p-6"
                    >
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs font-black text-gray-500 uppercase tracking-widest text-center group-hover:text-[#111111] transition-colors">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
