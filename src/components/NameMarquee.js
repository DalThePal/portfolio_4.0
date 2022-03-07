import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import GlobeSVG from 'images/globeIcon.svg'
import PointSVG from 'images/pointIcon.svg'

import Marquee from './Marquee'

const NameMarquee = () => {

  return (
    <Marquee>
      <Img src={GlobeSVG} alt="globe"/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point"/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe"/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point"/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe"/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point"/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe"/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point"/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe"/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point"/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe"/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point"/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
    </Marquee>
  )
}

export default NameMarquee

const Img = styled.img`
  width: 1.767vw;
  height: 1.767vw;
  padding-top: 0.255vw;
  padding-bottom: 0.255vw;
`

const P = styled.p`
  // font-family: MD Primer Test;
  font-family: MD IO;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
  color: ${colors.white};
  
  font-size: 1.215vw;
  margin-left: 1.011vw;
  margin-right: 1.011vw;
  padding-top: 0.255vw;
  padding-bottom: 0.255vw;
`
