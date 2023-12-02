/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'jakarta': ['plus jakarta sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
