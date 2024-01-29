// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset some default browser styles */
  body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
  }

  /* Set a global font family */
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
    font-size: clamp(16px, 2vw, 24px); 
  }

  /* Use a specific font for Instagram-like feel */
  /* Instagram's font is proprietary, so use a similar alternative */
  .instagram-font {
    font-family: 'Your Chosen Instagram-like Font', 'Arial', sans-serif;
  }

  /* Apply a background color */
  body {
    background-color: #22223b;
    color: #fff;
    overflow-x: hidden;
  }

  /* Define a container for the content */
  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: clamp(10px, 5vw, 20px);
  }

  /* Add a box shadow for a card-like effect */
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    padding: clamp(10px, 2vw, 20px);
  }


`;

export default GlobalStyles;
