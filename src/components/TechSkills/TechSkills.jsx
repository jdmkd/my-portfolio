import Image from 'next/image'
import React from 'react'

import { techSkillsImg } from '../../constants/constants.js'


const Tech = () => {
  return (
    <>
    {/* <!-- section: technologies --> */}
    <div className="relative my-[2rem]" id="skills">
        <div className="text-center mb-[3rem] ">
            {/* <h1 className="heading-stroke-only">Skills</h1> */}
            <h3 className='text-[2rem] md:text-[3rem] font-bold'>Skills</h3>
        </div>

        <div className="px-[1.3rem] sm:px-[2rem] lg:px-[8rem] mb-5 grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 lg:gap-[4rem] justify-center items-center" >
        {techSkillsImg.map((item, index) => (
            <div key={index} className='py-[1.5rem] lg:py-[2rem] px-[1rem] flex justify-center border border-gray-900/50 hover:border-gray-900/80 rounded-xl bg-white/15 hover:bg-gray-900 text-white cursor-pointer transition-all duration-500 ease-in-out ' >
                <Image src={item.imageUrl} alt="img" width={100} height={100} className="tech-icon-img cursor-pointer"/>
            </div>
        ))}
        </div>
    </div>
    {/* <!-- section: technologies --> */}
    
    </>
  )
}

export default Tech