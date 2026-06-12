"use client";
import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col bg-[#FAFAFA] font-sans">
      {/* 1. The Massive Editorial Hero View */}
      <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 sm:px-12 lg:px-24 relative overflow-hidden py-12 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-[1400px] mx-auto relative z-10 w-full"
        >
          {/* Overline - Clean and Structural */}
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="w-8 sm:w-12 h-[2px] bg-[#111111]"></div>
            <span className="text-xs sm:text-sm font-bold text-[#111111] uppercase tracking-widest">
              Software Engineer{" "}
              <span className="text-gray-400 font-medium mx-2">/</span> System
              Architect
            </span>
          </div>

          {/* Name - Massive, tight leading, structural */}
          <h1 className="text-[18vw] md:text-[11vw] lg:text-[10rem] xl:text-[10rem] font-black tracking-tighter text-[#111111] leading-[0.85] mb-8 sm:mb-12 w-full">
            Dinesh
            <br className="block md:hidden" /> Kumar.
          </h1>

          {/* Subtitle - Editorial style border-left */}
          <div className="w-full md:w-3/4 lg:w-auto border-l-4 border-[#111111] pl-6 sm:pl-8 lg:pl-10 mb-10 sm:mb-14">
            <p className="text-lg sm:text-2xl text-gray-500 font-medium leading-snug tracking-tight">
              Full Stack Developer & System Architect. Engineering
              high-performance, scalable B2B platforms, SaaS products, and
              robust ecommerce architecture. I transform complex technical
              challenges into elegant, production-ready solutions focused on
              speed, reliability, and exceptional user experience.
            </p>
          </div>

          {/* Action Buttons - Brutalist, stark, no cheap shadows */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-16 w-full sm:w-auto">
            <Link
              href="/projects"
              className="flex items-center justify-between sm:justify-center gap-6 bg-[#111111] border-2 border-[#111111] text-white px-8 py-5 sm:px-10 sm:py-6 text-sm lg:text-base font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#111111] transition-colors group w-full sm:w-auto rounded-none"
            >
              <span>View Featured Works</span>
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/Dinesh_kumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center justify-center gap-4 bg-transparent text-[#111111] border-2 border-gray-200 px-8 py-5 sm:px-10 sm:py-6 text-sm lg:text-base font-black uppercase tracking-[0.2em] hover:border-[#111111] transition-colors w-full sm:w-auto rounded-none"
            >
              Download Resume
            </Link>
          </div>

          {/* Social Links Row - Clean and structural */}
          <div className="flex items-center gap-8 w-full sm:w-auto">
            <Link
              href="https://github.com/jdmkd"
              target="_blank"
              className="text-gray-400 hover:text-[#111111] transition-colors"
            >
              <FaGithub className="text-2xl sm:text-3xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dj-kumar-9a2a2b236"
              target="_blank"
              className="text-gray-400 hover:text-[#0a66c2] transition-colors"
            >
              <FaLinkedin className="text-2xl sm:text-3xl" />
            </Link>
            <Link
              href="https://www.instagram.com/jd_mkd_09/"
              target="_blank"
              className="text-gray-400 hover:text-[#E1306C] transition-colors"
            >
              <FaInstagram className="text-2xl sm:text-3xl" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 2. The Clean Summary Section (Below the Fold) */}
      <div className="w-full bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="md:col-span-8 p-8 sm:p-16 lg:p-24 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-6 block">
              Professional Summary
            </span>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              Full stack developer with 1+ years of experience building B2B,
              SaaS, and ecommerce systems in production. Reduced search API
              latency from 4.2 seconds to 620ms, cut frontend payload by 84%,
              and brought inventory API response times from 9 seconds to 300ms -
              across real projects, real traffic, real deadlines. Works across
              Node.js, Django REST Framework, Next.js, PostgreSQL, MongoDB, and
              Redis.
            </p>
          </div>

          <div className="md:col-span-4 p-12 sm:p-16 lg:p-24 flex flex-col justify-center items-center text-center bg-[#fafafa]">
            <span className="text-7xl md:text-8xl lg:text-9xl font-black text-[#111111] tracking-tighter mb-4">
              1+
            </span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-bold">
              Years Active
              <br />
              In Production
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
