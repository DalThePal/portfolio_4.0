import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import NameMarquee from 'components/NameMarquee'
import InfoRow from 'components/InfoRow'

const Hero = () => {
  return (
    <Wrapper>
      <NameMarquee/>
      <H1>
        <Div>Dallen</Div>
        <Div1>Hoyal</Div1>
      </H1>
      <InfoRow/>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  padding-top: 3.033vw;
  padding-left: 3.535vw;
  padding-right: 3.535vw;
  padding-bottom: 3.033vw;
`

const H1 = styled.h1`
  width: 100%;

  margin-top: 1.515vw;
`

const Div = styled.div`
  font-family: Ofform;
  font-style: normal;
  font-weight: normal;
  font-size: 18.182vw;
  line-height: 70%;
  letter-spacing: -0.01em;
  color: ${colors.white};
  width: 100%;

  text-shadow: 0vw 0vw 1.01vw rgba(255, 255, 255, 0.25), 0.253vw -0.253vw 1.01vw ${colors.purple}, -0.253vw 0.253vw 0.505vw ${colors.blue};
  filter: blur(1px);
`

const Div1 = styled(Div)`
  text-align: right;
`

