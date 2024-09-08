/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter-Regular",
        bold: "Inter-Bold",
        semibold: "Inter-Semibold",
      },
      textColor: {
        heading: '#071C4D',
        textGrey: '#838DA6'
      }
    },
  },
  plugins: [],
}

