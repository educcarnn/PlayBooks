import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  body{
    font-family: 'Inter', sans-serif;
    border: none;
    scroll-behavior: smooth;
    box-sizing: border-box;

    :target {
    scroll-margin-top: .8em;
    }
    button{
      border: none;
      cursor: pointer;
    }
    li{
      list-style: none;
    }
  }

`;
