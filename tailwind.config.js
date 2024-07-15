/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-dark": "#000000",
        "custom-yellow":"#c8a97e",
        "fff":"#243545"      },
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
