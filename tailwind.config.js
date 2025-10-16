/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mango': ['Mango Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}