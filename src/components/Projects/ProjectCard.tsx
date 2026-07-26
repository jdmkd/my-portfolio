"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

const ProjectCard = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = () => {
    setIsLoading(true);
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#030303] group hover:bg-[#0a0a0a] transition-colors duration-500">
      {/* Clickable Image Container */}
      <Link
        href={`/projects/${item.slug}`}
        onClick={handleNavigate}
        className="block relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-[#000000] cursor-pointer"
      >
        {item.images?.length > 0 ? (
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            modules={[Navigation, Pagination]}
            className="w-full h-full [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white [&_.swiper-pagination-bullet-active]:bg-white"
          >
            {item.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#050505] group-hover:bg-white/5 transition-colors duration-500">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
              No Preview Available
            </span>
          </div>
        )}
      </Link>

      {/* Content Container */}
      <div className="p-8 sm:p-12 flex flex-col flex-grow">
        {/* Title */}
        <div className="mb-4">
          <Link href={`/projects/${item.slug}`} onClick={handleNavigate}>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter group-hover:text-zinc-300 transition-colors cursor-pointer">
              {item.title}
            </h2>
          </Link>
        </div>

        {/* Minimal Tech Stack */}
        {item.tech_stack && item.tech_stack.length > 0 && (
          <div className="mb-6">
            <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">
              {item.tech_stack.slice(0, 5).join(" • ")}
              {item.tech_stack.length > 5 && " • +"}
            </p>
          </div>
        )}

        {/* Description */}
        <div className="flex-grow mb-10">
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-medium line-clamp-3">
            {item.about}
          </p>
        </div>

        {/* Call to Action */}
        <div className="pt-6 border-t border-white/10 mt-auto flex items-center justify-between">
          <Link
            href={`/projects/${item.slug}`}
            prefetch={true}
            onClick={handleNavigate}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white flex items-center gap-4 group/btn cursor-pointer"
          >
            <span>Explore Project</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white group-hover/btn:text-black transition-all duration-300 overflow-hidden relative">
              <ArrowRight className="w-3.5 h-3.5 absolute transition-transform duration-300 group-hover/btn:translate-x-8" />
              <ArrowRight className="w-3.5 h-3.5 absolute -translate-x-8 transition-transform duration-300 group-hover/btn:translate-x-0" />
            </div>
          </Link>

          {isLoading && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
