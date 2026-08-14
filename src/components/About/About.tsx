import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#000000] text-white py-20 sm:py-32 border-b border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/3 shrink-0">
            <span className="text-sm lg:text-base uppercase tracking-widest text-zinc-500 font-bold mb-4 block">
              About Me
            </span>
            <h3 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white tracking-tighter leading-[1.1]">
              Performance.
              <br />
              Scalability.
              <br />
              Reliability.
            </h3>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-8 text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed font-medium">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-[1.4]">
              Full Stack Developer focused on building production-ready B2B,
              SaaS, and ecommerce systems.
            </p>
            <div className="w-12 h-1 bg-white/20"></div>
            <p>
              I build across the stack with Node.js, Django REST Framework,
              React, Next.js, PostgreSQL, MongoDB, and Redis. My work goes
              beyond implementing features. I focus on making systems faster,
              more reliable, and scalable under real-world usage.
            </p>
            <p>
              I’ve taken search APIs from 4.2s to 620ms on cache misses, with
              cache hits responding in 1–2ms. I’ve reduced frontend payloads by
              84% and improved inventory APIs from around 9s to 300–700ms on
              cache misses, with cache hits responding in 1–4ms.
            </p>
            <p>
              I care about the details behind a fast product: efficient database
              queries, caching strategies, API architecture, frontend
              performance, and clean system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
