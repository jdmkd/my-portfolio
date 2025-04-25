"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import MenuIcons, { OpenCloseIcons } from "../../constants/constants";
import "../../css/styles.css";

const Navbar = () => {
  const [isFullScreenNavOpen, setIsFullScreenNavOpen] = useState(false);

  const openFullScreenNav = () => {
    const navFullScreen = document.getElementById("navFullScreen");
    navFullScreen.classList.remove("nav-fullscreen-close");
    navFullScreen.classList.add("nav-fullscreen-open");
    setIsFullScreenNavOpen(true);
  };

  const closeFullScreenNav = () => {
    const navFullScreen = document.getElementById("navFullScreen");
    navFullScreen.classList.add("nav-fullscreen-close");
    navFullScreen.classList.remove("nav-fullscreen-open");
    setIsFullScreenNavOpen(false);
  };

  return (
    <section className="fixed w-full sm:w-full top-0 z-10">
      <div className="nav-full-screen relative flex-col items-center" id="navFullScreen">
        <div className="relative flex flex-col items-center">

          <Link href="/" onClick={closeFullScreenNav} className="nav-link">HOME</Link>
          {/* <Link href="#portfolio" onClick={closeFullScreenNav} className="nav-link">WORK</Link> */}
          {/* <Link href="#about" onClick={closeFullScreenNav} className="nav-link">ABOUT</Link> */}
          <Link href="/education" onClick={closeFullScreenNav} className="nav-link">EDU</Link>
          <Link href="/skills" onClick={closeFullScreenNav} className="nav-link">SKILLS</Link>          
          <Link href="/projects" onClick={closeFullScreenNav} className="nav-link">PROJECTS</Link>
          <Link href="/resume" className="nav-link">RESUME</Link>
          <Link href="/contact-us" onClick={closeFullScreenNav} className="nav-link">CONTACT</Link>

          <div className="relative flex flex-row py-[2rem] gap-[1rem] justify-between items-center ">
            <Link href="https://www.instagram.com/jd_mkd_09/" className="social-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                fill="none"
                stroke="white"
                strokeWidth="2.5">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/dj-kumar-9a2a2b236" className="social-link" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
            </Link>
            <Link href="https://github.com/jdmkd" className="social-link" target="_blank">
              <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/></svg>
            </Link>
          </div>
        </div>
        <button className="close" onClick={closeFullScreenNav}>
          <Image src={OpenCloseIcons[0].closeIcon} width={40} height={40} alt="close"/>
          {/* close */}
        </button>
      </div>





      {/* Main Navbar */}
      <nav className="navbar py-[1rem] px-[2rem] md:px-[5rem] font-bold bg-neutral-900/90">
        <div className="flex flex-col">
          <Link href="/" onClick={closeFullScreenNav} className="">
            <h1 className="navbar-title text-[1rem] md:text-[2rem] relative w-[max-content] font-extrabold before:absolute before:inset-0 before:animate-typewriter before:bg-neutral-900/90">
              DJ</h1>
            <span className="text-[.8rem] md:text-[1rem]">FullStack Developer</span>
          </Link>
        </div>

        <div className="nav-links">
          <Link href="/" className="nav-link nav-link-active">HOME</Link>
          <Link href="/education" className="nav-link">EDU</Link>
          <Link href="/skills" className="nav-link">SKILLS</Link>
          {/* <Link href="#about" className="nav-link">ABOUT</Link> */}
          
          <Link href="/projects" className="nav-link">PROJECTS</Link>
          <Link href="/resume" className="nav-link">RESUME</Link>
          <Link href="/contact-us" className="nav-link">CONTACT</Link>
        </div>
        <button className="nav-link-btn " onClick={openFullScreenNav}>
          <Image
            src={OpenCloseIcons[0].meneIcon}
            alt="menu"
            width={100}
            height={100}
          />
          {/* open */}
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
