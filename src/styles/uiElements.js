import styled, { keyframes } from 'styled-components'
import colors from 'styles/colors'

import noise from 'images/noise.png'

export const Container = styled.div`
  border: 2px solid ${colors.white};
  box-sizing: border-box;
  border-radius: 2.525vw;
  box-shadow: 0vw 0vw 0.505vw #DCE8FF;
`

const grain = keyframes`
  0%, 100% {transform: translate(0,0)}
  10% {transform: translate(-5rem,-5rem)}
  30% {transform: translate(3rem,-8)}
  50% {transform: translate(10rem,10rem)}
  70% {transform: translate(9rem,3rem)}
  90% {transform: translate(-1rem,7rem)}
`;

export const Noise = styled.div`
  animation: ${grain} 3s steps(6) infinite;
  width: calc(100% + 20rem);
  height: calc(100% + 20rem);
  background-position: 50%;
  position: absolute;
  z-index: 10;
  pointer-events: none;
  left: -10rem;
  top: -10rem;
  background-image: url(${noise});
  background-size: 30% 30%;
`;