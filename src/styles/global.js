import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;
    --gray100: #f4f6fc;
    --gray300: #a8a8b3;
    --gray700: #323238;
    --gray800: #29292e;
    --gray850: #1f2729;
    --gray900: #121214;
    --secondary: #f72d5f;
    --primary: #8b96ff;
    --default: rgba(0,102,153,0.75);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75% !important;
      height: 100%;
      min-height: 100%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5% !important;
      height: 100%;
      min-height: 100%;

    }
  }

  body, html {
    background: var(--gray100);
    color: var(--gray850);
    -webkit-font-smoothing: antialiased;
    height: 100%;
    min-height: 100%;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
