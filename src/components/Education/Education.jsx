import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { educationDetails } from '../../constants/constants.js'
import Table from './Table.jsx'

const Education = () => {
  return (
    <>
    <section>
        <div className="section-portfolio" id="education">
            <div className="section-headings">
                {/* <h1 className="heading-stroke-only">Education</h1> */}
                <h3 className='text-[3rem] font-bold'>Education</h3>
            </div>


            <Table />
            
            {/* <div className="text-left mx-[1rem] sm:mx-[2rem] lg:mx-[3rem] xl:mx-[8rem] px-[1rem] py-[1rem] grid grid-cols-1 sm:grid-cols-2  gap-[2rem]">
                <Link className=" py-[2rem] px-[2rem] border border-gray-700/70 bg-slate-900/70 shadow shadow-slate-300/20 rounded-md" href="./html-css-projects.html">
                    <div className="flex flex-col items-start gap-[1rem]">
                        <h2 className='tracking-wide text-[1.2rem] font-semibold'>ThinkBiz Technology</h2>
                        <h2 className='tracking-wide text-[1.2rem] font-normal'>Software Developer</h2>    
                        <h3 className='tracking-wide text-[1rem] font-normal italic'>January 2022 - May 2024</h3>    

                        <p className='tracking-wide'>Spearheaded development initiatives for JERA, Japan&apos;s largest power generation company, contributing to the enhancement of critical systems that support the production of 30% of the nation's electricity.
                            Designed and implemented new features aligned with project requirements, focusing on scalable and efficient code that optimized performance.
                            </p>
                        <p className='tracking-wide'>Utilized a tech stack including React, Jest, Styled Components, TypeScript, and Context API to deliver robust solutions.
                            Conducted comprehensive code refactoring and maintenance to ensure system reliability and responsiveness.</p>
                    </div>
                </Link>
                <Link className="py-[2rem] px-[2rem] border border-gray-700/70 bg-slate-900/70 shadow shadow-slate-300/20 rounded-md" href="">
                    <div className="flex flex-col items-start gap-[1rem]">
                        <h2 className='tracking-wide text-[1.2rem] font-semibold'>Blatform.com</h2>
                        <h2 className='tracking-wide text-[1.2rem] font-normal'>Software Developer</h2>
                        <h3 className='tracking-wide text-[1rem] font-normal italic'>June 2022 - November 2022</h3>

                        <p className='tracking-wide'>Developed a custom employee management application integrating with API services, streamlining organizational operations.
                            Led the development of an NFT-based project involving integration with Metamask wallets, enhancing user interaction and functionality.</p>
                    </div>
                </Link>
                <Link className="col-span-1 sm:col-span-2  py-[2rem] px-[2rem] border border-gray-700/70 bg-slate-900/70 shadow shadow-slate-300/20 rounded-md" href="">
                    <div className="flex flex-col justify-center items-center gap-[2rem]">
                        <h2 className='tracking-wide text-[1.2rem] font-semibold'>Key Achievements</h2>
                        <h4>
                            Impactful Contributions: Delivered solutions that directly supported the operational efficiency and scalability of a major power generation company.
                            Technology Expertise: Demonstrated proficiency in React, Jest, Styled Components, TypeScript, and Context API, leveraging these technologies to build robust and scalable applications.
                        </h4>  
                    </div>
                </Link>
            </div> */}
        </div>
    </section>
    </>
  )
}


export default Education
