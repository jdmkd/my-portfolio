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
      {/* 1. The Massive Centered Hero View */}
      <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 sm:px-12 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-[0.02]">
          <div className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-black rounded-full blur-[120px]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-5xl relative z-10 w-full"
        >
          {/* Overline */}
          <span className="text-xs lg:text-base uppercase tracking-[0.4em] text-gray-500 font-bold mb-8 flex items-center gap-4">
            <div className="hidden sm:block w-2 h-[8px] bg-green-500"></div>
            Software Engineer & System Architect
            <div className="hidden sm:block w-2 h-[8px] bg-green-500"></div>
          </span>

          {/* Name */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter text-[#111111] leading-[0.9] mb-8">
            Dinesh Kumar.
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 font-medium max-w-3xl leading-relaxed mb-12">
            Full Stack Developer. Architecting scalable B2B, SaaS, and ecommerce
            systems in production.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
            <Link href="/projects">
              <button className="flex items-center justify-center gap-4 bg-[#111111] text-white px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-black transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(0,0,0,0.1)] group w-full sm:w-auto">
                View Featured Works
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link
              href="/Dinesh_kumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="flex items-center justify-center gap-4 bg-white text-[#111111] border border-gray-200 px-8 py-5 text-sm font-bold uppercase tracking-widest hover:border-gray-400 transition-all hover:-translate-y-1 shadow-sm w-full sm:w-auto">
                Download Resume
              </button>
            </Link>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-8">
            <Link
              href="https://github.com/jdmkd"
              target="_blank"
              className="text-gray-400 hover:text-[#111111] transition-colors"
            >
              <FaGithub className="text-3xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dj-kumar-9a2a2b236"
              target="_blank"
              className="text-gray-400 hover:text-[#0a66c2] transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link
              href="https://www.instagram.com/jd_mkd_09/"
              target="_blank"
              className="text-gray-400 hover:text-[#E1306C] transition-colors"
            >
              <FaInstagram className="text-3xl" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 2. The Clean Summary Section (Below the Fold) */}
      <div className="w-full bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="md:col-span-8 p-12 sm:p-16 lg:p-24 flex flex-col justify-center">
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
