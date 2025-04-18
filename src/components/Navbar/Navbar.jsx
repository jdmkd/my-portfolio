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
      <div className="nav-full-screen relative  flex-col items-center" id="navFullScreen">
        <div className="relative flex flex-col items-center">

          <Link href="#home" onClick={closeFullScreenNav} className="nav-link">HOME</Link>
          {/* <Link href="#portfolio" onClick={closeFullScreenNav} className="nav-link">WORK</Link> */}
          {/* <Link href="#about" onClick={closeFullScreenNav} className="nav-link">ABOUT</Link> */}
          <Link href="#education" onClick={closeFullScreenNav} className="nav-link">EDU</Link>
          <Link href="#skills" onClick={closeFullScreenNav} className="nav-link">SKILLS</Link>          
          <Link href="#projects" onClick={closeFullScreenNav} className="nav-link">PROJECTS</Link>
          <Link href="#contact" onClick={closeFullScreenNav} className="nav-link">CONTACT</Link>

          <div className="social-links">
            <Link href="#" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
            </Link>
            <Link href="#" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
            </Link>
            <Link href="#" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
            </Link>
            <Link href="#" className="social-link">
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
      <nav className="navbar py-[1rem] px-[5rem] font-bold bg-slate-900/90">
        <div className="flex flex-col">
          <h1 className="navbar-title text-[1rem] md:text-[2rem] relative w-[max-content] font-extrabold before:absolute before:inset-0 before:animate-typewriter before:bg-slate-900/80">DJ</h1>
          <span className="text-[.8rem] md:text-[1rem]">FullStack Developer</span>
        </div>

        <div className="nav-links">
          <Link href="/" className="nav-link nav-link-active">HOME</Link>
          <Link href="#education" className="nav-link">EDU</Link>
          <Link href="#skills" className="nav-link">SKILLS</Link>
          {/* <Link href="#about" className="nav-link">ABOUT</Link> */}
          
          {/* <Link href="#projects" className="nav-link">PROJECTS</Link> */}
          <Link href="#contact" className="nav-link">CONTACT</Link>
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
