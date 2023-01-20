/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.{html,js}"],
  theme: {
    extend: {
      // backgroundImages
      backgroundImage: {
        'stars': "url('../images/bg-stars.svg')",
        'mountains': "url('./images/pattern-hills.svg')",
      },
      // background size 
      backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100%',
      '16': '4rem',
    },

    // letter spacing 
    letterSpacing: {
      widest: '.3em',
    },

    // media quries
       screens: {
      'sm': {'max': '720px'},
      // => @media (max-width: 639px) { ... }
      'tb': {'min': '721px', 'max': '1290px'},
      // => @media (min-width: 768px and max-width: 1023px)
      'md': {'min': '722px'},
      // => @media (min-width: 768px) { ... }
    },

        // font family
    fontFamily:{
      'Red-Hat': ['Red Hat Text'],
    },
    
    // padding 
    padding: {
        '3%': '3%',
        '5%': '5%',
        '7%': '7%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
      },
       margin: {
        '3%': '3%',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
      },
      width: {
         '3%': '3%',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
      },
    // colors 
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Grayish-blue': 'hsl(237, 18%, 59%)',
       'soft-red': 'hsl(345, 95%, 68%)',
       'Dark-desaturated-blue': 'hsl(236, 21%, 26%)',
       'Very-dark-blue': 'hsl(235, 16%, 14%)',
       'mostly-black': 'hsl(234, 17%, 12%)'
    },
    },
  },
  plugins: [],
}
