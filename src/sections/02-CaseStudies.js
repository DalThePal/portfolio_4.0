import React, { useMemo } from 'react'
import styled from 'styled-components'

import CaseStudy from 'components/CaseStudy'

import MiqrotechPNG from 'images/miqrotech.png'
import MrAndMrsZPNG from 'images/mrandmrsz.png'
import KielCummingsPNG from 'images/kielcummings.png'

const DATA = [
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
]

const CaseStudies = () => {

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
    <Wrapper>
      {projects}
    </Wrapper>
  )
}

export default CaseStudies

const Wrapper = styled.section`
  padding-left: 3.535vw;
  padding-right: 3.535vw;
`