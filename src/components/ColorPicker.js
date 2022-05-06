import React, { useContext, useState, useCallback } from 'react'
import styled from 'styled-components'
import gsap from 'gsap/all'

import { CursorContext, PrimaryColorContext } from 'components/Providers'

import colors from 'styles/colors'
import { Container } from 'styles/uiElements'
import media from 'styles/media'

const ColorPicker = () => {

  const cursor = useContext(CursorContext)
  const primaryColor = useContext(PrimaryColorContext)

  const [selectorRef, setSelectorRef] = useState(null)
  const [wrapperRef, setWrapperRef] = useState(null)

  const generateSnap = useCallback(() => {
    let rect = wrapperRef.getBoundingClientRect()
    let pxVal = rect.height / 5
    let snap = []

    for (let i = 0; i < 5; i++) {
      snap.push(Number((i * pxVal).toFixed(3)))
    }

    return snap
  }, [wrapperRef])

  const moveSelector = useCallback((index) => {
    const snap = generateSnap()

    gsap.to(selectorRef, {
      top: snap[index]
    })
  }, [selectorRef, generateSnap])

  const setActiveColor = useCallback((index) => {
    moveSelector(index)

    switch(index) {
      case 0:
        primaryColor.setState(colors.purple)
        break;
      
      case 1:
        primaryColor.setState(colors.teal)
        break;

      case 2:
        primaryColor.setState(colors.yellow)
        break;

      case 3:
        primaryColor.setState(colors.red)
        break;

      default:
        break;
    }
  }, [primaryColor, moveSelector])

  return (
    <Wrapper ref={ref => setWrapperRef(ref)}>
      <Selector 
        ref={ref => setSelectorRef(ref)}
      />

      <Color 
        onClick={() => setActiveColor(0)} 
        onMouseEnter={() => cursor.setState('hover')}
        onMouseLeave={() => cursor.setState('')}
      >
        PURPLE
      </Color>
      <Color 
        onClick={() => setActiveColor(1)} 
        onMouseEnter={() => cursor.setState('hover')}
        onMouseLeave={() => cursor.setState('')}
      >
        BLUE
      </Color>
      <Color 
        onClick={() => setActiveColor(2)} 
        onMouseEnter={() => cursor.setState('hover')}
        onMouseLeave={() => cursor.setState('')}
      >
        YELLOW
      </Color>
      <Color 
        onClick={() => setActiveColor(3)} 
        onMouseEnter={() => cursor.setState('hover')}
        onMouseLeave={() => cursor.setState('')}
      >
        RED
      </Color>
      <Color 
        onClick={() => setActiveColor(4)}
        onMouseEnter={() => cursor.setState('hover')}
        onMouseLeave={() => cursor.setState('')}
      ></Color>
    </Wrapper>
  )
}

export default ColorPicker

const Wrapper = styled(Container)`
  height: 100%;
  overflow: hidden;
  position: relative;

  width: 10vw;

  ${media.mobile} {
    width: 20vw;
  }
`

const Selector = styled.div`
  position: absolute;
  z-index: 1;
  cursor: none;
  background: ${colors.white};
  width: 100%;
  height: 20%;
  left: 0;
  top: 0;
`

const Color = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Ofform;
  background-color: ${colors.black};
  color: ${colors.white};
  transition: 500ms;
  mix-blend-mode: difference;

  width: 100%;
  height: 20%;

  font-size: 1.5vw;

  ${media.mobile} {
    font-size: 3vw;
  }
`
