import React from "react";
import TechTags from "../Projects/TechTags"; // Re-use the sleek tags

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
        name: "paramdivya.com — B2B Timber Platform",
        details:
          "Reduced search API latency from 4.2s to 400ms via Redis caching and PostgreSQL GIN indices. Cut frontend payload by 84% (60.8MB to 9.7MB). Implemented dual-layer caching and react-snap SSG for 100% indexability.",
      },
      {
        name: "housingwaala.com — Real Estate Platform",
        details:
          "Optimized property detail queries from 12s to 800ms using select_related and PostgreSQL indexing. Built configurable pagination and vector search across multi-table relational data.",
      },
    ],
    impact: [
      "Eliminated N+1 ORM queries and optimized global search using trigram fuzzy matching.",
      "Maintained sub-20ms repeat request times using event-driven cache invalidation across APIs.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "Redis",
      "Cloudinary",
    ],
  },
];

function WorkExperience() {
  return (
    <section
      className="w-full bg-[#fcfcfc] border-b border-gray-200"
      id="experience"
    >
      {/* Header */}
      <div className="border-b border-gray-200 p-8 sm:p-12 lg:p-16 bg-white">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4 block text-center">
          Career Path
        </span>
        <h3 className="text-center text-4xl md:text-5xl font-black text-[#111111] tracking-tighter">
          Experience & Impact.
        </h3>
      </div>

      {/* Sticky Case Study Layout */}
      <div className="w-full flex flex-col divide-y divide-gray-200">
        {ExperienceData.map((exp, index) => (
          <div
            key={index}
            className="w-full flex flex-col lg:flex-row relative"
          >
            {/* Left Sticky Column: Timeline & Meta */}
            <div className="lg:w-[30%] xl:w-[25%] p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white">
              <div className="sticky top-[100px] flex flex-col gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-2">
                    Duration
                  </span>
                  <span className="text-sm font-black text-[#111111]">
                    {exp.duration}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-2">
                    Location
                  </span>
                  <span className="text-sm font-bold text-gray-700">
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Scrolling Column: The Case Study */}
            <div className="lg:w-[70%] xl:w-[75%] p-8 sm:p-12 lg:p-16 xl:p-24 bg-[#fcfcfc] hover:bg-white transition-colors duration-500">
              {/* Role Header */}
              <div className="mb-12">
                <h4 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight mb-4">
                  {exp.company}
                </h4>
                <p className="text-lg font-bold uppercase tracking-widest text-gray-500">
                  {exp.role}
                </p>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {exp.overview}
                </p>
              </div>

              {/* Projects & Implementations */}
              <div className="mb-12">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-6 border-b border-gray-200 pb-2">
                  Key Implementations
                </span>
                <div className="flex flex-col gap-8">
                  {exp.projects.map((proj, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <h5 className="text-md font-bold text-[#111111]">
                        — {proj.name}
                      </h5>
                      <p className="text-sm text-gray-600 leading-relaxed pl-5 border-l-2 border-gray-200 ml-1">
                        {proj.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="mb-12">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-6 border-b border-gray-200 pb-2">
                  Business Impact
                </span>
                <ul className="flex flex-col gap-4 list-disc list-inside text-sm text-gray-700 leading-relaxed font-medium">
                  {exp.impact.map((point, idx) => (
                    <li key={idx} className="pl-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-6 border-b border-gray-200 pb-2">
                  Technologies Used
                </span>
                <TechTags tags={exp.techStack} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
