import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(to top, rgba(0,0,0, 0.1), rgba(0,102,153,0.75));
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 12px Roboto, sans-serif;
  }

  a {
    color: #0d2344;
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }
`;
