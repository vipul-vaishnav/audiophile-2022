/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Manrope', 'sans-serif']
      },
      screens: {
        'xs': '476px'
      }
    },
  },
  plugins: [],
}
