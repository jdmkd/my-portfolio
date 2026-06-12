"use client";
import Link from "next/link";
import React, { useState } from "react";

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
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="w-full grid grid-cols-2 md:grid-cols-12 items-center min-h-[80px]">
        {/* Logo Cell */}
        <div className="col-span-1 md:col-span-3 h-full border-r border-gray-200 flex items-center px-6 sm:px-8">
          <Link href="/" className="group flex items-center gap-2">
            <h1 className="text-3xl font-black tracking-tighter text-[#111111]">
              DJ.
            </h1>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold hidden xl:block">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop Links Cell */}
        <div className="hidden md:flex col-span-6 h-full border-r border-gray-200 items-center justify-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm font-bold uppercase tracking-[0.15em] text-gray-600 hover:text-[#111111] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Resume Button Cell */}
        <div className="hidden md:flex col-span-3 h-full items-center justify-end px-6 sm:px-8 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
          <Link
            href="/resume"
            className="text-sm font-bold uppercase tracking-[0.15em] text-[#111111] flex items-center gap-3 w-full h-full justify-end"
          >
            <span>Resume</span>
            <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              →
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="col-span-1 md:hidden h-full flex justify-end items-center px-6">
          <button className="text-[#111111]" onClick={() => setIsNavOpen(true)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="flex flex-col gap-6 mt-16">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsNavOpen(false)}
                className="text-2xl font-bold tracking-tight text-[#111111]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume"
              onClick={() => setIsNavOpen(false)}
              className="text-2xl font-bold tracking-tight text-blue-600"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
