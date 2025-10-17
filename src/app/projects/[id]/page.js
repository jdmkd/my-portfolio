"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'; 

import { projectData, getCodeLinkDisplay, isCodeAvailable } from "../../../components/Projects/project_data";
import TechTags from '@/components/Projects/TechTags';

export default function ProjectDetail({ params }) {

    const { id } = React.use(params);

    if (!id) return <div>Loading...</div>;

    const project = projectData.find((proj) => proj.id === parseInt(id));

    if (!project) return <div>Project not found</div>;

    return (
        <section className="max-w-screen-lg mx-auto py-12 px-6 sm:px-8 md:px-16 lg:px-24 mt-[5rem] mb-[2rem] lg:mt-[7rem] bg-neutral-900/90 rounded-lg shadow-lg">
            {/* Project Title */}
            <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>

            {/* Client Project Badge */}
            {project.isClientProject && (
                <div className="mb-6 inline-block">
                    <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/50 text-purple-300 text-sm font-medium rounded-full">
                        Client Project
                    </span>
                </div>
            )}

            {/* Project Images Slider */}
            {project.images && project.images.length > 0 && (
                <div className="mb-8">
                    <Swiper
                        spaceBetween={30} 
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        modules={[Navigation, Pagination]} 
                        autoplay={{ delay: 2500 }}
                        className="project-image-slider"
                    >
                        {project.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.src}
                                    alt={`Project image ${index + 1}`}
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}

            {/* Project Description */}
            <p className="text-lg text-white mb-8">{project.about}</p>

            {/* Tech Stack */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack</h3>
                <TechTags tags={project.tech_stack} />
            </div>

            {/* Action Buttons Container */}
            <div className="flex flex-wrap gap-4 mb-8">
                {/* Live Demo Link */}
                {project.live_demo ? (
                    <a
                        href={project.live_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-3 px-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-300 ease-in-out"
                    >
                        View Live Demo
                    </a>
                ) : (
                    <span className="inline-block py-3 px-6 text-sm font-medium text-gray-400 bg-gray-800/50 rounded-md cursor-not-allowed">
                        Demo Not Available
                    </span>
                )}

                {/* GitHub Code Link or Client Message */}
                {isCodeAvailable(project) ? (
                    <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-3 px-6 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-md transition-all duration-300 ease-in-out"
                    >
                        View Code on GitHub
                    </a>
                ) : (
                    <div className="inline-flex items-center py-3 px-6 text-sm font-medium text-amber-300 bg-amber-900/20 border border-amber-700/50 rounded-md">
                        <svg 
                            className="w-5 h-5 mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                            />
                        </svg>
                        🔒
                        {getCodeLinkDisplay(project)}
                    </div>
                )}
            </div>

            {/* Additional Details (optional) */}
            {project.additional_details && (
                <div className="mt-12">
                    <h4 className="text-xl font-medium text-white mb-4">Additional Details</h4>
                    <p className="text-gray-300">{project.additional_details}</p>
                </div>
            )}
        </section>
    )
}