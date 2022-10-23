import styled from "styled-components";
import background from "../../assets/imgsb/pexels-emre-can-acer-2079451.jpg";

export const HomeDiv = styled.div`
  width: 100%;
  height: 100vh;
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
 
  .tittle {
    font-weight: 900;
    color: #ffffff;
  }
`;
