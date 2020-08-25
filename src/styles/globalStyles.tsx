import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  /* resetando as configurações iniciais */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* setando configurações de fonte e tamanho de tela */
  html,
  body,
  #root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
    height: 100%;
  }

  input {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
