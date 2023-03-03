/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "80px",
    },
    extend: {
      colors: {
        primary: "#F0611D",
        secondary: "#252525",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["open sans", "sans-serif"],
        heading: ["montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
