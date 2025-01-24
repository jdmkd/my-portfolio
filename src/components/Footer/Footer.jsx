"use client"
import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <section className='py-[.5rem] bg-slate-900/50'>
      <div className='flex flex-row justify-center text-[1.1rem]'>
        <h1 id='currentYear'>© {currentYear} All rights reserved</h1>
      </div>
    </section>
  );
}

export default Footer;
