import React, { useState } from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import GlobeSVG from 'images/globeIcon.svg'
import PointSVG from 'images/pointIcon.svg'

import Marquee from './Marquee'

const NameMarquee = () => {

  const [loaded1, setLoaded1] = useState(false)
  const [loaded2, setLoaded2] = useState(false)
  const [loaded3, setLoaded3] = useState(false)
  const [loaded4, setLoaded4] = useState(false)
  const [loaded5, setLoaded5] = useState(false)
  const [loaded6, setLoaded6] = useState(false)
  const [loaded7, setLoaded7] = useState(false)
  const [loaded8, setLoaded8] = useState(false)
  const [loaded9, setLoaded9] = useState(false)
  const [loaded10, setLoaded10] = useState(false)
  const [loaded11, setLoaded11] = useState(false)
  const [loaded12, setLoaded12] = useState(false)

  return (
    <Marquee 
      loaded={
        loaded1 && 
        loaded2 && 
        loaded3 && 
        loaded4 && 
        loaded5 && 
        loaded6 &&
        loaded7 &&
        loaded8 &&
        loaded9 &&
        loaded10 &&
        loaded11 &&
        loaded12
      }
    >
      <Img src={GlobeSVG} alt="globe" onLoad={() => setLoaded1(true)}/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point" onLoad={() => setLoaded2(true)}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe" onLoad={() => setLoaded3(true)}/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point" onLoad={() => setLoaded4(true)}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe" onLoad={() => setLoaded5(true)}/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point" onLoad={() => setLoaded6(true)}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe" onLoad={() => setLoaded7(true)}/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point" onLoad={() => setLoaded8(true)}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe" onLoad={() => setLoaded9(true)}/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point" onLoad={() => setLoaded10(true)}/>
      <P>ウェブ開発者&nbsp;&nbsp;DALLEN HOYAL</P>
      <Img src={GlobeSVG} alt="globe" onLoad={() => setLoaded11(true)}/>
      <P>Creative Developer</P>
      <Img src={PointSVG} alt="point" onLoad={() => setLoaded12(true)}/>
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
