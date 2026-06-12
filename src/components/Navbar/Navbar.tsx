"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Education", href: "/education" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <header
      className={`w-full border-b border-gray-200 sticky top-0 z-50 ${
        isNavOpen ? "bg-white" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <nav className="w-full max-w-[1400px] mx-auto flex items-center justify-between min-h-[80px] px-6 sm:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="group flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-[#111111]">
              DJ.
            </h1>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-bold hidden sm:block">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-xs lg:text-sm font-bold uppercase tracking-[0.15em] text-gray-500 hover:text-[#111111] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Resume Link */}
        <div className="hidden md:flex items-center justify-end">
          <Link
            href="/resume"
            className="text-xs lg:text-sm font-bold uppercase tracking-[0.15em] text-[#111111] flex items-center gap-2 group"
          >
            <span className="group-hover:text-gray-600 transition-colors">
              Resume
            </span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-[#111111]" onClick={() => setIsNavOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-8 border-b border-gray-200">
          <button
            onClick={() => setIsNavOpen(false)}
            className="absolute top-8 right-8 text-[#111111]"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col gap-6 mt-16">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsNavOpen(false)}
                className="text-2xl font-black tracking-tight text-[#111111] uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume"
              onClick={() => setIsNavOpen(false)}
              className="text-2xl font-black tracking-tight text-[#111111] flex items-center gap-2 uppercase"
            >
              Resume <ArrowUpRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
