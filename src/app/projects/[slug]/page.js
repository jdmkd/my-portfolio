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

    const { slug } = React.use(params);

    if (!slug) return <div className="min-h-screen flex items-center justify-center text-white bg-[#000000]">Loading...</div>;

    const project = projectData.find((proj) => proj.slug === slug);

    if (!project) return <div className="min-h-screen flex items-center justify-center text-white bg-[#000000]">Project not found</div>;

    return (
        <section className="min-h-screen bg-[#000000] text-white pt-32 pb-[6rem] px-6 font-sans selection:bg-white/20">
            <div className="max-w-[1400px] mx-auto">
                
                {/* Header Section */}
                <div className="mb-12 flex flex-col gap-4">
                    {project.isClientProject && (
                        <div className="flex">
                            <span className="inline-flex items-center px-4 py-1.5 bg-white/5 text-white border border-white/10 text-xs font-bold uppercase tracking-[0.2em]">
                                Client Project
                            </span>
                        </div>
                    )}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[1.1]">
                        {project.title}
                    </h1>
                </div>

                {/* Main Image Slider */}
                {project.images && project.images.length > 0 && (
                    <div className="w-full overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.02)] border border-white/10 bg-[#050505] mb-16 relative">
                        <div className="absolute top-0 left-0 w-full h-12 bg-[#030303] border-b border-white/10 flex items-center px-6 gap-2 z-10">
                            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                        </div>
                        <div className="mt-12">
                            <Swiper
                                spaceBetween={0} 
                                slidesPerView={1}
                                navigation={true}
                                pagination={{ clickable: true }}
                                loop={true}
                                modules={[Navigation, Pagination]} 
                                autoplay={{ delay: 4500 }}
                                className="w-full aspect-[16/10] [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white [&_.swiper-pagination-bullet-active]:bg-white"
                            >
                                {project.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={image.src}
                                            alt={`Project screenshot ${index + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 flex flex-col gap-16">
                        
                        {/* About Section */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-black tracking-tight text-white flex items-center gap-4">
                                <span className="w-8 h-[3px] bg-white"></span>
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

                    {/* Right Column: Sticky Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 flex flex-col gap-8">
                            
                            {/* Action Links */}
                            <div className="bg-[#050505] p-8 border border-white/10 shadow-sm flex flex-col gap-6">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Action Links</h4>
                                
                                <div className="flex flex-col gap-4">
                                    {project.live_demo ? (
                                        <a
                                            href={project.live_demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center py-4 px-6 text-sm font-bold text-black bg-white hover:bg-zinc-200 transition-all duration-300 shadow-[0_10px_20px_rgba(255,255,255,0.05)] hover:-translate-y-1"
                                        >
                                            Visit Live Site
                                        </a>
                                    ) : (
                                        <span className="w-full flex items-center justify-center py-4 px-6 text-sm font-bold text-zinc-500 bg-white/5 cursor-not-allowed border border-white/10">
                                            Live Demo Not Available
                                        </span>
                                    )}

                                    {isCodeAvailable(project) ? (
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center py-4 px-6 text-sm font-bold text-white bg-transparent border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300"
                                        >
                                            View Source Code
                                        </a>
                                    ) : (
                                        <div className="w-full flex flex-col gap-2 p-5 bg-white/5 border border-white/10 text-center">
                                            <span className="text-xl mb-1">🔒</span>
                                            <p className="text-[11px] text-zinc-400 leading-relaxed font-black uppercase tracking-widest">
                                                {getCodeLinkDisplay(project)}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-[#050505] p-8 border border-white/10 shadow-sm flex flex-col gap-6">
                                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Technologies Used</h4>
                                <div className="w-full">
                                    <TechTags tags={project.tech_stack} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}