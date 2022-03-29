import React, { useEffect, useState, useContext, useCallback } from 'react'
import styled from 'styled-components'
import gsap, { Draggable, InertiaPlugin } from 'gsap/all'
import { PrimaryColorContext, CursorContext } from 'components/Providers'

import colors from 'styles/colors'
import { Container } from 'styles/uiElements'

import Marquee from 'components/Marquee'

import PurpleGIF from 'images/memoji-purple.gif'
import YellowGIF from 'images/memoji-yellow.gif'
import BlueGIF from 'images/memoji-blue.gif'
import RedGIF from 'images/memoji-red.gif'

gsap.registerPlugin(Draggable, InertiaPlugin)

const About = () => {

  const primaryColor = useContext(PrimaryColorContext)
  const cursor = useContext(CursorContext)

  const [memojiSrc, setMemojiSrc] = useState(PurpleGIF)
  const [selectorRef, setSelectorRef] = useState(null)
  const [colorPickerRef, setColorPickerRef] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [activeColor, setActiveColor] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  const generateSnap = useCallback(() => {
    let rect = colorPickerRef.getBoundingClientRect()
    let pxVal = rect.height / 5
    let snap = []

    for (let i = 0; i < 5; i++) {
      snap.push(Number((i * pxVal).toFixed(3)))
    }

    return snap
  }, [colorPickerRef])

  useEffect(() => {
    switch(activeColor) {
      case 0:
        primaryColor.setState(colors.purple)
        setMemojiSrc(PurpleGIF)
        break;
      
      case 1:
        primaryColor.setState(colors.teal)
        setMemojiSrc(BlueGIF)
        break;

      case 2:
        primaryColor.setState(colors.yellow)
        setMemojiSrc(YellowGIF)
        break;

      case 3:
        primaryColor.setState(colors.red)
        setMemojiSrc(RedGIF)
        break;

      default:
        break;
    }
  }, [activeColor, primaryColor])

  useEffect(() => {
    if (selectorRef && colorPickerRef) {

      const snap = generateSnap()

      const drag = Draggable.create(selectorRef, {
        type: 'top',
        inertia: true,
        zIndexBoost: false,
        snap,
        onThrowComplete: () => {          
          const index = snap.indexOf(drag[0].y)
          setActiveColor(index)
        }
      })

      drag[0].vars.cursor = 'none'

    }
  }, [selectorRef, colorPickerRef, generateSnap])

  return (
    <Wrapper>
      <Left>
        <Title primaryColor={primaryColor.state}>\\About Me</Title>
        <Text>
          I'm baby snackwave fixie swag, cornhole normcore raw 
          denim bicycle rights pork belly. Man braid tacos 
          sartorial vinyl neutra 3 wolf moon artisan, succulents 
          jean shorts. Franzen tote bag you probably haven't heard 
          of them waistcoat crucifix salvia seitan. You probably 
          haven't heard of them whatever bespoke dreamcatcher venmo 
          YOLO four loko tattooed polaroid selvage pabst.
        </Text>
        <Text>
          I'm baby snackwave fixie swag, cornhole normcore raw denim 
          bicycle rights pork belly. Man braid tacos sartorial vinyl 
          neutra 3 wolf moon artisan, succulents jean shorts. Franzen 
          tote bag you probably haven't heard of them waistcoat 
          crucifix salvia seitan. You probably haven't heard of them 
          whatever bespoke dreamcatcher venmo YOLO four loko tattooed 
          polaroid selvage pabst.
        </Text>
        <Text>
          [CURRENT ROLE]..........................................Creative Developer
        </Text>
        <Text>
          [COMPANY]................................................Reform Collective
        </Text>
      </Left>
      <Right>
        <MarqueeWrapper>
          <Marquee loaded={loaded}>
            <RoleMarquee primaryColor={primaryColor.state}>CREATIVE WEB DEVELOPER CREATIVE WEB DEVELOPER </RoleMarquee>
          </Marquee>
        </MarqueeWrapper>

        <MarqueeWrapper>
          <Marquee loaded={loaded}>
            <LocationMarquee primaryColor={primaryColor.state}>SALT LAKE CITY, UTAH SALT LAKE CITY, UTAH </LocationMarquee>
          </Marquee>
        </MarqueeWrapper>

        <Row>
          <MemojiWrapper>
            <Memoji src={memojiSrc} alt="its me"/>
          </MemojiWrapper>

          <ColorPicker ref={ref => setColorPickerRef(ref)}>
            <Selector 
              ref={ref => setSelectorRef(ref)}
              onMouseEnter={() => cursor.setState('hover')}
              onMouseLeave={() => cursor.setState('')}
            />

            <Color >PURPLE</Color>
            <Color >BLUE</Color>
            <Color >YELLOW</Color>
            <Color >RED</Color>
            <Color ></Color>
          </ColorPicker>
        </Row>
      </Right>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.section`
  width: 100%;
  display: flex;

  height: 50vw;
  padding-left: 3.535vw;
  padding-right: 3.535vw;
`

const Left = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;

  width: 45.71vw;
  padding-top: 2.53vw;
  padding-left: 3.03vw;
  padding-right: 3.03vw;
  margin-right: 1.7vw;
`

const Title = styled.h5`
  color: ${colors.black};
  background: ${props => props.primaryColor};
  font-family: MD IO;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.02em;
  width: fit-content;
  transition: 500ms;

  font-size: 1.21vw;
  margin-bottom: 0.81vw;
`

const Text = styled.p`
  color: ${colors.white};
  text-shadow: 0vw 0vw 0.25vw #C1C0FF;
  font-family: MD IO;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: -0.02em;

  font-size: 0.91vw;
  margin-bottom: 2.02vw;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  width: 45.71vw;
`

const MarqueeWrapper = styled.div`
  margin-bottom: 1.7vw;
`

const MarqueeInner = styled.div`
  font-family: Ofform;
  font-style: normal;
  font-weight: 400;
  line-height: 70%;
  letter-spacing: 0.02em;

  font-size: 4.85vw;
  padding-top: 2.02vw;
  padding-bottom: 2.02vw;
`

const RoleMarquee = styled(MarqueeInner)`
  -webkit-text-stroke-color: ${props => props.primaryColor};
  -webkit-text-stroke-width: 2px;
  -webkit-text-fill-color: transparent;
  transition: 500ms;
` 

const LocationMarquee = styled(MarqueeInner)`
  color: ${props => props.primaryColor};
  transition: 500ms;
`

const MemojiWrapper = styled(Container)`
  position: relative;
  background: ${colors.black};
  height: 100%;
  overflow: hidden;
  flex-grow: 1;

  margin-right: 1.7vw;
`

const Memoji = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  mix-blend-mode: screen;
`

const ColorPicker = styled(Container)`
  height: 100%;
  overflow: hidden;
  position: relative;

  width: 10vw;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  height: 32vw;
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
  pointer-events: none;
  font-family: Ofform;
  background-color: ${colors.black};
  color: ${colors.white};
  transition: 500ms;
  mix-blend-mode: difference;

  width: 100%;
  height: 20%;

  font-size: 1.5vw;
`