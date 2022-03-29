import React, { useState } from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import Hero         from 'sections/01-Hero'
import CaseStudies  from 'sections/02-CaseStudies'
import About        from 'sections/03-About'

import Footer from 'components/Footer'
import Scroll from 'components/Scroll'
import Cursor from 'components/Cursor'

const App = () => {

  const [initAnim, setInitAnim] = useState(false)

  return (
    <Wrapper>
      <Scroll/>
      <Cursor/>
      <ScrollContainer className="smooth-scroll">
        <Hero setInitAnim={setInitAnim}/>
        <CaseStudies initAnim={initAnim}/>
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
