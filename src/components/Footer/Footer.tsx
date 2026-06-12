"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [time, setTime] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    // Simple clock for the "Local Time" feature common in premium portfolios
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }) + " IST",
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#111111] text-white pt-24 pb-8 px-8 sm:px-12 lg:px-16 overflow-hidden relative">
      {/* Top Section: Links & Info */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Navigation
          </span>
          <div className="flex flex-col gap-2">
            {["Home", "Education", "Skills", "Projects", "Contact"].map(
              (link, idx) => (
                <Link
                  key={idx}
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors w-fit"
                >
                  {link}
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Socials
          </span>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/jdmkd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors w-fit"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dj-kumar-9a2a2b236"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors w-fit"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/jd_mkd_09/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors w-fit"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:text-right">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-2">
              Local Time
            </span>
            <span className="text-lg font-medium text-gray-300">{time}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-2">
              Location
            </span>
            <span className="text-lg font-medium text-gray-300">
              Ahmedabad, India
            </span>
          </div>
        </div>
      </div>

      {/* Massive Typography Name */}
      <div className="w-full flex justify-center items-center border-t border-white/10 pt-16 pb-8">
        <h1 className="text-[12vw] sm:text-[10vw] font-black tracking-tighter leading-none text-white text-center whitespace-nowrap opacity-90">
          DINESH KUMAR.
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-[10px] uppercase tracking-widest text-gray-500 font-bold max-w-7xl mx-auto w-full">
        <span>© {currentYear} ALL RIGHTS RESERVED.</span>
        <span>DESIGNED & ENGINEERED WITH PRECISION.</span>
      </div>
    </footer>
  );
}

export default Footer;
