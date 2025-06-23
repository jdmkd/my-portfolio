"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const TITLES = [
  'Full Stack Developer',
  'Machine Learning Enthusiast',
  'UI/UX Designer',
  'Open Source Contributor',
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % TITLES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[45rem] pt-24 pb-12 px-4 sm:px-8 bg-black text-white overflow-hidden"
      id="home"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Hi <span className="inline-block">👋🏻</span> I&apos;m <span className="underline decoration-black decoration-4">Dinesh Harish Kumar</span>
        </h1>
        <div className="h-12 sm:h-16 flex items-center justify-center mb-2">
          <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-black transition-all duration-700 ease-in-out block min-w-[220px]">
            {TITLES[currentTitle]}
          </span>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-2 font-medium">
          Aspiring Full Stack Developer with a strong foundation in frontend and backend technologies. Skilled in JavaScript, Python, Java,
          and SQL, with hands-on experience using frameworks like React.js, Next.js, Django, Spring, Spring Boot and Node.js. Experienced
          in building responsive user interfaces, developing RESTful APIs, and working with both relational and NoSQL databases. Actively
          enhancing skills through personal and academic projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="projects" scroll={false}>
            <button className="px-7 py-3 rounded-full bg-white text-black font-bold border-2 border-black hover:bg-gray-400 hover:text-black transition-all duration-200">
              View Projects
            </button>
          </Link>
          <Link href="/Dinesh_kumar_resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="px-7 py-3 rounded-full bg-white text-black font-bold border-2 border-black hover:bg-gray-400 hover:text-black transition-all duration-200">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;