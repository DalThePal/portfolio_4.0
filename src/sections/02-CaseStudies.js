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
    description: `
      I'm baby snackwave fixie swag, cornhole normcore 
      raw denim bicycle rights pork belly. Man braid 
      tacos sartorial vinyl neutra 3 wolf moon artisan,
      succulents jean shorts. Franzen tote bag you 
      probably haven't heard of them waistcoat 
      crucifix salvia seitan. You probably haven't 
      heard of them whatever bespoke dreamcatcher 
      venmo YOLO four loko tattooed polaroid selvage 
      pabst.
    `
  },
  {
    year: 2022,
    client: "Brandon Zacharias",
    design: "Brandon Zacharias",
    image: MrAndMrsZPNG,
    description: `
      I'm baby snackwave fixie swag, cornhole normcore 
      raw denim bicycle rights pork belly. Man braid 
      tacos sartorial vinyl neutra 3 wolf moon artisan,
      succulents jean shorts. Franzen tote bag you 
      probably haven't heard of them waistcoat 
      crucifix salvia seitan. You probably haven't 
      heard of them whatever bespoke dreamcatcher 
      venmo YOLO four loko tattooed polaroid selvage 
      pabst.
    `
  },
  {
    year: 2022,
    client: "Kiel Cummings",
    design: "Kiel Cummings",
    image: KielCummingsPNG,
    description: `
      I'm baby snackwave fixie swag, cornhole normcore 
      raw denim bicycle rights pork belly. Man braid 
      tacos sartorial vinyl neutra 3 wolf moon artisan,
      succulents jean shorts. Franzen tote bag you 
      probably haven't heard of them waistcoat 
      crucifix salvia seitan. You probably haven't 
      heard of them whatever bespoke dreamcatcher 
      venmo YOLO four loko tattooed polaroid selvage 
      pabst.
    `
  },
]

const CaseStudies = () => {

  const projects = useMemo(() => DATA.map((item, index) => {
    return (
      <CaseStudy
        key={index}
        year={item.year}
        client={item.client}
        design={item.design}
        image={item.image}
        description={item.description}
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