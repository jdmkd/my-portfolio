"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TECH_STACK, TechCategory } from "../../config/tech-stack";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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

  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {},
  );

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

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

      {/* Skills Categories Accordion */}
      <div className="w-full flex flex-col">
        {categoryOrder.map((category) => {
          const items = groupedTech[category];
          if (!items || items.length === 0) return null;

          const isOpen = !!openCategories[category];

          return (
            <div
              key={category}
              className="border-b border-gray-200 last:border-b-0 w-full flex flex-col"
            >
              {/* Category Title Toggle */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full p-6 sm:p-8 bg-[#FAFAFA] hover:bg-[#f4f4f4] transition-colors flex items-center justify-between cursor-pointer group outline-none"
              >
                <h4 className="text-base lg:text-lg font-black tracking-widest text-[#111111] uppercase">
                  {category}
                </h4>
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "border-[#111111] bg-[#111111] text-white"
                      : "border-gray-300 text-gray-400 group-hover:border-[#111111] group-hover:text-[#111111]"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Grid Area Animated */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full overflow-hidden border-t border-gray-200"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 bg-white">
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
