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
      I'm baby snackwave fixie swag, cornhole normcore 
      raw denim bicycle rights pork belly. Man braid 
      tacos sartorial vinyl neutra 3 wolf moon artisan,
      succulents jean shorts. Franzen tote bag you 
      probably haven't heard of them waistcoat 
      crucifix salvia seitan. 
    `
  },
  {
    year: 2022,
    client: "Brandon Zacharias",
    design: "Brandon Zacharias",
    image: MrAndMrsZPNG,
    href: "https://mrandmrsz.com",
    description: `
      I'm baby snackwave fixie swag, cornhole normcore 
      raw denim bicycle rights pork belly. Man braid 
      tacos sartorial vinyl neutra 3 wolf moon artisan,
      succulents jean shorts. Franzen tote bag you 
      probably haven't heard of them waistcoat 
      crucifix salvia seitan. 
    `
  },
  {
    year: 2022,
    client: "Kiel Cummings",
    design: "Kiel Cummings",
    image: KielCummingsPNG,
    href: "https://kielcummings.com",
    description: `
      I'm baby snackwave fixie swag, cornhole normcore 
      raw denim bicycle rights pork belly. Man braid 
      tacos sartorial vinyl neutra 3 wolf moon artisan,
      succulents jean shorts. Franzen tote bag you 
      probably haven't heard of them waistcoat 
      crucifix salvia seitan. 
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