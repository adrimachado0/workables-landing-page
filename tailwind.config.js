/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'quest': ['Questrial'],
        'sans': ['var(--font-nordique)']
      },
      fontSize: {
        'titleWork':['150px'],
        'titleCreating':['40px'],
      },
      colors: {
        'workables-blue':['#2FBDFF'],
        'workables-pink':['#ff7582'],
      },
      spacing:{
        'faqs-h': '30.25rem',
        'faqs-w': '21.3rem'
      },
      minWidth:{
        'faqs-w':'21.3rem',
      },
      maxHeight:{
        'faqs-h':'30.25rem',
      },
      borderRadius: {
        '4xl':'30px',
        '5xl':'35px',
      }
    },
  },
  plugins: [],
}
