import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ExperienceData = [
  {
    company: "Param Divya IT Solution",
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
];

function WorkExperience() {
  return (
    <section
      className="w-full bg-white border-b border-gray-200"
      id="experience"
    >
      {/* Premium Editorial Header */}
      <div className="w-full border-b border-gray-200 px-6 sm:px-12 py-20 lg:py-32 bg-white flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        <h2 className="text-[15vw] sm:text-8xl leading-[0.9] font-black tracking-tighter text-[#111111] uppercase">
          Experience
          <br />
          <span className="text-gray-300">& Impact</span>
        </h2>
        <div className="lg:w-1/3 pb-2">
          <p className="text-xs sm:text-sm font-bold text-gray-400 leading-relaxed uppercase tracking-[0.2em] border-l-2 border-[#111111] pl-6">
            A track record of building scalable, high-performance architecture
            for the modern web.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col">
        {ExperienceData.map((exp, index) => (
          <div
            key={index}
            className="w-full grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 last:border-b-0"
          >
            {/* Left Column: Stark Meta Data */}
            <div className="col-span-1 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-200 p-6 sm:p-12 bg-white flex flex-col justify-between">
              <div className="sticky top-32">
                <h3 className="text-[15vw] md:text-6xl font-black tracking-tighter text-[#111111] leading-[0.9] mb-10">
                  {exp.company}
                </h3>
                <div className="flex flex-col gap-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-1">
                      Role
                    </span>
                    <span className="text-sm font-bold text-[#111111] uppercase tracking-wide">
                      {exp.role}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-1">
                      Duration
                    </span>
                    <span className="text-sm font-bold text-[#111111] uppercase tracking-wide">
                      {exp.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-1">
                      Location
                    </span>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Ledger Style Projects & Impact */}
            <div className="col-span-1 lg:col-span-8 flex flex-col">
              {/* Overview Block */}
              <div className="p-6 sm:p-12 border-b border-gray-200 bg-[#FAFAFA]">
                <span className="text-sm uppercase tracking-widest text-gray-400 font-bold block mb-6">
                  Overview
                </span>
                <p className="text-lg md:text-2xl font-medium tracking-tight text-[#111111] leading-snug">
                  {exp.overview}
                </p>
              </div>

              {/* Projects Ledger */}
              <div className="flex flex-col border-b border-gray-200">
                <div className="p-6 sm:p-12 border-b border-gray-200 bg-white">
                  <span className="text-base uppercase tracking-widest text-[#111111] font-black block">
                    Shipped Projects & Metrics
                  </span>
                </div>

                {exp.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="w-full flex flex-col border-b border-gray-200 last:border-b-0 group hover:bg-[#FAFAFA] transition-colors p-6 sm:p-12 gap-8"
                  >
                    {/* Project Title Area */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[10vw] sm:text-3xl font-black tracking-tighter text-[#111111] leading-tight cursor-pointer">
                        <Link href={`/projects/${proj.slug}`}>{proj.name}</Link>
                      </h4>
                    </div>

                    {/* Achievements List - Minimalist SaaS UI */}
                    <div className="flex flex-col gap-6">
                      {proj.achievements.map((achievement, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-start gap-5 group/item"
                        >
                          <span className="text-base lg:text-xl font-mono mt-1 text-gray-300 group-hover/item:text-[#111111] transition-colors">
                            {String(aIdx + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium group-hover/item:text-[#111111] transition-colors">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack - Minimalist text UI */}
                    <div className="pt-6">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                        {proj.techStack.join(" • ")}
                      </p>
                    </div>

                    {/* Action Links - Premium Animated Buttons */}
                    <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                      {proj.slug && (
                        <Link
                          href={`/projects/${proj.slug}`}
                          className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111111] flex items-center gap-4 group/btn cursor-pointer"
                        >
                          <span>Case Study</span>
                          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover/btn:bg-[#111111] group-hover/btn:border-[#111111] group-hover/btn:text-white transition-all duration-300 overflow-hidden relative">
                            <ArrowRight className="w-3.5 h-3.5 absolute transition-transform duration-300 group-hover/btn:translate-x-8" />
                            <ArrowRight className="w-3.5 h-3.5 absolute -translate-x-8 transition-transform duration-300 group-hover/btn:translate-x-0" />
                          </div>
                        </Link>
                      )}
                      {proj.liveLink && (
                        <a
                          href={proj.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-[#111111] flex items-center gap-2 transition-colors cursor-pointer"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
