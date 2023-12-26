// Loader.styles.js
import styled, { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const pulseOut = keyframes`
  from {
    stroke: #EB8B2D;
  }
  to {
    stroke: #EB8B2D;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Poly = styled.svg`
  animation: ${rotate} 1s infinite;
  transition: all ease 1s;
  transition-property: transform;
  animation-timing-function: linear;
  transform: translateY(-20px);
  width: 100px; 
  height: 100px; 
`;

export const Polygon = styled.polygon`
  fill: #FFFFFF;
  stroke: #EB8B2D;
  stroke-width: 10; 
  stroke-miterlimit: 10;
  transition: all ease 1s;
  transition-property: transform;
  animation-timing-function: ease;

  &:nth-child(1) {
    animation: ${pulseOut} 1s infinite;
  }
`;
