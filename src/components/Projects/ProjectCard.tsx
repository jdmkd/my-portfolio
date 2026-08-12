"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import Image from "next/image";

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
            >
              <style>{`
                  .group\\/slider .swiper-pagination {
                      background: rgba(0, 0, 0, 0.6);
                      backdrop-filter: blur(12px);
                      -webkit-backdrop-filter: blur(12px);
                      border: 1px solid rgba(255, 255, 255, 0.1);
                      border-radius: 9999px;
                      padding: 6px 12px;
                      width: max-content !important;
                      max-width: 90%;
                      left: 50% !important;
                      transform: translateX(-50%) !important;
                      bottom: 12px !important;
                      display: flex !important;
                      align-items: center;
                      gap: 6px;
                      overflow-x: auto;
                      overflow-y: hidden;
                  }
                  .group\\/slider .swiper-pagination::-webkit-scrollbar {
                      display: none;
                  }
                  .group\\/slider .swiper-pagination-bullet {
                      margin: 0 !important;
                      background: #ffffff !important;
                      opacity: 0.4;
                      width: 6px;
                      height: 6px;
                      flex-shrink: 0;
                      transition: all 0.3s ease;
                  }
                  .group\\/slider .swiper-pagination-bullet-active {
                      opacity: 1;
                      width: 16px;
                      border-radius: 9999px;
                  }
                  @media (min-width: 640px) {
                      .group\\/slider .swiper-pagination {
                          padding: 10px 20px;
                          gap: 10px;
                      }
                      .group\\/slider .swiper-pagination-bullet {
                          width: 8px;
                          height: 8px;
                      }
                      .group\\/slider .swiper-pagination-bullet-active {
                          width: 24px;
                      }
                  }
              `}</style>
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
                      src={image}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Overlays */}
            <div
              className={`swiper-prev-${item.slug} absolute inset-y-0 left-0 w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-black/60 to-transparent z-10 flex items-center justify-start pl-2 sm:pl-4 cursor-pointer text-white`}
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 opacity-70 hover:opacity-100 transition-opacity"
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
              className={`swiper-next-${item.slug} absolute inset-y-0 right-0 w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-black/60 to-transparent z-10 flex items-center justify-end pr-2 sm:pr-4 cursor-pointer text-white`}
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 opacity-70 hover:opacity-100 transition-opacity"
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
              <img
                src="/assets/images/wolf_placeholder.png"
                alt="Placeholder Preview"
                className="w-full h-full object-contain opacity-50 invert mix-blend-screen group-hover:scale-110 group-hover:opacity-80 transition-all duration-700 ease-out"
              />
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
            <p className="text-[12px] sm:text-sm uppercase tracking-widest font-bold text-zinc-500">
              {item.tech_stack.slice(0, item.tech_stack.length).join(" • ")}
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
            className="text-[12px] sm:text-base font-black uppercase tracking-[0.1em] text-white flex items-center gap-4 group/btn cursor-pointer"
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
