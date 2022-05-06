import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { CursorContext, PrimaryColorContext, InitAnimationContext, ScreenContext } from 'components/Providers'
import gsap from 'gsap'

import colors from 'styles/colors'
import { Container } from 'styles/uiElements'
import media from 'styles/media'

import RGB from 'images/RGB.png'

const CaseStudy = ({ year, client, design, image, index, description, href }) => {

  const setCursor = useContext(CursorContext).setState
  const primaryColor = useContext(PrimaryColorContext)
  const initAnimation = useContext(InitAnimationContext)
  const screen = useContext(ScreenContext).state

  const wrapperRef = useRef(null)
  const borderRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    if (initAnimation.state) {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: '.smooth-scroll',
          trigger: wrapperRef.current,
          start: "top top+=70%",
        }
      })

      tl.from(borderRef.current, {
        duration: 1,
        height: '0%'
      }, 0)

      tl.from(infoRef.current, {
        duration: 0.5,
        height: '6.939vw',
      }, 0.4)
    }
  }, [initAnimation.state])

  return (
    <Wrapper ref={wrapperRef}>
      <Border ref={borderRef} image={image}>
        <Info ref={infoRef}>
          <H2 primaryColor={primaryColor.state}>> {`0${index + 1} _____Project`}</H2>
          <Row>
            <p>Year:</p>
            <p>{year}</p>
          </Row>
          <Row>
            <p>client:</p>
            <p>{client}</p>
          </Row>
          <Row>
            <p>design:</p>
            <p>{design}</p>
          </Row>
          {!screen.mobile && <P>{description}</P>}
          <A 
            href={href} 
            target="_blank"
            onMouseEnter={() => setCursor("hover")}
            onMouseLeave={() => setCursor("")}
            primaryColor={primaryColor.state}
          >VISIT SITE ></A>
        </Info>
      </Border>
    </Wrapper>
  )
}

export default CaseStudy

const Wrapper = styled.div`
  width: 100%;
  height: 49.091vw;
  margin-bottom: 3.535vw;

  ${media.mobile} {
    height: 190.67vw;
    margin-bottom: 5.33vw;
  }
`

const Border = styled(Container)`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: grayscale(1) blur(1px);

    border-radius: 2.525vw;

    ${media.mobile} {
      border-radius: 13.33vw;
    }
  }

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    background-image: url(${RGB});
    background-repeat: repeat;
    background-size: 0.2vw;
    background-position: center center;
    filter: grayscale(1) blur(1px);
    opacity: 0.5;

    border-radius: 2.525vw;

    ${media.mobile} {
      border-radius: 13.33vw;
    }
  }
`

const Info = styled(Container)`
  position: absolute;
  z-index: 2;
  background: ${colors.black};
  overflow: hidden;

  width: 30.202vw;
  height: 28.939vw;
  top: 2.02vw;
  right: 2.02vw;
  padding: 2.5vw;

  ${media.mobile} {
    width: 79.2vw;
    height: 75.2vw;
    top: 5vw;
    right: 50%;
    transform: translateX(50%);
    padding: 10.67vw 5.33vw;
  }
`

const H2 = styled.h2`
  color: ${props => props.primaryColor};
  font-family: Ofform;
  font-style: normal;
  font-weight: normal;
  line-height: 70%;
  letter-spacing: -0.02em;
  transition: 500ms;
  
  font-size: 2.424vw;
  text-shadow: 0vw 0vw 0.253vw #E2E1FF;
  margin-bottom: 2.5vw;

  ${media.mobile} {
    font-size: 6.13vw;
    margin-bottom: 13.33vw;
  }
`

const Row = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.white};
  // box-shadow: inset 0vw -0.051vw 0vw #EAE9E9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  filter: blur(0.5px);
  margin-bottom: 1vw;
  padding-bottom: 0.253vw;

  p {
    font-family: MD IO;
    font-style: normal;
    font-weight: normal;
    font-size: 1.212vw;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: ${colors.white};
    text-shadow: 0vw 0vw 0.253vw #C1C0FF;
  }

  ${media.mobile} {
    padding-bottom: 1.33vw;
    margin-bottom: 2vw;

    p {
      font-size: 4.27vw;
    }
  }
`

const P = styled.p`
  font-family: MD IO;
  font-style: normal;
  font-weight: normal;
  font-size: 0.909vw;
  line-height: 150%;
  letter-spacing: -0.02em;

  color: ${colors.white};

  text-shadow: 0vw 0vw 0.253vw #C1C0FF;
  filter: blur(0.5px);

  margin-top: 1.253vw;
  margin-bottom: 1.253vw;
`

const A = styled.a`
  color: ${props => props.primaryColor};
  font-family: Ofform;
  font-style: normal;
  font-weight: normal;
  line-height: 70%;
  letter-spacing: -0.02em;
  text-decoration: none;
  cursor: none;
  transition: 500ms;
  
  font-size: 1.424vw;
  text-shadow: 0vw 0vw 0.153vw #E2E1FF;

  ${media.mobile} {
    font-size: 6.13vw;
    margin-top: 5.33vw;
  }
`
