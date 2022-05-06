import React, { useState, createContext, useEffect } from 'react'

import colors from 'styles/colors'
import { desktop, tablet, mobile } from 'styles/media'

export const CursorContext = createContext("")
export const PrimaryColorContext = createContext(colors.purple)
export const InitAnimationContext = createContext(false)
export const ScreenContext = createContext(null)

const Providers = ({children}) => {

  const [cursorState, setCursorState] = useState("")
  const [primaryColor, setPrimaryColor] = useState(colors.purple)
  const [initAnimation, setInitAnimation] = useState(false)
  const [screen, setScreen] = useState({
    fullWidth: false,
    desktop: false,
    tablet: false,
    mobile: false
  })

  useEffect(() => {
    const calcScreen = () => {
      let screen = {
        fullWidth: window.innerWidth > desktop,
        desktop: window.innerWidth <= desktop,
        tablet: window.innerWidth <= tablet,
        mobile: window.innerWidth <= mobile
      }

      setScreen(screen)
    }

    calcScreen()

    window.addEventListener('resize', calcScreen)

    return () => {
      window.removeEventListener('resize', calcScreen)
    }
  }, [setScreen])

  return (
    <ScreenContext.Provider value={{state: screen, setState: setScreen}}>
      <CursorContext.Provider value={{state: cursorState, setState: setCursorState}}>
        <InitAnimationContext.Provider value={{state: initAnimation, setState: setInitAnimation}}>
          <PrimaryColorContext.Provider value={{state: primaryColor, setState: setPrimaryColor}}>
            {children}
          </PrimaryColorContext.Provider>
        </InitAnimationContext.Provider>
      </CursorContext.Provider>
    </ScreenContext.Provider>
  )
}

export default Providers
