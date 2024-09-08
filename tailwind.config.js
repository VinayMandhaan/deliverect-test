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
    },
  },
  plugins: [],
}

