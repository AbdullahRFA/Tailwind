/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable class-based dark mode
  content: ["./*.html"], // adjust if files are in subfolders
  theme: {
    extend: {
      screens: {
        sm: "700px",
      },
      spacing: {
        "khan-10": "100px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
  corePlugins: {
    filter: false,
  },
};