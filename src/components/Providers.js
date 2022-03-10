import React, { useState, createContext } from 'react'

export const CursorContext = createContext("")

const Providers = ({children}) => {

  const [cursorState, setCursorState] = useState("")

  return (
    <CursorContext.Provider value={{state: cursorState, setState: setCursorState}}>
      {children}
    </CursorContext.Provider>
  )
}

export default Providers