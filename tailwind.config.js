/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#ffffff',
          dark: '#a3a3a3',
        },
        secondary: '#262626',
        accent: '#3b82f6',
      },
      animation: {
        typewriter: "typewriter 1.5s steps(20) forwards",
        wave: "wave 2.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite",
        slideIn: "slideIn 0.5s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-in forwards",
        blob: "blob 7s infinite",
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "45%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(-6deg)" },
          "75%": { transform: "rotate(4deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        slideIn: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
