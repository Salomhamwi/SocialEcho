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
    font-family: 'Arial', sans-serif; /* Fallback font */
  }

  /* Use a specific font for Instagram-like feel */
  /* Instagram's font is proprietary, so use a similar alternative */
  .instagram-font {
    font-family: 'Your Chosen Instagram-like Font', 'Arial', sans-serif;
  }

  /* Apply a background color */
  body {
    background-color: #f7f7f7;
  }

  /* Define a container for the content */
  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  /* Add a box shadow for a card-like effect */
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  /* Style links to resemble social media buttons */
  .social-link {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    text-decoration: none;
    color: #fff;
    background-color: #3b5998; /* Facebook blue */
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4267b2; /* Facebook dark blue on hover */
    }
  }

  /* Additional styling specific to your social media content */
  /* Add your own specific styles here */

`;

export default GlobalStyles;
