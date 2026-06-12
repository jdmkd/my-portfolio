"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Tagline from "../../widgets/Tagline";
import TechTags from "./TechTags";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

const ProjectCard = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = () => {
    setIsLoading(true);
  };

  return (
    <div className="p-8 sm:p-12 flex flex-col justify-between h-full w-full bg-white hover:bg-[#fcfcfc] transition-colors group cursor-pointer">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-black text-[#111111] tracking-tight group-hover:opacity-70 transition-opacity">
          {item.title}
        </h2>
      </div>

      {/* Image or Placeholder */}
      <div className="mb-6 rounded-sm overflow-hidden bg-gray-50 border border-gray-200 aspect-[16/9] flex items-center justify-center">
        {item.images?.length > 0 ? (
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            modules={[Navigation, Pagination]}
            className="w-full h-full"
          >
            {item.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            No Preview Available
          </span>
        )}
      </div>

      {/* Description */}
      <div className="flex-1">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 block">
          Project Overview
        </span>
        <p className="text-sm text-gray-700 leading-relaxed font-medium line-clamp-3">
          {item.about}
        </p>
      </div>

      {/* Tech Tags */}
      <TechTags tags={item.tech_stack} />

      {/* Read More */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
        <Link
          href={`/projects/${item.slug}`}
          prefetch={true}
          onClick={handleNavigate}
          className="text-[10px] font-bold uppercase tracking-widest text-[#111111] flex items-center gap-3 group/link"
        >
          <span>Explore Project</span>
          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover/link:bg-[#111111] group-hover/link:text-white transition-all">
            →
          </div>
        </Link>

        {isLoading && (
          <div className="w-4 h-4 border-2 border-[#111111] border-t-transparent rounded-full animate-spin" />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
