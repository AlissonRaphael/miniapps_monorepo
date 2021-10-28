import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ebd6d7;
    --shape: #ffffff;
  
    --dark-salmon: #f09b93;
    --light-yellow: #e9dd8a;
    --light-purple: #f9ebd9;

    --green: #33cc95;
    /* filter: invert(58%) sepia(93%) saturate(321%) hue-rotate(107deg) brightness(97%) contrast(88%) */
    --red: #e52e4d;
    /* filter: invert(59%) sepia(92%) saturate(2540%) hue-rotate(324deg) brightness(96%) contrast(111%) */

    --text-title: #363f5f;
    --text-body: #898e9e;
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
