/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#06213c",
        secondary: "#F2F0F0",
        tertiary: "#334155",
        BorderColr: "#92CAD4"
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 100s linear infinite",
      },
      fontFamily: {
        kaisei_Decol: ['"Kaisei Decol"', "serif"],
        kanit: ['"Kanit"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
