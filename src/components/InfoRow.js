import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import PointSVG from 'images/pointIcon.svg'

const InfoRow = () => {
  return (
    <Wrapper>
      <Point1 src={PointSVG} alt="point"/>
      <Squares>
        <Square color={colors.purple}/>
        <Square color={colors.white}/>
        <Square color={colors.gray}/>
        <Square color={colors.darkGray}/>
      </Squares>
      <Location>Salt Lake City, UT</Location>
      <Point2 src={PointSVG} alt="point"/>
      <Point3 src={PointSVG} alt="point"/>
    </Wrapper>
  )
}

export default InfoRow

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  height: 1.768vw;
  margin-top: 5.051vw;
`

const Point = styled.img`
  width: 1.768vw;
  height: 1.768vw;
`

const Point1 = styled(Point)`
  position: absolute;
  left: 0vw;
  top: 0vw;
`

const Point2 = styled(Point)`
  position: absolute;
  left: 50%;
  top: 0vw;
  transform: translateX(-50%);
`

const Point3 = styled(Point)`
  position: absolute;
  top: 0vw;
  right: 0vw;
`

const Squares = styled.div`
  display: flex;
  position: absolute;
  top: 0.253vw;
  left: 4.04vw;
`

const Square = styled.div`
  background: ${props => props.color};
  width: 1.313vw;
  height: 1.313vw;
`

const P = styled.p`
  color: ${colors.white};
  position: absolute;
  font-family: MD IO;
  font-style: normal;
  font-weight: normal;
  font-size: 0.909vw;
  line-height: 150%;
  letter-spacing: -0.02em;

  text-shadow: 0vw 0vw 0.253vw ${colors.white};
`

const Location = styled(P)`
  top: 0.253vw;
  left: 10.576vw;
`