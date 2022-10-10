const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '476px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: "#191919"
      },
      fontFamily: {
        default: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
