import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import colors from 'styles/colors'
import { Container } from 'styles/uiElements'

const Marquee = ({ children, loaded }) => {

  const [translate, setTranslate] = useState(0)
  const [innerRef, setInnerRef]   = useState(null)

  useEffect(() => {
    if (innerRef && loaded) {
      const innerRect = innerRef.getBoundingClientRect()
      const width = innerRect.width
      const translate = width / 2
  
      setTranslate(translate)
    }
  }, [innerRef, loaded])

  return (
    <Wrapper>
      <Blur/>
      <Blur1/>
      <Inner ref={ref => setInnerRef(ref)} translate={translate}>
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
`

const Blur1 = styled(Blur)`
  transform: rotate(180deg);
  right: unset;
  left: 0;
`

const marqueeEffect = (x) => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-${x}px);
  }
`

const Inner = styled.div`
  will-change: transform;
  animation: ${props => marqueeEffect(props.translate)} 15s linear infinite;
  display: flex;
  align-items: center;
  white-space: pre;
  background-color: ${colors.black};
  width: fit-content;
`
