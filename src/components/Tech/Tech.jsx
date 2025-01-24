import Image from 'next/image'
import React from 'react'

import { techSkills } from '../../constants/constants.js'


const Tech = () => {
  return (
    <>
    {/* <!-- section: technologies --> */}
    <div className="section-technologies" id="tech">
        <div className="section-headings">
            <h1 className="heading-stroke-only">Technologies</h1>
            <h3 className='text-[3rem] font-bold'>We use</h3>
        </div>

        <div className="px-[2rem] lg:px-[8rem] mb-5 grid grid-flow-row grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 lg:gap-[4rem] justify-center items-center" >
        {techSkills.map((item, index) => (
            <div key={index} className='py-[1.5rem] lg:py-[2rem] px-[1rem] flex justify-center border border-gray-900/50 hover:border-gray-900/80 rounded-xl bg-slate-900/40 hover:bg-slate-900/90 transition-all text-white' >
                <Image src={item.imageUrl} alt="img" width={100} height={100} className="tech-icon-img"/>
            </div>
        ))}
        </div>
    </div>
    {/* <!-- section: technologies --> */}
    
    </>
  )
}

export default Tech