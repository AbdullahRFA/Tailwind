/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // instead of "*", this ensures all HTML files are scanned
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [], // fixed typo: "Plugins" → "plugins"
  corePlugins: {
    filter: false, // fixed typo: "corePlagins" → "corePlugins"
  },
};