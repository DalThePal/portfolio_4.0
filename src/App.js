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
    const vitalsURL = "https://vitals.vercel-analytics.com/v1/vitals"

    const body = {
      dsn: process.env.REACT_APP_VERCEL_ANALYTICS_ID,
      event_name: 'visit'
    }

    const blob = new Blob([new URLSearchParams(body).toString()], {
      // This content type is necessary for `sendBeacon`
      type: 'application/x-www-form-urlencoded',
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon(vitalsURL, blob);
    } else {
      fetch(vitalsURL, {
        body: blob,
        method: 'POST',
        credentials: 'omit',
        keepalive: true,
      });
    }
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
