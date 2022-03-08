import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import RGB from 'images/RGB.png'

const CaseStudy = ({ year, client, design, image }) => {
  return (
    <Wrapper image={image}>
      <Info>

      </Info>
    </Wrapper>
  )
}

export default CaseStudy

const Wrapper = styled.div`
  position: relative;
  background-image: url(${RGB}), url(${props => props.image});
  background-repeat: repeat, no-repeat;
  background-size: 0.12vw, cover;
  background-position: center center;
  border: 2px solid ${colors.white};
  box-sizing: border-box;
  filter: grayscale(1) blur(1px) drop-shadow(0vw 0vw 0.505vw #DCE8FF);
  width: 100%;

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
`