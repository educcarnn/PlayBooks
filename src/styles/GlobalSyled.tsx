import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  body{
    font-family: 'Inter', sans-serif;
    border: none;
  
    box-sizing: border-box;
    button{
      border: none;
    }
    li{
      list-style: none;
    }
  }

`;
