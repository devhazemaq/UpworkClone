'use client'

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.5s;
  .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop{
    background: white;

  }
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden; 
}

/* body {
  background: $ {theme.colors.backgroundPrimary};
} */

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyle;
