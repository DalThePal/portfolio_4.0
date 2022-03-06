import React from 'react'
import styled from 'styled-components'

import NameMarquee from 'components/NameMarquee'

const Hero = () => {
  return (
    <Wrapper>
      <NameMarquee/>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  padding-top: 4.17vw;
  padding-left: 4.86vw;
  padding-right: 4.86vw;
  padding-bottom: 4.17vw;
`
