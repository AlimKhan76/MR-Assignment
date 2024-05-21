/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "montserrat": ["montserrat"]
    },

    extend: {
      backgroundImage: {
        'zaika': "url('assests/bg-zaika.png')",
        'bgFAQs': "url('assests/backgroundFAQs.svg')",
      }
    },
  },
  plugins: [],
}