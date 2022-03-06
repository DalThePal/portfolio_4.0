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
  width: 2.43vw;
  height: 2.43vw;
  padding-top: 0.35vw;
  padding-bottom: 0.35vw;
`

const P = styled.p`
  // font-family: MD Primer Test;
  font-family: MD IO;
  font-style: normal;
  font-weight: bold;
  line-height: 100%;
  color: ${colors.white};
  
  font-size: 1.67vw;
  margin-left: 1.39vw;
  margin-right: 1.39vw;
  padding-top: 0.35vw;
  padding-bottom: 0.35vw;
`
