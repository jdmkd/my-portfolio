import React from 'react'
import "../../css/styles.css"

const Hero = () => {
  return (
    <>
    <div className="section-hero mx-[1rem] px-[1rem] sm:px-[4rem]  top-[10rem] relative " id="home">
        <h1 className='text-[2rem] sm:text-[3rem] md:text-[4rem]' >Hi 👋🏻 I&apos;m <span className='hover:underline'>Dinesh Harish Kumar</span></h1>
        {/* 🚀 */}
        <h1 className='hero-skill-heading t-gradient1 text-[1.8rem] sm:text-[2.3rem] md:text-[2.8rem] transition-transform' data-text="">Full-Stack Developer </h1>
        <h1 className="hero-skill-heading t-gradient5 text-[1.5rem] sm:text-[2.3rem] md:text-[2.8rem]" data-text="">    
          <span className='hero-skill-heading t-gradient2 text-[1.8rem] sm:text-[2.3rem] md:text-[2.8rem] pr-4 transition-transform'>
            & 
          </span> 
          <span className=' t-gradient4 text-[1.5rem] hover:underline sm:text-[2.3rem] md:text-[2.8rem] transition-transform'>
              Machine Learning Enthusiast
          </span> 
        </h1>
        <h3 className="pt-[1.5rem] text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] transition-transform" data-text="">
              Skilled in Next.js, React.js, Node.js, Tailwind CSS || Django, Django REST Framework, SQL. Built several projects focusing on responsive, scalable, and API-driven web applications. Passionate about problem-solving and continuous learning.

        </h3>
    </div>
    </>
  )
}

export default Hero