import React, { useEffect, useState, useContext, useCallback } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import { CursorContext } from 'components/Providers'

const Cursor = () => {

  const cursor = useContext(CursorContext)
  const [cursorRef, setCursorRef] = useState(null)

  
  const normal = useCallback(() => {
    if (cursorRef) {
      gsap.to(cursorRef, {
        duration: 0.5,
        rotate: 0,
        scale: 1
      })
    }
  }, [cursorRef])

  const hover = useCallback(() => {
    if (cursorRef) {
      gsap.to(cursorRef, {
        duration: 0.5,
        rotate: 180,
        scale: 1.5
      })
    }
  }, [cursorRef])

  useEffect(() => {
    switch (cursor.state) {

      case "hover":
        hover()
        break;

      default:
        normal()
        break;
    }
  }, [cursor, hover, normal])

  useEffect(() => {
    if (cursorRef) {

      const mouseMove = (e) => {
        gsap.set(cursorRef, {
          x: e.clientX - 20,
          y: e.clientY - 20
        })
      }

      window.addEventListener('mousemove', mouseMove)
  
      return () => {
        window.removeEventListener('mousemove', mouseMove)
      }
    }

  }, [cursorRef])

  return (
    <SVG ref={ref => setCursorRef(ref)} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_213_184)">
        <path d="M20 10L20.3849 11.8551C21.1944 15.7569 24.2431 18.8056 28.1449 19.6151L30 20L28.1449 20.3849C24.2431 21.1944 21.1944 24.2431 20.3849 28.1449L20 30L19.6151 28.1449C18.8056 24.2431 15.7569 21.1944 11.8551 20.3849L10 20L11.8551 19.6151C15.7569 18.8056 18.8056 15.7569 19.6151 11.8551L20 10Z" fill="#ECECEC"/>
      </g>
      <defs>
        <filter id="filter0_d_213_184" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.533333 0 0 0 0 0.52549 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_213_186"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.0823529 0 0 0 0 0.490196 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_213_186" result="effect2_dropShadow_213_186"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_213_186" result="shape"/>
        </filter>
      </defs>
    </SVG>
  )
}

export default Cursor

const SVG = styled.svg`
  position: absolute;
  z-index: 10;
  pointer-events: none;
`

