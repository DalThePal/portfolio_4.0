import React, { useContext } from 'react'
import styled from 'styled-components'
import { PrimaryColorContext } from 'components/Providers'

import colors from 'styles/colors'

import { ReactComponent as PointSVG } from 'images/pointIcon.svg'

const InfoRow = () => {

  const primaryColor = useContext(PrimaryColorContext)

  return (
    <Wrapper>
      <Point1 primaryColor={primaryColor.state}/>
      <Squares>
        <Square color={primaryColor.state}/>
        <Square color={colors.white}/>
        <Square color={colors.gray}/>
        <Square color={colors.darkGray}/>
      </Squares>
      <Location>Salt Lake City, UT</Location>
      <Point2 primaryColor={primaryColor.state}/>
      <Point3 primaryColor={primaryColor.state}/>
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

const Point = styled(PointSVG)`
  width: 1.768vw;
  height: 1.768vw;

  circle, path {
    transition: 500ms;
    stroke: ${props => props.primaryColor}
  }
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
  transition: 500ms;
  
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