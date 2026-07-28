"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceData = [
  {
    company: "Param Divya",
    role: "Full Stack Developer",
    duration: "Jul 2025 — Present",
    location: "Gandhinagar, Gujarat",
    overview:
      "Core engineering team building high-performance B2B, SaaS, and ecommerce systems in production. Focused on massive latency reductions and architectural scaling.",
    projects: [
      {
        name: "paramdivya.com — B2B Premium Timber Import & Custom Woodwork Platform",
        slug: "param-divya-agency",
        liveLink: "https://www.paramdivya.com",
        achievements: [
          "Reduced product search API latency from 4.2s to 400–620ms by introducing Redis caching, PostgreSQL GIN index, query prefetching, and eliminating N+1 ORM queries.",
          "Optimized frontend delivery using route-level code splitting, lazy loading, and WebP media optimization, reducing total network payload from 60.8MB to 9.7MB (84% reduction).",
          "Implemented dual-layer caching with Redis and TanStack Query, reducing repeat requests to 1ms–20ms with tag-based invalidation ensuring catalog stays fresh.",
          "Optimized global and product search using PostgreSQL vector search, GIN index, and trigram fuzzy matching for partial and misspelled query support.",
          "Implemented react-snap SSG with dynamic sitemap ensuring 100% SEO indexability across product and blog pages.",
        ],
        techStack: [
          "React.js",
          "TypeScript",
          "TanStack Query",
          "Django REST Framework",
          "PostgreSQL",
          "Redis",
          "Cloudinary",
        ],
      },
      {
        name: "housingwaala.com — Real Estate Platform",
        slug: "housingwalaa",
        liveLink: "https://www.housingwaala.com",
        achievements: [
          "Reduced listing API response from 8.5s to 500–700ms by returning only card-essential fields and deferring full property data to the detail page.",
          "Optimized multi-table property detail queries from 9s–12s to 800ms–1.5s using prefetch_related, select_related, and indexing across relationships.",
          "Implemented dual-layer caching with Redis and TanStack Query, reducing repeat requests to under 20ms with event-driven invalidation.",
          "Optimized property search using PostgreSQL vector search, Q objects, and GIN index across multi-table relational data.",
          "Built a global configurable pagination system with dynamic page size override, eliminating frontend pagination business logic.",
        ],
        techStack: [
          "Next.js",
          "React.js",
          "TypeScript",
          "TanStack Query",
          "Django REST Framework",
          "PostgreSQL",
          "Redis",
          "Cloudinary",
        ],
      },
    ],
  },
  {
    company: "Freelance / Independent",
    role: "Full Stack Developer",
    duration: "2023 — 2025",
    location: "Remote",
    overview:
      "Architected and deployed multiple full-stack applications while pursuing my MCA. Focused heavily on mastering production-level system design, authentication flows, and relational database architecture.",
    projects: [
      {
        name: "Independent Projects (StarletteCars & Ecotte)",
        slug: "",
        liveLink: "",
        achievements: [
          "Developed StarletteCars, a comprehensive vehicle rental platform built with Django and PostgreSQL.",
          "Architected Ecotte, a scalable e-commerce backend API using Node.js and Stripe for secure payment processing.",
          "Designed robust relational database schemas and implemented secure authentication and authorization systems.",
        ],
        techStack: ["Django", "PostgreSQL", "Node.js", "Stripe", "React.js"],
      },
    ],
  },
  {
    company: "InfoLabz",
    role: "Python Developer (Intern)",
    duration: "May 2021 — Dec 2021",
    location: "Ahmedabad, Gujarat",
    overview:
      "Completed an intensive internship focusing on backend software engineering, API design, and web development using Python and the Django framework.",
    projects: [
      {
        name: "Backend Engineering Internship",
        slug: "",
        liveLink: "",
        achievements: [
          "Developed core backend logic and RESTful APIs using Python and Django.",
          "Gained hands-on experience with relational database modeling and integrating with Django's ORM.",
          "Collaborated on codebase management, learning industry-standard version control and deployment practices.",
        ],
        techStack: ["Python", "Django", "SQL", "REST APIs", "Git"],
      },
    ],
  },
];

