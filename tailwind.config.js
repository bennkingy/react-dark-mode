/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
     extend: {
        colors: {
          'custom-primary': '#BAA333',
          'custom-secondary':'#BAA000',
        }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
