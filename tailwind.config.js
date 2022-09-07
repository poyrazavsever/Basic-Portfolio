/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#F4EEFF",
        seondary:"#DCD6F7",
        tert:"#A6B1E1",
        fourth:"#424874"
      }
    },
  },
  plugins: [],
}