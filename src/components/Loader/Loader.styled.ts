import styled, { keyframes } from "styled-components";

const dotFlashing = keyframes`
  0% {
    background-color: #9880ff;
  }
  50%,
  100% {
    background-color: #ebe6ff;
  }
`;

export const LoaderStyled = styled.div`
  position: relative;
  margin: auto;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: ${dotFlashing} 1s infinite linear alternate;
  animation-delay: 0.5s;

  :before,
  :after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  :before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: ${dotFlashing} 1s infinite alternate;
    animation-delay: 0s;
  }

  :after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: ${dotFlashing} 1s infinite alternate;
    animation-delay: 1s;
  }
`;
