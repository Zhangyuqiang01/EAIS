/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  
    './components/**/*.{js,ts,jsx,tsx}', 
    './app/**/*.{js,ts,jsx,tsx}',      
  ],
  theme: {
    extend: {
      colors: {
        "black-100": "#2b2c35",   
        "EAIS-green": '#1bb97a',  
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
