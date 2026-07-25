"use client";
import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <section id="home" className="w-full flex flex-col bg-gradient-to-br from-[#FAFAFA] via-white to-[#F5F5F5] font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orb 1 */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "-10%", right: "10%" }}
        />
        {/* Gradient orb 2 */}
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "-5%", left: "5%" }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 sm:px-12 lg:px-24 relative z-10 py-12 md:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left max-w-[1400px] mx-auto w-full"
        >
          {/* Overline - Enhanced */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8 sm:mb-10">
            <motion.div
              className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-blue-600 to-purple-600"
              animate={{ width: ["32px", "48px", "32px"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs sm:text-sm font-bold text-[#111111] uppercase tracking-widest">
              Software Engineer{" "}
              <span className="text-gray-400 font-medium mx-2">/</span> System
              Architect
            </span>
          </motion.div>

          {/* Name - Massive with gradient */}
          <motion.h1
            variants={titleVariants}
            className="text-[18vw] md:text-[11vw] lg:text-[10rem] xl:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 sm:mb-12 w-full"
          >
            <span className="bg-gradient-to-r from-[#111111] via-blue-600 to-[#111111] bg-clip-text text-transparent">
              Dinesh
            </span>
            <br className="block md:hidden" />
            <span className="text-[#111111]">Kumar.</span>
          </motion.h1>

          {/* Subtitle - Editorial style with enhanced border */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-3/4 lg:w-auto border-l-4 pl-6 sm:pl-8 lg:pl-10 mb-10 sm:mb-14 group hover:scale-105 transition-transform duration-300"
            style={{
              borderImage: "linear-gradient(to bottom, #2563eb, #9333ea) 1",
            }}
          >
            <p className="text-lg sm:text-2xl text-gray-700 font-medium leading-snug tracking-tight">
              Full Stack Developer & System Architect. Engineering
              high-performance, scalable B2B platforms, SaaS products, and
              robust ecommerce architecture. I transform complex technical
              challenges into elegant, production-ready solutions focused on
              speed, reliability, and exceptional user experience.
            </p>
          </motion.div>

          {/* Action Buttons - Enhanced */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-16 w-full sm:w-auto">
            <Link
              href="/projects"
              className="flex items-center justify-between sm:justify-center gap-6 bg-gradient-to-r from-[#111111] to-blue-900 border-2 border-[#111111] text-white px-8 py-5 sm:px-10 sm:py-6 text-sm lg:text-base font-black uppercase tracking-[0.2em] hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 group rounded-lg"
            >
              <span>View Featured Works</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>

            <Link
              href="/Dinesh_kumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center justify-center gap-4 bg-white text-[#111111] border-2 border-gray-300 px-8 py-5 sm:px-10 sm:py-6 text-sm lg:text-base font-black uppercase tracking-[0.15em] hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 rounded-lg group"
            >
              <span>Download Resume</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="rotate-90" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Social Links Row - Enhanced with hover effects */}
          <motion.div variants={itemVariants} className="flex items-center gap-8 w-full sm:w-auto">
            {[
              {
                href: "https://github.com/jdmkd",
                icon: FaGithub,
                hoverColor: "#111111",
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/dj-kumar-9a2a2b236",
                icon: FaLinkedin,
                hoverColor: "#0a66c2",
                label: "LinkedIn",
              },
              {
                href: "https://www.instagram.com/jd_mkd_09/",
                icon: FaInstagram,
                hoverColor: "#E1306C",
                label: "Instagram",
              },
            ].map((social, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors relative group"
                  title={social.label}
                >
                  <social.icon className="text-2xl sm:text-3xl" />
                  <motion.div
                    className="absolute inset-0 rounded-full blur-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: social.hoverColor,
                      filter: "blur(8px)",
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            Scroll
          </span>
          <FaChevronDown className="text-gray-400 text-xl animate-bounce" />
        </div>
      </motion.div>

      {/* Summary Section Below the Fold - Enhanced */}
      <div className="w-full bg-white border-y-2 border-gray-100 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x-2 divide-gray-100">
          <motion.div
            className="md:col-span-8 p-8 sm:p-16 lg:p-24 flex flex-col justify-center hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 transition-colors duration-300"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold mb-6 block">
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
          </motion.div>

          <motion.div
            className="md:col-span-4 p-12 sm:p-16 lg:p-24 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#fafafa] to-blue-50"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-[#111111] to-blue-600 bg-clip-text text-transparent tracking-tighter mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              1+
            </motion.span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-bold">
              Years Active
              <br />
              In Production
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
