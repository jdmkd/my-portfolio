import React from 'react'
import "../../css/styles.css"

const Hero = () => {
  return (
    <>
    <div className="section-hero mx-[1rem] px-[1rem] sm:px-[4rem]  top-[10rem] relative " id="home">
        <h1 className='text-[2rem] sm:text-[3rem] md:text-[4rem]' >Hi 👋🏻 I&apos;m Dinesh</h1>
        <h1 className='hero-skill-heading t-gradient3 text-[1.8rem] sm:text-[2.3rem] md:text-[2.8rem]' data-text="I MAKE">I MAKE</h1>
        <h1 className="hero-skill-heading text-[1.8rem] sm:text-[2.3rem] md:text-[2.8rem]" data-text="APPS">APPS</h1>
        <h1 className="hero-skill-heading t-gradient2 text-[1.8rem] sm:text-[2.3rem] md:text-[2.8rem]" data-text="WEBSITE">WEBSITE</h1>
    </div>
    </>
  )
}

export default Hero