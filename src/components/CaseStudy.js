import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import RGB from 'images/RGB.png'

const CaseStudy = ({ year, client, design, image, index, description }) => {
  return (
    <Wrapper image={image}>
      <Info>
        <H2>> {`0${index + 1} _____Project`}</H2>
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
        <P>{description}</P>
      </Info>
    </Wrapper>
  )
}

export default CaseStudy

const Wrapper = styled.div`
  position: relative;
  
  border: 2px solid ${colors.white};
  box-sizing: border-box;
  width: 100%;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    background-image: url(${RGB}), url(${props => props.image});
    background-repeat: repeat, no-repeat;
    background-size: 0.2vw, cover;
    background-position: center center;
    filter: grayscale(1) blur(1px) drop-shadow(0vw 0vw 0.505vw #DCE8FF);
    border-radius: 2.525vw;
  }

  border-radius: 2.525vw;
  height: 49.091vw;
  margin-bottom: 3.535vw;
`

const Info = styled.div`
  position: absolute;
  border-radius: 2.525vw;
  border: 2px solid ${colors.white};
  filter: drop-shadow(0vw 0vw 0.505vw #DCE8FF);
  background: ${colors.black};

  width: 30.202vw;
  height: 28.939vw;
  top: 2.02vw;
  right: 2.02vw;
  padding: 2.5vw;
`

const H2 = styled.h2`
  color: ${colors.purple};
  font-family: Ofform;
  font-style: normal;
  font-weight: normal;
  font-size: 2.424vw;
  line-height: 70%;
  letter-spacing: -0.02em;

  text-shadow: 0vw 0vw 0.253vw #E2E1FF;

  margin-bottom: 2vw;
`

const Row = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.white};
  padding-bottom: 0.253vw;
  // box-shadow: inset 0vw -0.051vw 0vw #EAE9E9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1vw;
  filter: blur(0.5px);

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
`