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
    <section
      className="w-full bg-[#030303] border-b border-white/10"
      id="skills"
    >
      {/* Heading */}
      <div className="border-b border-white/10 p-8 sm:p-12 bg-[#000000]">
        <span className="text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold mb-4 block text-center">
          Technical Arsenal
        </span>
        <h3 className="text-center text-4xl sm:text-8xl uppercase font-black text-white tracking-tighter">
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
              className="border-b border-white/10 last:border-b-0 w-full flex flex-col"
            >
              {/* Category Title Toggle */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full p-6 sm:p-8 bg-[#050505] hover:bg-white/5 transition-colors flex items-center justify-between cursor-pointer group outline-none"
              >
                <h4 className="text-base lg:text-lg font-black text-left tracking-widest text-white uppercase">
                  {category}
                </h4>
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "border-white bg-white text-black"
                      : "border-white/10 text-zinc-500 group-hover:border-white group-hover:text-white"
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
                    className="w-full overflow-hidden border-t border-white/10"
                  >
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 bg-[#030303]">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="aspect-square flex flex-col items-center justify-center gap-4 border-r border-b border-white/10 bg-[#030303] hover:bg-white/5 transition-colors group cursor-pointer p-0"
                        >
                          <div className="relative w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-300">
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              fill
                              className="object-contain filter group-hover:brightness-110 transition-all"
                            />
                          </div>
                          <span className="text-[10px] sm:text-xs font-black text-zinc-500 uppercase tracking-widest text-center group-hover:text-white transition-colors">
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
