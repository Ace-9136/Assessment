/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        custom: {
          'cyanBlue': '#8fcbd3', // Replace with your hex color code
        },
      },
    },
  },
  plugins: [],
}