/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': '"JosefinSans"'
      },
      colors: {
        pcWhite:  '#fffefe',
        pcTan:    '#fcded3',
        pcGreen:  '#dae8e3',
        pcPink:   '#d98a8a',
        pcCoral:  '#dc585d',
        jbNeutral: '#e7e5e4'
      },
    },
  },
  plugins: [],
}
