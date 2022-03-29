import React, { useContext } from 'react'
import styled from 'styled-components'
import { PrimaryColorContext } from './Providers'

import colors from 'styles/colors'

import NameMarquee from 'components/NameMarquee'
import InfoRow from 'components/InfoRow'

const Footer = () => {

  const primaryColor = useContext(PrimaryColorContext)

  return (
    <Wrapper>
      <InfoRow/>
      <Name primaryColor={primaryColor.state}>Dallen Hoyal</Name>
      <NameMarquee/>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  padding-left: 3.535vw;
  padding-right: 3.535vw;
  padding-bottom: 6.566vw;
`

const Name = styled.h3`
  font-family: Ofform;
  font-style: normal;
  font-weight: normal;
  font-size: 11.364vw;
  line-height: 70%;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${colors.white};

  text-shadow: 0vw 0vw 1.01vw rgba(255, 255, 255, 0.25), 0.253vw -0.253vw 1.01vw ${props => props.primaryColor}, -0.253vw 0.253vw 0.505vw ${props => props.primryColor};
  filter: blur(1px);

  margin-top: 1.01vw;
  margin-bottom: 1.01vw;
`