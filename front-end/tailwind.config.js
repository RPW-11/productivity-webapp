/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: "#17252A",
        secondary: "#2B7A78",
        line: "#DEF2F1"
        
      }
    },
  },
  plugins: [],
}