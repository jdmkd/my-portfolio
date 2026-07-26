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
        liveLink: "https://paramdivya.com",
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
          "DRF",
          "PostgreSQL",
          "Redis",
          "Cloudinary",
        ],
      },
      {
        name: "housingwaala.com — Real Estate Platform",
        slug: "housingwalaa",
        liveLink: "https://housingwaala.com",
        achievements: [
          "Reduced listing API response from 8.5s to 500–700ms by returning only card-essential fields and deferring full property data to the detail page.",
          "Optimized multi-table property detail queries from 9s–12s to 800ms–1.5s using prefetch_related, select_related, and indexing across relationships.",
          "Implemented dual-layer caching with Redis and TanStack Query, reducing repeat requests to under 20ms with event-driven invalidation.",
          "Optimized property search using PostgreSQL vector search, Q objects, and GIN index across multi-table relational data.",
          "Built a global configurable pagination system with dynamic page size override, eliminating frontend pagination business logic.",
        ],
        techStack: [
          "React.js",
          "TypeScript",
          "TanStack Query",
          "DRF",
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
    duration: "Jul 2021 — Dec 2021",
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

const ProjectAccordion = ({
  proj,
  defaultOpen,
}: {
  proj: any;
  defaultOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full flex flex-col bg-black border border-white/10 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:px-8 sm:py-6 flex flex-row items-center justify-between outline-none cursor-pointer group"
      >
        <div className="flex flex-col gap-2 text-left mr-6">
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
            {proj.name}
          </h4>
        </div>
        <div
          className={`shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "border-white bg-white text-black"
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
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden w-full"
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col gap-8">
              {/* Meta Top: Tech Stack & Action Links */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.techStack.map((tech: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-white/5 border border-white/5 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 shrink-0">
                  {proj.slug && (
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full flex items-center gap-3 hover:bg-zinc-200 transition-colors whitespace-nowrap shrink-0"
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
                      className="px-6 py-3 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full flex items-center gap-2 hover:bg-white/10 hover:border-white/40 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Achievements List */}
              <div className="flex flex-col gap-6">
                {proj.achievements.map((achievement: string, aIdx: number) => (
                  <div key={aIdx} className="flex items-start gap-5 group/item">
                    <span className="text-base lg:text-xl font-mono mt-1 text-zinc-700 group-hover/item:text-zinc-300 transition-colors">
                      {String(aIdx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-medium group-hover/item:text-zinc-100 transition-colors">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CompanyAccordion = ({
  exp,
  defaultOpen,
}: {
  exp: any;
  defaultOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full flex flex-col border-b border-white/10 last:border-b-0 group bg-[#000000] transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 sm:px-12 py-8 sm:py-12 flex flex-col sm:flex-row sm:items-center justify-between outline-none cursor-pointer gap-6 hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex flex-col gap-2 text-left mr-8">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
            {exp.company}
          </h3>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-bold">
            {exp.role} • {exp.duration}
          </span>
        </div>
        <div
          className={`shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 sm:self-center self-start ${
            isOpen
              ? "border-white bg-white text-black"
              : "border-white/10 text-zinc-500 group-hover:border-white group-hover:text-white"
          }`}
        >
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden w-full"
          >
            <div className="flex flex-col border-t border-white/5 bg-[#030303]">
              {/* Overview Block */}
              <div className="p-6 sm:px-12 sm:pt-12 sm:pb-8">
                <span className="text-sm uppercase tracking-widest text-zinc-500 font-bold block mb-4">
                  Overview
                </span>
                <p className="text-lg md:text-2xl font-medium tracking-tight text-zinc-200 leading-snug">
                  {exp.overview}
                </p>
              </div>

              {/* Projects Ledger */}
              <div className="flex flex-col px-6 sm:px-12 pb-12 gap-4">
                <span className="text-sm uppercase tracking-widest text-zinc-500 font-bold block mb-2 mt-4">
                  Shipped Projects & Metrics
                </span>
                {exp.projects.map((proj: any, idx: number) => (
                  <ProjectAccordion
                    key={idx}
                    proj={proj}
                    defaultOpen={idx === 0}
                  />
                ))}
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
      className="w-full bg-[#000000] border-b border-white/10"
      id="experience"
    >
      {/* Header */}
      <div className="border-b border-white/10 p-8 sm:p-12 bg-[#000000]">
        <span className="text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold mb-4 block text-center">
          Professional Journey
        </span>
        <h3 className="text-center text-4xl sm:text-8xl uppercase font-black text-white tracking-tighter">
          Experience & Impact.
        </h3>
      </div>

      <div className="w-full flex flex-col">
        {ExperienceData.map((exp, index) => (
          <CompanyAccordion key={index} exp={exp} defaultOpen={index === 0} />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
