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

      const formattedDate = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Kolkata",
      });

      setTime(`${formattedDate} • ${formattedTime} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#000000] text-white border-t border-white/20 pt-12 pb-8 px-6 sm:px-12 lg:px-16 overflow-hidden relative">
      {/* Top Section: Links & Info */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] md:text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold">
            Navigation
          </span>
          <div className="flex flex-col gap-2">
            {["Home", "Education", "Skills", "Projects", "Contact"].map(
              (link, idx) => (
                <Link
                  key={idx}
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-lg font-medium text-zinc-400 hover:text-white transition-colors w-fit"
                >
                  {link}
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[10px] md:text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold">
            Socials
          </span>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/jdmkd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors w-fit"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dj-kumar-9a2a2b236"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors w-fit"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/jd_mkd_09/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors w-fit"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:text-right">
          <div>
            <span className="text-[10px] md:text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold block mb-2">
              Local Time
            </span>
            <div className="flex items-center md:justify-end gap-3 group cursor-pointer">
              {/* Live Pulsing Dot */}
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-100 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zinc-300 group-hover:bg-white transition-colors"></span>
              </div>
              <span className="text-lg lg:text-xl font-medium text-zinc-400 group-hover:text-white transition-colors tabular-nums">
                {time || "Loading..."}
              </span>
            </div>
          </div>
          <div>
            <span className="text-[10px] md:text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold block mb-2">
              Location
            </span>
            <span className="text-lg font-medium text-zinc-400">
              Ahmedabad, India
            </span>
          </div>
        </div>
      </div>

      {/* Massive Typography Name */}
      <div className="w-full flex justify-center items-center border-t border-white/10 mt-12 pt-8 pb-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none text-white text-center opacity-90 w-full px-4 break-words">
          DINESH KUMAR.
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-[10px] md:text-sm lg:text-base lg:text-lg uppercase tracking-widest text-zinc-500 font-bold w-full">
        <span>© {currentYear} ALL RIGHTS RESERVED.</span>
        <span>DESIGNED & ENGINEERED WITH PRECISION.</span>
      </div>
    </footer>
  );
}

export default Footer;
