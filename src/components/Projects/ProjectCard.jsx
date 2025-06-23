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
    <div className="py-4 px-4 md:px-6 md:py-6 flex flex-col justify-between h-full w-full max-w-lg mx-auto bg-[#1c1c1e]/80 hover:bg-[#2d2d31b8] border border-gray-700/20 rounded-2xl text-white shadow-xl hover:shadow-white-200/10 transition-all duration-500 hover:scale-[1.010] backdrop-blur-sm">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-white underline">{item.title}</h2>

      {/* Image Carousel */}
      {item.images?.length > 0 && (
        <div className="mb-5 rounded-lg overflow-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            modules={[Navigation, Pagination]}
          >
            {item.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-[200px] object-cover rounded-lg border border-gray-600"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Tech Tags */}
      <TechTags tags={item.tech_stack} />

      {/* Description */}
      <p className="text-sm text-gray-200 mt-4 line-clamp-3">
        <span className="text-green-400 font-semibold">Description:</span> {item.about}
      </p>

      {/* Read More */}
      <div className="mt-5 flex items-center gap-2">
        <Link
          href={`/projects/${item.id}`}
          prefetch={true}
          onClick={handleNavigate}
          className="text-sm text-blue-400 hover:text-blue-300 underline"
        >
          Read More →
        </Link>

        {isLoading && (
          <span className="ml-2 inline-block w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
