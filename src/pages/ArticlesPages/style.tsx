import styled from "styled-components";

export const ArticlesDiv = styled.div`
      

  color: black;
  height: 100vh;

  .elem{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img {
    width: 50%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    object-fit: cover;
  }
  .ArticlesLi {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 0.9em;
    font-weight: 700;
    gap: 2%;
    height: 100vh;
    align-items: center;
  }
`;

export const DivElem = styled.div`
    font-weight: 900;
    color: #db202c;
    cursor: pointer;
`