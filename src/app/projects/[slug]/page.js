"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'; 

import { projectData, getCodeLinkDisplay, isCodeAvailable } from "../../../components/Projects/project_data";
import TechTags from '@/components/Projects/TechTags';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { UserCircle2 } from 'lucide-react';

export default function ProjectDetail({ params }) {

    const { slug } = React.use(params);

    if (!slug) return <div className="min-h-screen flex items-center justify-center text-white bg-[#000000]">Loading...</div>;

    const project = projectData.find((proj) => proj.slug === slug);

    if (!project) return <div className="min-h-screen flex items-center justify-center text-white bg-[#000000]">Project not found</div>;

    return (
        <section className="min-h-screen bg-[#000000] text-white pt-32 pb-[6rem] px-6 font-sans selection:bg-white/20 ">
            <div className="max-w-[1400px] mx-auto">
                
                {/* Header Section */}
                <div className="mb-12 flex">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[1.1]">
                        {project.title}
                    </h1>
                </div>

                {/* Main Layout Grid */}
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 mb-20 pt-8 border-t border-white/10">
                    
                    {/* Left Column: Image Slider */}
                    <div className="flex-1 min-w-0">
                        {project.images && project.images.length > 0 && (
                            <div className="w-full overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.02)] border border-white/10 bg-[#050505] relative rounded-xl">
                                <div className="absolute top-0 left-0 w-full h-12 bg-[#030303] border-b border-white/10 flex items-center px-6 gap-2 z-10">
                                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                </div>
                                <div className="mt-12 relative group/slider">
                                    <Swiper
                                        spaceBetween={0} 
                                        slidesPerView={1}
                                        navigation={{
                                            nextEl: `.swiper-next-${project.slug}`,
                                            prevEl: `.swiper-prev-${project.slug}`,
                                        }}
                                        pagination={{ clickable: true }}
                                        loop={true}
                                        modules={[Navigation, Pagination]} 
                                        autoplay={{ delay: 4500 }}
                                        className="w-full h-[300px] sm:h-[350px] lg:h-[450px]"
                                    >
                                        <style>{`
                                            .group\\/slider .swiper-pagination {
                                                background: rgba(0, 0, 0, 0.6);
                                                backdrop-filter: blur(12px);
                                                -webkit-backdrop-filter: blur(12px);
                                                border: 1px solid rgba(255, 255, 255, 0.1);
                                                border-radius: 9999px;
                                                padding: 10px 20px;
                                                width: auto !important;
                                                left: 50% !important;
                                                transform: translateX(-50%) !important;
                                                bottom: 24px !important;
                                                display: flex !important;
                                                align-items: center;
                                                gap: 10px;
                                            }
                                            .group\\/slider .swiper-pagination-bullet {
                                                margin: 0 !important;
                                                background: #ffffff !important;
                                                opacity: 0.4;
                                                width: 10px;
                                                height: 10px;
                                                transition: all 0.3s ease;
                                            }
                                            .group\\/slider .swiper-pagination-bullet-active {
                                                opacity: 1;
                                                width: 28px;
                                                border-radius: 9999px;
                                            }
                                        `}</style>
                                        {project.images.map((image, index) => (
                                            <SwiperSlide key={index} className="relative w-full h-full overflow-hidden">
                                                <img
                                                    src={image.src}
                                                    alt={`Project screenshot ${index + 1}`}
                                                    className="w-full h-full object-contain"
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Custom Navigation Overlays */}
                                    <div className={`swiper-prev-${project.slug} absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/60 to-transparent z-10 flex items-center justify-start pl-4 cursor-pointer text-white`}>
                                        <svg className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </div>
                                    <div className={`swiper-next-${project.slug} absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/60 to-transparent z-10 flex items-center justify-end pr-4 cursor-pointer text-white`}>
                                        <svg className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Meta Info */}
                    <div className="w-full lg:w-[450px] shrink-0 flex flex-col gap-10">
                        {/* Action Links */}
                        {project.isClientProject && (
                            <div className="flex flex-col gap-4">
                                <span className="inline-flex items-center justify-center px-4 py-4 bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-[0.2em]">
                                    <UserCircle2 className="w-4 h-4 mr-2" />
                                    Client Project
                                </span>
                            </div>                        
                        )}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold tracking-tight text-white mb-1">Links</h3>
                            <div className="flex flex-col gap-3">
                                {project.live_demo && (
                                    <a
                                        href={project.live_demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-3 py-4 px-6 text-sm font-bold text-black bg-white hover:bg-zinc-200 transition-all duration-300 shadow-[0_10px_20px_rgba(255,255,255,0.05)] hover:-translate-y-1"
                                    >
                                        <FaExternalLinkAlt className="w-4 h-4" />
                                        <span>Visit Live Site</span>
                                    </a>
                                )}
                                {isCodeAvailable(project) && (
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-3 py-4 px-6 text-sm font-bold text-white bg-transparent border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                        <span>View Source Code</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold tracking-tight text-white mb-1">Tech Stack</h3>
                            <TechTags tags={project.tech_stack} className="mt-0" />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mx-auto flex flex-col gap-16">
                    
                    {/* About Section */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-4">
                            About the Project
                        </h2>
                        <p className="text-lg text-zinc-400 leading-[1.8] font-medium">
                            {project.about}
                        </p>
                    </div>

                    {/* Features / Resume Points */}
                    {project.features && project.features.length > 0 && (
                        <div className="flex flex-col gap-8 bg-[#050505] p-8 sm:p-10 border border-white/10 shadow-sm">
                            <h3 className="text-2xl font-black tracking-tight text-white">
                                Key Impact & Engineering
                            </h3>
                            <ul className="flex flex-col gap-6">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-5">
                                        <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white shrink-0 border border-white/5">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-lg text-zinc-400 leading-[1.7] font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Additional Details (optional) */}
                    {project.additional_details && (
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-black tracking-tight text-white flex items-center gap-4">
                                Technical Deep Dive
                            </h3>
                            <p className="text-lg text-zinc-400 leading-[1.8] font-medium">
                                {project.additional_details}
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}