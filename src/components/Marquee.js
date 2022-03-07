import React, { useRef, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import colors from 'styles/colors'

const Marquee = ({ children }) => {

  const [translate, setTranslate] = useState(0)

  const innerRef = useRef(null)

  useEffect(() => {
    const innerRect = innerRef.current.getBoundingClientRect()
    const width = innerRect.width
    const translate = width / 2

    setTranslate(translate)
  }, [])

  return (
    <Wrapper>
      <Blur/>
      <Blur1/>
      <Inner ref={innerRef} translate={translate}>
        {children}
      </Inner>
    </Wrapper>
  )
}

export default Marquee

const Wrapper = styled.div`
  width: 100%;
  border-style: solid;
  border-width: 2px;
  border-color: ${colors.white};
  overflow: hidden;
  position: relative;

  border-radius: 2.524vw;
  box-shadow: 0vw 0vw 0.253vw 0.051vw ${colors.white};
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
