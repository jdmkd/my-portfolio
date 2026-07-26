"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const name = "Dinesh Kumar.";

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  };

  return (
    <div className="relative bg-[#030303] overflow-hidden font-sans pt-[100px] lg:pt-[120px] min-h-screen">
      {/* Interactive Mouse Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-screen"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          maskImage:
            "radial-gradient(ellipse 60% 80% at 50% 50%, #000 10%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 80% at 50% 50%, #000 10%, transparent 100%)",
        }}
      />

      <section className="relative z-20 w-full flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto py-20 lg:py-32">
        <div className="flex flex-col items-center w-full">
          {/* 3D Character Reveal Name */}
          <motion.h1
            className="text-[16vw] md:text-[14vw] lg:text-[10rem] font-black leading-[0.9] mb-12 flex flex-wrap justify-center overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.2 },
              },
            }}
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ type: "spring", damping: 12, stiffness: 100 }}
                className={
                  char === " "
                    ? "w-[4vw] lg:w-12"
                    : "inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-300"
                }
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* High-End Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-lg md:text-xl lg:text-2xl text-zinc-400 leading-relaxed mb-16 mx-auto"
          >
            I architect and build{" "}
            <span className="text-white font-semibold">
              high-performance systems
            </span>{" "}
            and digital experiences. Merging clean design with robust
            engineering for the modern web.
          </motion.p>

          {/* Premium CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="group relative flex items-center justify-center gap-3 bg-white text-black text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Works
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </Link>

            <Link
              href="/Dinesh_kumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group relative flex items-center justify-center gap-3 bg-transparent text-white text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-full border border-white/20 transition-all hover:scale-105 hover:border-white/40 active:scale-95 w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
