import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

`;

export default GlobalStyle;