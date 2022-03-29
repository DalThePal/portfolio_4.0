import React, { useContext } from 'react'
import styled from 'styled-components'
import { PrimaryColorContext } from 'components/Providers'

import colors from 'styles/colors'

import NameMarquee from 'components/NameMarquee'
import InfoRow from 'components/InfoRow'

const Hero = () => {

  const primaryColor = useContext(PrimaryColorContext)

  return (
    <Wrapper>
      <NameMarquee/>
      <H1>
        <Div primaryColor={primaryColor.state}>Dallen</Div>
        <Div1 primaryColor={primaryColor.state}>Hoyal</Div1>
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
  transition: 500ms;

  text-shadow: 0vw 0vw 1.01vw rgba(255, 255, 255, 0.25), 0.253vw -0.253vw 1.01vw ${props => props.primaryColor}, -0.253vw 0.253vw 0.505vw ${props => props.primaryColor};
  filter: blur(1px);
`

const Div1 = styled(Div)`
  text-align: right;
`

