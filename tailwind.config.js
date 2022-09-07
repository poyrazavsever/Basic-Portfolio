/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate : {
        '360' : '360deg'
      },
      fontSize : {
        '10xl' : "8rem",
        '11xl' : "9rem",
        '12xl' : "10rem",
        '131xl' : "11rem",
      }
    },
  },
  plugins: [],
}