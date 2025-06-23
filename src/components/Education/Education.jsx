import React from 'react'
import Table from './Table.jsx'

const Education = () => {
  return (
    <section className="relative flex justify-center items-center py-4 px-1 bg-transparent" id="education">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fill="#222" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="py-6 px-4 flex flex-col items-center">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight text-white drop-shadow-lg">Education</h3>
            {/* <p className="text-base sm:text-lg text-gray-200 mb-2 font-medium">
              My academic journey, focused on computer science and technology, has equipped me with a strong foundation in web development, problem-solving, and innovation.
            </p> */}
          </div>
          <Table />
        </div>
      </div>
    </section>
  )
}

export default Education
