import styled from "styled-components";
import background from "../../assets/imgsb/pexels-julie-carver-8473699.jpg";

export const HomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  gap: 3%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 40em black;

  .contentItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tittle {
    font-weight: 900;
    color: #ff0000;
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 0px;
    font-size: 2em;
  }
`;
export const HeaderContent = styled.div`
      display: flex;
    flex-direction: column;
  gap: 2%;
  padding-bottom: 1rem;

  .spanRotina {
    color: #ff0000;
  }
  .elements{
    display: flex;
    flex-direction: row;
    gap: 1%;
  }
`;
