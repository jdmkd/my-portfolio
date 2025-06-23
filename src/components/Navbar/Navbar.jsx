"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import MenuIcons, { OpenCloseIcons } from "../../constants/constants";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/styles.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "EDU", path: "/education" },
    { label: "SKILLS", path: "/skills" },
    { label: "PROJECTS", path: "/projects" },
    { label: "RESUME", path: "/resume" },
    { label: "CONTACT", path: "/contact-us" },
  ];

  return (
    <section className="fixed w-full top-0 z-[999]">
      {/* Fullscreen Nav (Mobile Menu) */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 z-[1000]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsNavOpen(false)}
                className="text-white text-2xl font-bold hover:text-blue-400 transition"
              >
                {link.label}
              </Link>
            ))}

            {/* Social Icons */}
            <div className="flex space-x-4 pt-10">
              <Link href="https://github.com/jdmkd" target="_blank">
                <svg width="24" height="24" fill="white"><path d="..." /></svg>
              </Link>
              <Link href="https://www.linkedin.com/in/dj-kumar-9a2a2b236" target="_blank">
                <svg width="24" height="24" fill="white"><path d="..." /></svg>
              </Link>
              <Link href="https://www.instagram.com/jd_mkd_09/" target="_blank">
                <svg width="24" height="24" fill="white"><path d="..." /></svg>
              </Link>
            </div>

            <button onClick={() => setIsNavOpen(false)} className="absolute top-6 right-6">
              <Image src={OpenCloseIcons[0].closeIcon} width={30} height={30} alt="close" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav className="navbar py-4 px-6 md:px-16 font-bold bg-neutral-900/90 flex justify-between items-center">
        {/* Logo + Title */}
        <Link href="/" className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-extrabold text-white">DJ</h1>
          <span className="text-sm text-gray-300">FullStack Developer</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-white hover:text-blue-400 transition text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsNavOpen(true)}>
          <Image
            src={OpenCloseIcons[0].meneIcon}
            alt="menu"
            width={30}
            height={30}
            loading="eager"
          />
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
