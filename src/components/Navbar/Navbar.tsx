"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Education", href: "/education" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 flex justify-center transition-all duration-500 pt-6 md:pt-8 px-4 ${
          scrolled ? "translate-y-[-10px]" : ""
        }`}
      >
        {/* The Floating Glass Pill */}
        <nav
          className={`flex items-center justify-between px-2 py-2 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] w-full max-w-[1000px]"
              : "bg-black/10 backdrop-blur-lg border border-white/5 w-full max-w-[1200px]"
          }`}
        >
          {/* Logo */}
          <div className="pl-4 md:pl-6 flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-white">
                DJ.
              </h1>
            </Link>
          </div>

          {/* Desktop Links with Framer Motion Hover */}
          <div className="hidden md:flex items-center relative">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-5 py-2.5 rounded-full text-sm xl:text-base font-semibold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors z-10"
              >
                <span className="relative z-10">{link.label}</span>
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Resume Link & Mobile Toggle */}
          <div className="flex items-center gap-4 pr-2">
            <div className="hidden md:block">
              <Link
                href="/Dinesh_kumar_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Resume
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white"
              onClick={() => setIsNavOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Ultra Premium Mobile Menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-2xl flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsNavOpen(false)}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsNavOpen(false)}
                    className="text-lg sm:text-xl lg:text-3xl font-black tracking-tighter text-zinc-400 hover:text-white uppercase transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
              >
                <Link
                  href="/Dinesh_kumar_resume.pdf"
                  target="_blank"
                  onClick={() => setIsNavOpen(false)}
                  className="mt-8 inline-flex items-center gap-3 text-sm font-bold tracking-widest text-black bg-white px-6 py-3 rounded-full uppercase hover:scale-105 active:scale-95 transition-all"
                >
                  Download Resume <ArrowUpRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
