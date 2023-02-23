/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lavand100: "#f4ecf4",
        lavand200: "#e7d5e7",
        lavand300: "#cca8cd",
        lavand400: "#bf91c0",
        lavand500: "#bf91c0",
        lavand600: "#b17bb3",
        lavand700: "#a464a6",
        lavand800: "#915492",
        lavand900: "#915492",
        primary: "#784c4f",
        azul: "#62B7E3",
        verde: "#76B655",
        rosa: "#F3B5D1",
        marinho: "#0079BE"
      },
      fontFamily: {
        'principal': ['Peppa Pig'],
      },

      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 5s linear infinite',
        'pulse-slow2': 'pulse 8s linear infinite',
      }
      


    },
  },
  plugins: [],
}
