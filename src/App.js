import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import Hero         from 'sections/01-Hero'
import CaseStudies  from 'sections/02-CaseStudies'

import Footer from 'components/Footer'
import Scroll from 'components/Scroll'

import StarSVG from 'images/star.svg'

const App = () => {
  return (
    <Wrapper>
      <Scroll/>
      <ScrollContainer className="smooth-scroll">
        <Hero/>
        <CaseStudies/>
        <Footer/>
      </ScrollContainer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  background: ${colors.black};
  cursor: url(${StarSVG}), auto;
`

const ScrollContainer = styled.div`

`