import React, { useContext } from 'react'
import styled from 'styled-components'
import { PrimaryColorContext } from './Providers'

import colors from 'styles/colors'
import { Container } from 'styles/uiElements'
import media from 'styles/media'

import PurpleGIF from 'images/memoji-purple.gif'
import YellowGIF from 'images/memoji-yellow.gif'
import BlueGIF from 'images/memoji-blue.gif'
import RedGIF from 'images/memoji-red.gif'

const Memoji = () => {

  const primaryColor = useContext(PrimaryColorContext)

  return (
    <MemojiWrapper>
      <Image src={PurpleGIF} alt="its me" visible={(primaryColor.state === colors.purple)}/>
      <Image src={YellowGIF} alt="its me" visible={(primaryColor.state === colors.yellow)}/>
      <Image src={BlueGIF} alt="its me" visible={(primaryColor.state === colors.teal)}/>
      <Image src={RedGIF} alt="its me" visible={(primaryColor.state === colors.red)}/>
    </MemojiWrapper>
  )
}

export default Memoji

const MemojiWrapper = styled(Container)`
  position: relative;
  background: ${colors.black};
  height: 100%;
  overflow: hidden;
  flex-grow: 1;

  margin-right: 1.7vw;

  ${media.mobile} {
    margin-right: 5.33vw;
  }
`

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  mix-blend-mode: screen;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};

  ${media.mobile} {
    border-radius: 16vw;
  }
`
