import React, { useMemo, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import media from 'styles/media'

import { InitAnimationContext } from 'components/Providers'
import CaseStudy from 'components/CaseStudy'

import MiqrotechIMG from 'images/miqrotech.webp'
import MrAndMrsZIMG from 'images/mrandmrsz.webp'
import KielCummingsIMG from 'images/kielcummings.webp'
import TiktokIMG from 'images/tiktok.webp'
import FreshcutTokenIMG from 'images/freshcut-token.webp'
import FreshcutCreatorIMG from 'images/freshcut-creator.webp'
import NewformIMG from 'images/new-form.webp'
import RREIMG from 'images/rre.webp'
import Source7IMG from 'images/source-7.webp'
import GeniesIMG from 'images/genies.webp'
import ZaneAndZoeIMG from 'images/zoe-zane.jpeg'
import ReformCollectiveIMG from 'images/reform.jpeg'
import BoostIMG from 'images/boost.jpeg'
import RunwayIMG from 'images/runway.jpeg'

const DATA = [
  {
    year: 2023,
    client: "Runway Financial",
    design: "Reform Collective",
    title: "Runway",
    image: RunwayIMG,
    href: "https://runway.com",
    awards: [
      "CSS Design Site of The Day",
      "Awwwards Site of The Day",
      "Awwwards Developer Award",
    ]
  },
  {
    year: 2023,
    client: "Boost Insurance",
    design: "Reform Collective",
    title: "Boost Insurance",
    image: BoostIMG,
    href: "https://boostinsurance.com",
    awards: [
      "CSS Design Kudos Award",
      "CSS Design Innovation Award",
      "CSS Design UX Design Award",
      "CSS Design UI Design Award",
    ]
  },
  {
    year: 2023,
    client: "Reform Collective",
    design: "Reform Collective",
    title: "Reform Collective ",
    image: ReformCollectiveIMG,
    href: "https://reformcollective.com",
    awards: [
      "FWA Site of The Day",
    ]
  },
  {
    year: 2023,
    client: "Eric Hoffman",
    design: "Eric Hoffman",
    title: "Zane & Zoe",
    image: ZaneAndZoeIMG,
    href: "https://zaneandzoe.com",
    awards: [
      "CSS Design Site of The Day",
      "CSS Design UI Design Award",
      "CSS Design UX Design Award",
      "CSS Design Innovation Award",
      "Awwwards Site of The Day"
    ]
  },
  {
    year: 2022,
    client: "New Form Capital",
    design: "Reform Collective",
    title: "New Form Capital",
    image: NewformIMG,
    href: "https://newform.reformcollective.com",
    awards: [
      "CSS Design Awards SOTD"
    ]
  },
  {
    year: 2022,
    client: "RRE Ventures",
    design: "Reform Collective",
    title: "RRE Ventures",
    image: RREIMG,
    href: "https://rre.reformcollective.com",
    awards: [
      "Awwwards SOTD",
      "Awwwards Dev Award",
      "Awwwards Honorable Mention",
      "CSS Design Awards SOTD"
    ]
  },
  {
    year: 2022,
    client: "Freshcut",
    design: "Reform Collective",
    title: "Freshcut Creator",
    image: FreshcutCreatorIMG,
    href: "https://freshcut-creator.reformcollective.com"
  },
  {
    year: 2022,
    client: "Freshcut",
    design: "Reform Collective",
    title: "Freshcut Token",
    image: FreshcutTokenIMG,
    href: "https://freshcut-token.reformcollective.com",
    description: `
      This one page site has some some unique brand
      oriented animations, scroll accelerated marquees, as
      well as an image sequence that utilizes the canvas
      element and api for performance.
    `
  },
  {
    year: 2022,
    client: "Brandon Zacharias",
    design: "Brandon Zacharias",
    title: "Mr and Mrs Z",
    image: MrAndMrsZIMG,
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
    title: "Kiel Portfolio",
    image: KielCummingsIMG,
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
    title: "Miqrotech",
    image: MiqrotechIMG,
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
    title: "TikTok Top Moments",
    image: TiktokIMG,
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
  {
    year: 2021,
    client: "Genies",
    design: "Reform Collective & MetaLab",
    title: "Genies",
    image: GeniesIMG,
    href: "https://genies.reformcollective.com"
  },
  {
    year: 2021,
    client: "Source7",
    design: "Reform Collective",
    title: "Source7",
    image: Source7IMG,
    href: "https://source7.reformcollective.com/"
  }
]

const CaseStudies = () => {

  const initAnimation = useContext(InitAnimationContext)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (initAnimation.state) {
      gsap.to(wrapperRef.current, {
        duration: 1,
        opacity: 1
      })
    }
  }, [initAnimation])

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
    <Wrapper ref={wrapperRef}>
      {projects}
    </Wrapper>
  )
}

export default CaseStudies

const Wrapper = styled.section`
  opacity: 0;

  padding-left: 3.535vw;
  padding-right: 3.535vw;

  ${media.mobile} {
    padding-left: 5.33vw;
    padding-right: 5.33vw;
  }
`
