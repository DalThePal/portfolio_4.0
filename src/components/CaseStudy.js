import React, { useContext } from 'react'
import styled from 'styled-components'
import { CursorContext, PrimaryColorContext } from 'components/Providers'

import colors from 'styles/colors'
import { Container } from 'styles/uiElements'

import RGB from 'images/RGB.png'

const CaseStudy = ({ year, client, design, image, index, description, href }) => {

  const cursor = useContext(CursorContext)
  const primaryColor = useContext(PrimaryColorContext)

  return (
    <Wrapper image={image}>
      <Info>
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
        <P>{description}</P>
        <A 
          href={href} 
          target="_blank"
          onMouseEnter={() => cursor.setState("hover")}
          onMouseLeave={() => cursor.setState("")}
          primaryColor={primaryColor.state}
        >VISIT SITE ></A>
      </Info>
    </Wrapper>
  )
}

export default CaseStudy

const Wrapper = styled(Container)`
  position: relative;
  width: calc(100vw - 3.535vw - 3.535vw);
  margin-right: 3.535vw;

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
    filter: grayscale(1) blur(1px);
    border-radius: 2.525vw;
  }

  height: 49.091vw;
  margin-bottom: 3.535vw;
`

const Info = styled(Container)`
  position: absolute;
  background: ${colors.black};

  width: 30.202vw;
  height: 28.939vw;
  top: 2.02vw;
  right: 2.02vw;
  padding: 2.5vw;
`

const H2 = styled.h2`
  color: ${props => props.primaryColor};
  font-family: Ofform;
  font-style: normal;
  font-weight: normal;
  font-size: 2.424vw;
  line-height: 70%;
  letter-spacing: -0.02em;
  transition: 500ms;

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
  margin-bottom: 1.253vw;
`

const A = styled.a`
  color: ${props => props.primaryColor};
  font-family: Ofform;
  font-style: normal;
  font-weight: normal;
  font-size: 1.424vw;
  line-height: 70%;
  letter-spacing: -0.02em;
  text-decoration: none;
  cursor: none;
  transition: 500ms;

  text-shadow: 0vw 0vw 0.153vw #E2E1FF;
`
