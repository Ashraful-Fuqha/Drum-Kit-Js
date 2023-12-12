/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/script.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'image': "url('../../images/background.jpg')",
      }
    },
  },
  plugins: [],
}

