/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar_color: 'rgb(39 39 47)',
        logo_color: 'rgb(141 141 145)'
      }
    },
  },
  plugins: [],
}

