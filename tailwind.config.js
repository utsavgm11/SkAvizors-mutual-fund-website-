/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
       colors: {
        navyBlue: '#0B2447',
        'navyBlue-dark': '#08306B'
    },
     screens: {
        'custom-xl': '1265px',
      }
  },
  plugins: [],
}
}
