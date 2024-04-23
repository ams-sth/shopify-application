/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "567px",
      md: "768px",
      lg: "904px",
      xl: "1000px",
      "2xl": "1100px",
    },
    
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", "serif"],
        georgia: ["Georgia", "serif"],
      },
      container: {
        center: true,
        padding: "0.1rem",
      },
      backgroundImage:{
        firstSlideBg:'url("./assets/images/FirstSlide.jpg")',
        searchBg:'url("./assets/images/search/background.jpg")'
      }
    },
  },
};
