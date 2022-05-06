import React, { useContext } from 'react'
import styled from 'styled-components'
import { PrimaryColorContext} from 'components/Providers'

import colors from 'styles/colors'
import { Container } from 'styles/uiElements'
import media from 'styles/media'

import { useMedia } from 'utils/hooks'

import Marquee from 'components/Marquee'
import Memoji from 'components/Memoji'
import ColorPicker from 'components/ColorPicker'

const About = () => {

  const primaryColor = useContext(PrimaryColorContext)

  const roleText = useMedia(
    '[CURRENT ROLE]..........................................Creative Developer',
    '[CURRENT ROLE]..........................................Creative Developer',
    '[CURRENT ROLE]..........................................Creative Developer',
    '[CURRENT ROLE]...Creative Developer',
  )

  const companyText = useMedia(
    '[COMPANY]................................................Reform Collective',
    '[COMPANY]................................................Reform Collective',
    '[COMPANY]................................................Reform Collective',
    '[COMPANY].........Reform Collective',
  )

  return (
    <Wrapper>
      <Left>
        <Title primaryColor={primaryColor.state}>\\About Me</Title>
        <Text>
          I'm baby snackwave fixie swag, cornhole normcore raw 
          denim bicycle rights pork belly. Man braid tacos 
          sartorial vinyl neutra 3 wolf moon artisan, succulents 
          jean shorts. Franzen tote bag you probably haven't heard 
          of them waistcoat crucifix salvia seitan. You probably 
          haven't heard of them whatever bespoke dreamcatcher venmo 
          YOLO four loko tattooed polaroid selvage pabst.
        </Text>
        <Text>
          I'm baby snackwave fixie swag, cornhole normcore raw denim 
          bicycle rights pork belly. Man braid tacos sartorial vinyl 
          neutra 3 wolf moon artisan, succulents jean shorts. Franzen 
          tote bag you probably haven't heard of them waistcoat 
          crucifix salvia seitan. You probably haven't heard of them 
          whatever bespoke dreamcatcher venmo YOLO four loko tattooed 
          polaroid selvage pabst.
        </Text>
        <Text>{roleText}</Text>
        <Text>{companyText}</Text>
      </Left>
      <Right>
        <MarqueeWrapper>
          <Marquee>
            <RoleMarquee primaryColor={primaryColor.state}>CREATIVE WEB DEVELOPER CREATIVE WEB DEVELOPER </RoleMarquee>
          </Marquee>
        </MarqueeWrapper>

        <MarqueeWrapper>
          <Marquee>
            <LocationMarquee primaryColor={primaryColor.state}>SALT LAKE CITY, UTAH SALT LAKE CITY, UTAH </LocationMarquee>
          </Marquee>
        </MarqueeWrapper>

        <Row>
          
          <Memoji/>
          <ColorPicker/>
          
        </Row>
      </Right>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.section`
  width: 100%;
  display: flex;

  height: 50vw;
  padding-left: 3.535vw;
  padding-right: 3.535vw;

  ${media.mobile} {
    flex-direction: column;
    padding-left: 5.33vw;
    padding-right: 5.33vw;
    height: auto;
  }
`

const Left = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;

  width: 45.71vw;
  padding-top: 2.53vw;
  padding-left: 3.03vw;
  padding-right: 3.03vw;
  margin-right: 1.7vw;

  ${media.mobile} {
    margin-right: 0vw;
    width: 100%;
    padding-top: 10.67vw;
    padding-bottom: 10.67vw;
    padding-left: 5.33vw;
    padding-right: 5.33vw;
    margin-bottom: 5.33vw;
  }
`

const Title = styled.h5`
  color: ${colors.black};
  background: ${props => props.primaryColor};
  font-family: MD IO;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.02em;
  width: fit-content;
  transition: 500ms;

  font-size: 1.21vw;
  margin-bottom: 0.81vw;

  ${media.mobile} {
    font-size: 4.8vw;
    margin-bottom: 5.33vw;
  }
`

const Text = styled.p`
  color: ${colors.white};
  text-shadow: 0vw 0vw 0.25vw #C1C0FF;
  font-family: MD IO;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: -0.02em;

  font-size: 0.91vw;
  margin-bottom: 2.02vw;

  ${media.mobile} {
    font-size: 3.73vw;
    margin-bottom: 5.33vw;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  width: 45.71vw;

  ${media.mobile} {
    width: 100%;
  }
`

const MarqueeWrapper = styled.div`
  margin-bottom: 1.7vw;

  ${media.mobile} {
    margin-bottom: 5.33vw;
  }
`

const MarqueeInner = styled.div`
  font-family: Ofform;
  font-style: normal;
  font-weight: 400;
  line-height: 70%;
  letter-spacing: 0.02em;

  font-size: 4.85vw;
  padding-top: 2.02vw;
  padding-bottom: 2.02vw;

  ${media.mobile} {
    font-size: 12.8vw;
    padding-top: 2.67vw;
    padding-bottom: 2.67vw;
  }
`

const RoleMarquee = styled(MarqueeInner)`
  -webkit-text-stroke-color: ${props => props.primaryColor};
  -webkit-text-stroke-width: 2px;
  -webkit-text-fill-color: transparent;
  transition: 500ms;
` 

const LocationMarquee = styled(MarqueeInner)`
  color: ${props => props.primaryColor};
  transition: 500ms;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  height: 32vw;

  ${media.mobile} {
    height: 70vw;
  }
`
