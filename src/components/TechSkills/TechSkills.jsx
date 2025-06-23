import Image from 'next/image'
import React from 'react'

import { techSkillsImg } from '../../constants/constants.js'


const Tech = () => {
  return (
    <div className="relative py-8 px-4 sm:px-8 bg-gradient-to-b from-black via-neutral-900 to-black" id="skills">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow tracking-tight">
          Skills
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 md:gap-6 px-4 sm:px-0">
        {techSkillsImg.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center aspect-square bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:bg-white/20"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20">
              <Image
                src={item.imageUrl}
                alt="tech-skill"
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech