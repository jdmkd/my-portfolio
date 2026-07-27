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
      <div className="px-8 sm:px-12 pt-8 sm:pt-12">
        {item.images?.length > 0 ? (
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-[#000000] group/slider">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: `.swiper-next-${item.slug}`,
                prevEl: `.swiper-prev-${item.slug}`,
              }}
              pagination={{ clickable: true }}
              loop
              modules={[Navigation, Pagination]}
              className="w-full h-full"
              style={
                {
                  "--swiper-pagination-color": "#ffffff",
                  "--swiper-pagination-bullet-inactive-color": "#aaaaaa",
                  "--swiper-pagination-bullet-inactive-opacity": "0.5",
                } as React.CSSProperties
              }
            >
              {item.images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="relative w-full h-full overflow-hidden"
                >
                  <Link
                    href={`/projects/${item.slug}`}
                    onClick={handleNavigate}
                    className="block w-full h-full"
                  >
                    <img
                      src={image.src}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Overlays */}
            <div
              className={`swiper-prev-${item.slug} absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/60 to-transparent z-10 flex items-center justify-start pl-4 cursor-pointer text-white`}
            >
              <svg
                className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div
              className={`swiper-next-${item.slug} absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/60 to-transparent z-10 flex items-center justify-end pr-4 cursor-pointer text-white`}
            >
              <svg
                className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ) : (
          <Link
            href={`/projects/${item.slug}`}
            onClick={handleNavigate}
            className="block relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-[#000000] cursor-pointer"
          >
            <div className="w-full h-full flex items-center justify-center bg-[#050505] group-hover:bg-white/5 transition-colors duration-500">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
                No Preview Available
              </span>
            </div>
          </Link>
        )}
      </div>

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
