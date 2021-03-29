import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Lato:wght@400;700&display=swap');
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;     
   }
   body {
      font-size: 100%;
      color:#222;
      background-color: #fff;
      font-family: 'Lato', sans-serif;
   }
   h1 {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 0.5rem
   }
   h2 {
      font-size: 2rem;
      margin-bottom: 0.75rem
   }
   h3 {
      font-size: 1.5rem;
      line-height: 1;
      margin-bottom: 1rem
   }
   h4 {
      font-size: 1.2rem;
      line-height: 1.2;
      margin-bottom: 1.25rem;
      font-weight: bold;
   }
   h5 {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      font-weight: bold;
   }
   h6 {
      font-size: 1rem;
      font-weight: bold;
   }
   p {
      line-height: 1.5;
      margin: 0 0 1.5 0 ; 
   }

`;

export default GlobalStyle;
