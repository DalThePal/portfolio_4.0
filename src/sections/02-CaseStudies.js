import React, { useMemo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { vwToPx } from 'utils/functions'

import CaseStudy from 'components/CaseStudy'

import MiqrotechPNG from 'images/miqrotech.png'
import MrAndMrsZPNG from 'images/mrandmrsz.png'
import KielCummingsPNG from 'images/kielcummings.png'
import TiktokPNG from 'images/tiktok.png'

const DATA = [
  {
    year: 2022,
    client: "Brandon Zacharias",
    design: "Brandon Zacharias",
    image: MrAndMrsZPNG,
    href: "https://mrandmrsz.com",
    description: `
      Created for Brandon and Morgan's (fiance) wedding, 
      this site's notable features are the magnetic
      buttons, interactive clouds, and the scroll based
      rotating diamond.
    `
  },
  {
    year: 2022,
    client: "Kiel Cummings",
    design: "Kiel Cummings",
    image: KielCummingsPNG,
    href: "https://kielcummings.com",
    description: `
      This site shows off Kiel's exceptional design skills
      and style. It achieves this with a complimentary blend
      of unique typography and hover animations along with a 
      simple but effective layout.  
    `
  },
  {
    year: 2021,
    client: "Miqrotech",
    design: "Reform Collective",
    image: MiqrotechPNG,
    href: "https://miqrotech.com",
    description: `
      While this site is not complex, we added hover, scroll, and 3D
      animations to bring this site to the next level.  The homepage
      features a binary wave created with webgl while the miqroaware 
      page showcases miqrotech's star product using a sequence of images
      to achieve a 3 dimensional experience.
    `
  },
  {
    year: 2021,
    client: "Bitski",
    design: "Reform Collective",
    image: TiktokPNG,
    href: "https://tiktok.reformcollective.com",
    description: `
      This site was built for a collaboration between Bitski and 
      Tiktok to auction NFTs created by tiktok creators. While
      this project was cancelled before it could be finished, it
      is still one my favorite projects that Ive been apart of. 
      Just about every part of this site boasts unique designs and
      heavy animations.  
    `
  },
]

const CaseStudies = ({ initAnim }) => {

  const wrapperRef = useRef(null)

  const stickyOffset = `${vwToPx(3.535)}, -${vwToPx(10)}`

  useEffect(() => {
    if (initAnim) {
      gsap.to(wrapperRef.current, {
        duration: 1,
        opacity: 1
      })
    }
  }, [initAnim])

  const projects = useMemo(() => DATA.map((item, index) => {
    return (
      <CaseStudy
        key={index}
        {...item}
        index={index}
      />
    )
  }), [])

  return (
    <Wrapper  id="case-studies-wrapper" ref={wrapperRef} length={DATA.length}>
      <Inner 
        length={DATA.length}
        data-scroll
        data-scroll-target={"#case-studies-wrapper"}
        data-scroll-sticky
        data-scroll-offset={stickyOffset}
      >
        {projects}
      </Inner>
    </Wrapper>
  )
}

export default CaseStudies

const Wrapper = styled.section`
  opacity: 0;
  height: calc(100vw * ${props => props.length});

  padding-left: 3.535vw;
  padding-right: 3.535vw;
`

const Inner = styled.div`
  height: 100vh;
  width: calc(100vw * ${props => props.length});
  display: flex;
  align-items: center;
`