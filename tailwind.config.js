/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Fredoka", "sans-serif"],
      },
      colors: {
        primary: "#fdf0d1",
        secondary: "#ef4b4b"
      }
    }
  },
  plugins: [],
};