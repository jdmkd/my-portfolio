import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { techSkills } from '../../constants/constants.js'

function Projectwork() {
  return (
    <section>
        <div className="section-portfolio" id="portfolio">
            <div className="section-headings">
                {/* <h1 className="heading-stroke-only">Work</h1> */}
                <h3 className='text-[3rem] font-bold'>Project work</h3>
            </div>
            <div className="section-portfolio-grid">
                <Link className="portfolio-card" href="./html-css-projects.html">
                    <Image src={techSkills[0].imageUrl} alt="img" height={100} width={100} />
                    <div className="portfolio-card-details">
                        <h4>HTML, CSS, TailwindCSS Projects</h4>
                    </div>
                </Link>
                <Link className="portfolio-card" href="">
                    <Image src={techSkills[1].imageUrl} alt="img" height={100} width={100} />
                    <div className="portfolio-card-details">
                        <h4>iNeuron Landing Page Design</h4>
                    </div>
                </Link>
                <Link className="portfolio-card" href="">
                    <Image src={techSkills[2].imageUrl} alt="img" height={100} width={100} />
                    <div className="portfolio-card-details">
                        <h4>Bill Splitting App</h4>
                    </div>
                </Link>
                <Link className="portfolio-card" href="">
                    <Image src={techSkills[3].imageUrl} alt="img" height={100} width={100} />
                    <div className="portfolio-card-details">
                        <h4>Bookmark App + Chrome Extension</h4>
                    </div>
                </Link>
            </div>

        </div>
    </section>
  )
}

export default Projectwork