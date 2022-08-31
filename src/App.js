import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { ScreenContext } from 'components/Providers'

import colors from 'styles/colors'
import { Noise } from 'styles/uiElements'

import Hero         from 'sections/01-Hero'
import CaseStudies  from 'sections/02-CaseStudies'
import About        from 'sections/03-About'

import Footer from 'components/Footer'
import Scroll from 'components/Scroll'
import Cursor from 'components/Cursor'

const App = () => {

  const screen = useContext(ScreenContext).state

  useEffect(() => {
    
  }, [])

  return (
    <Wrapper>
      <Noise/>
      <Scroll/>
      {!screen.mobile && <Cursor/>}
      <ScrollContainer className="smooth-scroll">
        <Hero />
        <CaseStudies/>
        <About/>
        <Footer/>
      </ScrollContainer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  background: ${colors.black};
  cursor: none;
`

const ScrollContainer = styled.div`

`
