/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'patternIntro': 'url(/images/bg-pattern-intro-desktop.svg)'
      },
      minHeight:{
        'alturaIntro':'600px'
      },
      borderRadius:{
        '4xl':'6rem'
      },
      height:{
        '36rem': '36rem'
      },
      screens: {
        'h-phone': '400px'
      }
    },
  },
  plugins: [],
}

