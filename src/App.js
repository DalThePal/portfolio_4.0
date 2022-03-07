import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import Hero from 'sections/01-Hero'

import StarSVG from 'images/star.svg'

const App = () => {
  return (
    <Wrapper>
      <Hero/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  background: ${colors.black};
  cursor: url(${StarSVG}), auto;
`
