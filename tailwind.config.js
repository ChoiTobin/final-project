module.exports = {
  // purge 배열을 변경해 줍니다.
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    fontSize: {
      H1: "20px",
      H2: "16px",
      H3: "12px",
      T1: "20px",
      T2: "16px",
      T3: "12px",
      B1: "32px",
      B2: "16px",
      B3: "12px",
    },
     extend: {},
   },
   variants: {
     extend: {
      
     },
   },
   plugins: [],
 }