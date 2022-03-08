import React, { useMemo } from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import CaseStudy from 'components/CaseStudy'

import MiqrotechPNG from 'images/miqrotech.png'

const DATA = [
  {
    year: 2021,
    client: "Miqrotech",
    design: "Reform Collective",
    image: MiqrotechPNG
  },
  {
    year: 2021,
    client: "Miqrotech",
    design: "Reform Collective",
    image: MiqrotechPNG
  },
  {
    year: 2021,
    client: "Miqrotech",
    design: "Reform Collective",
    image: MiqrotechPNG
  },
]

const CaseStudies = () => {

  const projects = useMemo(() => DATA.map((item, index) => {
    return (
      <CaseStudy
        year={item.year}
        client={item.client}
        design={item.design}
        image={item.image}
      />
    )
  }), [DATA])

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