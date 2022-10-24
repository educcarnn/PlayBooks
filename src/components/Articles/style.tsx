import styled from "styled-components";

export const ArticlesUl = styled.ul`
  display: flex;
  gap: 5%;
  flex-direction: row;
  justify-content: center;

  
  @media(max-width: 800px){
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
