import React from 'react'
import styled, { keyframes } from 'styled-components'

import colors from 'styles/colors'
import { Container } from 'styles/uiElements'
import media from 'styles/media'

const Marquee = ({ children, speed }) => {
  return (
    <Wrapper>
      <Blur/>
      <Blur1/>
      <Inner speed={speed}>
        {children}
        {children}
        {children}
        {children}
      </Inner>
    </Wrapper>
  )
}

export default Marquee

const Wrapper = styled(Container)`
  width: 100%;
  overflow: hidden;
  position: relative;
  will-change: transform;
`

const Blur = styled.div`
  position: absolute;
  background: linear-gradient(270deg, ${colors.black} 0%, rgba(28, 28, 28, 0) 100%);
  height: 100%;
  top: 0;
  right: 0;
  z-index: 2;
  
  width: 8.684vw;

  ${media.mobile} {
    width: 20vw;
  }
`

const Blur1 = styled(Blur)`
  transform: rotate(180deg);
  right: unset;
  left: 0;
`

const marqueeEffect =  keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-25%);
  }
`

const Inner = styled.div`
  will-change: transform;
  animation: ${marqueeEffect} ${props => props.speed || 10}s linear infinite;
  display: flex;
  align-items: center;
  white-space: pre;
  background-color: ${colors.black};
  width: fit-content;
`
