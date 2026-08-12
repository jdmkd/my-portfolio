import React from "react";

const Marquee = () => {
  const words = [
    "ACCURACY",
    "✦",
    "PRECISION",
    "✦",
    "PERFECTION",
    "✦",
    "SIMPLICITY",
    "✦",
    "MINIMALISM",
    "✦",
  ];

  // We repeat the array multiple times so it fills ultra-wide screens easily
  const repeatingWords = [...words, ...words, ...words, ...words];

  return (
    <section className="relative w-full bg-[#000000] overflow-hidden py-12 md:py-20 border-y border-white/10 flex flex-col justify-center select-none z-10">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="flex w-max animate-scroll group">
        {/* First Set */}
        <div className="flex whitespace-nowrap shrink-0 pr-8">
          {repeatingWords.map((word, i) => (
            <span
              key={i}
              className={`text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight mx-4 sm:mx-8 ${
                word === "✦"
                  ? "text-zinc-500 font-normal"
                  : "text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-300"
              }`}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Second Set (Duplicate for seamless loop) */}
        <div className="flex whitespace-nowrap shrink-0 pr-8">
          {repeatingWords.map((word, i) => (
            <span
              key={`dup-${i}`}
              className={`text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight mx-4 sm:mx-8 ${
                word === "✦"
                  ? "text-zinc-500 font-normal"
                  : "text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-300 to-zinc-300"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
