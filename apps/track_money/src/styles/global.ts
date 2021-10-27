import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ebebeb;
    --shape: #ffffff;
  
    --dark-blue: #001B41;
    --medium-blue: #0C5471;
    --light-blue: #2C92A9;

    --green: #33cc95;
    --red: #e52e4d;

    --text-title: #363f5f;
    --text-body: #969cb3;
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
