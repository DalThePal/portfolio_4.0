import React, { useState, createContext } from 'react'

import colors from 'styles/colors'

export const CursorContext = createContext("")
export const PrimaryColorContext = createContext(colors.purple)

const Providers = ({children}) => {

  const [cursorState, setCursorState] = useState("")
  const [primaryColor, setPrimaryColor] = useState(colors.purple)

  return (
    <CursorContext.Provider value={{state: cursorState, setState: setCursorState}}>
      <PrimaryColorContext.Provider value={{state: primaryColor, setState: setPrimaryColor}}>
        {children}
      </PrimaryColorContext.Provider>
    </CursorContext.Provider>
  )
}

export default Providers