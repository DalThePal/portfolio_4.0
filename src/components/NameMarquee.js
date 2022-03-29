import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { PrimaryColorContext } from 'components/Providers'

import colors from 'styles/colors'

import { ReactComponent as GlobeSVG } from 'images/globeIcon.svg'
import { ReactComponent as PointSVG } from 'images/pointIcon.svg'

import Marquee from './Marquee'

const NameMarquee = () => {

  const primaryColor = useContext(PrimaryColorContext)

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  return (
    <Marquee 
      loaded={loaded}
    >
      <Globe primaryColor={primaryColor.state}/>
      <P>Creative Developer</P>
      <Point primaryColor={primaryColor.state}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Globe primaryColor={primaryColor.state}/>
      <P>Creative Developer</P>
      <Point primaryColor={primaryColor.state}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Globe primaryColor={primaryColor.state}/>
      <P>Creative Developer</P>
      <Point primaryColor={primaryColor.state}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Globe primaryColor={primaryColor.state}/>
      <P>Creative Developer</P>
      <Point primaryColor={primaryColor.state}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Globe primaryColor={primaryColor.state}/>
      <P>Creative Developer</P>
      <Point primaryColor={primaryColor.state}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Globe primaryColor={primaryColor.state}/>
      <P>Creative Developer</P>
      <Point primaryColor={primaryColor.state}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
    </Marquee>
  )
}

export default NameMarquee

const svgStyles = `
  width: 1.767vw;
  height: 1.767vw;
  padding-top: 0.255vw;
  padding-bottom: 0.255vw;
  will-change: transform;
`

const Globe = styled(GlobeSVG)`
  ${svgStyles}

  path, circle {
    stroke: ${props => props.primaryColor};
  }
`

const Point = styled(PointSVG)`
  ${svgStyles}

  path, circle {
    stroke: ${props => props.primaryColor};
  }
`

const P = styled.p`
  // font-family: MD Primer Test;
  font-family: MD IO;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
  color: ${colors.white};
  will-change: transform;
  
  font-size: 1.215vw;
  margin-left: 1.011vw;
  margin-right: 1.011vw;
  padding-top: 0.255vw;
  padding-bottom: 0.255vw;
`