const ProjectGlassCard = ({
  proj,
  defaultOpen,
}: {
  proj: any;
  defaultOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-10 py-5 sm:py-8 flex flex-row items-center justify-between outline-none cursor-pointer group"
      >
        <div className="flex flex-col gap-2 text-left mr-4 sm:mr-6 min-w-0">
          <h4 className="text-lg sm:text-2xl font-semibold tracking-tight text-white leading-tight break-words">
            {proj.name}
          </h4>
        </div>
        <div
          className={`shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
            isOpen
              ? "border-white bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              : "border-white/10 text-zinc-500 group-hover:border-white group-hover:text-white"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden w-full"
          >
            <div
              className={`px-4 sm:px-10 pb-6 sm:pb-10 flex flex-col ${!proj.slug ? "gap-8 sm:gap-10" : "gap-4"}`}
            >
              {/* Meta Top: Tech Stack & Action Links */}
              <div
                className={`flex flex-col xl:flex-row xl:items-center justify-between gap-6 ${!proj.slug && proj.achievements && proj.achievements.length > 0 ? "border-b border-white/5 pb-8" : ""}`}
              >
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.techStack.map((tech: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0 mt-4 xl:mt-0">
                  {proj.slug && (
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-lg flex items-center gap-2 hover:bg-zinc-200 transition-colors whitespace-nowrap shrink-0 shadow-[0_5px_15px_rgba(255,255,255,0.1)]"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                  {proj.liveLink && (
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg flex items-center gap-2 hover:bg-white/10 hover:border-white/40 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Achievements List */}
              {!proj.slug &&
                proj.achievements &&
                proj.achievements.length > 0 && (
                  <div className="flex flex-col gap-6">
                    {proj.achievements.map(
                      (achievement: string, aIdx: number) => (
                        <div
                          key={aIdx}
                          className="flex items-start gap-5 group/item"
                        >
                          <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white shrink-0 border border-white/5">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth="3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="text-base text-zinc-400 leading-relaxed font-medium group-hover/item:text-zinc-200 transition-colors">
                            {achievement}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CompanyDropdown = ({
  exp,
  defaultOpen,
}: {
  exp: any;
  defaultOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full flex flex-col border-b border-white/10 last:border-b-0 relative py-6 md:py-8">
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-row items-center justify-between group outline-none text-left cursor-pointer"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl sm:text-4xl font-black tracking-tighter text-white leading-[1.1] group-hover:text-zinc-300 transition-colors">
            {exp.company}
          </h3>
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 font-bold">
            {exp.role} • {exp.duration}
          </span>
        </div>
        <div
          className={`shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
            isOpen
              ? "border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              : "border-white/10 text-zinc-500 group-hover:border-white group-hover:text-white"
          }`}
        >
          {isOpen ? (
            <Minus className="w-6 h-6 sm:w-8 sm:h-8" />
          ) : (
            <Plus className="w-6 h-6 sm:w-8 sm:h-8" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden w-full"
          >
            <div className="relative pl-4 sm:pl-8 ml-1 sm:ml-4 mt-6 sm:mt-8">
              {/* Overarching Animated Company Tree Bar */}
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-white/20 to-white/10"></div>

              <div className="w-full flex flex-col gap-8 sm:gap-12 pb-4">
                {/* Overview Section */}
                <div className="w-full flex flex-col gap-4 sm:gap-6">
                  <span className="text-[10px] text-base uppercase tracking-widest text-zinc-600 font-bold">
                    {exp.location}
                  </span>
                  <p className="text-base md:text-xl font-medium tracking-tight text-zinc-300 leading-relaxed max-w-4xl">
                    {exp.overview}
                  </p>
                </div>

                {/* Projects Section */}
                <div className="w-full flex flex-col gap-8">
                  <span className="text-xs uppercase tracking-widest text-zinc-600 font-bold border-b border-white/10 pb-4">
                    Shipped Projects & Metrics
                  </span>
                  <div className="flex flex-col gap-6">
                    {exp.projects.map((proj: any, idx: number) => (
                      <div key={idx} className="relative z-10">
                        {/* Perfect SVG Bezier S-Curve */}
                        <div className="absolute top-[10px] sm:top-[14px] -left-4 sm:-left-8 w-4 sm:w-8 h-[24px] pointer-events-none">
                          <svg
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 100"
                          >
                            <path
                              d="M 0,0 C 0,50 100,50 100,100"
                              fill="none"
                              stroke="rgba(255,255,255,0.2)"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </div>
                        {/* Sleek Glowing Node */}
                        <div className="absolute top-[34px] sm:top-[38px] left-0 w-2 h-2 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(255,255,255,1)] z-10"></div>

                        <ProjectGlassCard proj={proj} defaultOpen={idx === 0} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function WorkExperience() {
  return (
    <section
      className="w-full relative bg-[#020202] overflow-hidden"
      id="experience"
    >
      {/* Wavy 3D Ribbon Structure Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute w-full h-[120%] -top-[10%] left-0 opacity-60"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(79,70,229,0.8)" />
              <stop offset="30%" stopColor="rgba(147,51,234,0.4)" />
              <stop offset="70%" stopColor="rgba(225,29,72,0.6)" />
              <stop offset="100%" stopColor="rgba(244,63,94,0)" />
            </linearGradient>
            <linearGradient id="ribbonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(79,70,229,0.4)" />
              <stop offset="50%" stopColor="rgba(225,29,72,0.2)" />
              <stop offset="100%" stopColor="rgba(244,63,94,0)" />
            </linearGradient>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <path
            d="M -200,0 C 800,200 900,400 500,550 C 100,700 200,800 1200,1000"
            fill="none"
            stroke="url(#ribbonGrad)"
            strokeWidth="4"
            filter="url(#neonGlow)"
          />
          <path
            d="M -220,-10 C 780,190 880,390 480,540 C 80,690 180,790 1180,990"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />
          <path
            d="M -180,10 C 820,210 920,410 520,560 C 120,710 220,810 1220,1010"
            fill="none"
            stroke="url(#ribbonGlow)"
            strokeWidth="8"
            filter="url(#neonGlow)"
            opacity="0.5"
          />
          <path
            d="M -200,0 C 800,200 900,400 500,550 C 100,700 200,800 1200,1000"
            fill="none"
            stroke="rgba(225,29,72,0.15)"
            strokeWidth="40"
            filter="url(#neonGlow)"
          />
        </svg>

        <div className="absolute top-[40%] left-[40%] w-[60vw] h-[60vw] rounded-full bg-rose-600/5 blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Header with Sharp 3D Divider */}
        <div className="border-b border-white/10 p-8 sm:p-12 bg-[#000000] overflow-hidden">
          <span className="text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold mb-6 block text-center relative z-10">
            Professional Journey
          </span>
          <h3 className="text-center text-4xl sm:text-7xl lg:text-8xl uppercase font-black text-white tracking-tighter max-w-5xl mx-auto leading-[1.1] relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Experience & Impact.
          </h3>
        </div>

        {/* Editorial Timeline container */}
        <div className="w-full px-6 sm:px-12 max-w-[1600px] mx-auto z-10 relative">
          <div className="flex flex-col border-b border-white/10">
            {ExperienceData.map((exp, index) => (
              <CompanyDropdown
                key={index}
                exp={exp}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
