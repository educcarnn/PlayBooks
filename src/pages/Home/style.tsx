import styled from "styled-components";
import background from "../../assets/imgsbackground/pexels-julie-carver-8473699.jpg";

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

  .text{
    font-weight: 700;
    color: white;
  }


  .button {
    padding: 16px 32px;
    border-radius: 30px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .button, .class{
    color: #ff0202;
  }
  
  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
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

  .labelItem{
    background: #fcfcfc;
    border: none;
  }

  .showBooks{
    padding: 8px;
    border-radius: 24px;
    color: #ff0000;
    border: none;
    font-weight: 700;
  }
  .labelItem::placeholder{
    font-family: 'Inter', sans-serif;
  }

  .ButtonAction {
    color: #ff0000;
    padding: 8px 32px;
    font-size: 16px;
    background: white;
    text-decoration: none;
    border-radius: 30px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .elements {
    display: flex;
    flex-direction: row;
    padding-top: 0.5rem;
    gap: 1%;
  }
`;
