import styled from "styled-components";

export const RoutinesDiv = styled.div`
  width: 100%;
  padding-top: 2rem;
  height: 100vh;
  display: flex;
  font-size: 0.9em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  gap: 3%;

  .play {
    color: #db202c;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
  }

  .elemsButtons {
    display: flex;
    gap: 1rem;
    flex-direction: row;
  }

  .buttonElem {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: red;
    border: none;
  }

  .inputButton::placeholder{
    font-family: 'Inter', sans-serif;
  }
  .elemsBooks {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .ulList {
    display: flex;
    width: 90%;
    gap: 2rem;
  }

  .tempError {
    color: #db202c;
  }
  .temp {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
