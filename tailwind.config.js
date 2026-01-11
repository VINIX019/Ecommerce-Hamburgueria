/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/Assets/bg.png')" 
      }
    },
  },
  plugins: [],
}