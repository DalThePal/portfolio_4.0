import React, { useState, createContext } from 'react'

import colors from 'styles/colors'

export const CursorContext = createContext("")
export const PrimaryColorContext = createContext(colors.purple)
export const InitAnimationContext = createContext(false)

const Providers = ({children}) => {

  const [cursorState, setCursorState] = useState("")
  const [primaryColor, setPrimaryColor] = useState(colors.purple)
  const [initAnimation, setInitAnimation] = useState(false)

  return (
    <CursorContext.Provider value={{state: cursorState, setState: setCursorState}}>
      <InitAnimationContext.Provider value={{state: initAnimation, setState: setInitAnimation}}>
        <PrimaryColorContext.Provider value={{state: primaryColor, setState: setPrimaryColor}}>
          {children}
        </PrimaryColorContext.Provider>
      </InitAnimationContext.Provider>
    </CursorContext.Provider>
  )
}

export default Providers