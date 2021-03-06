import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { PrimaryColorContext, InitAnimationContext } from 'components/Providers'
import gsap from 'gsap'

import colors from 'styles/colors'
import media from 'styles/media'

import NameMarquee from 'components/NameMarquee'
import InfoRow from 'components/InfoRow'

import { hexTofeColorMatrix } from 'utils/functions'

const Hero = () => {

  const primaryColor = useContext(PrimaryColorContext)
  const initAnimation = useContext(InitAnimationContext)

  const marqueeWrapperRef = useRef(null)
  const InfoRowWrapperRef = useRef(null)

  const [dallenRef, setDallenRef] = useState(null)
  const [hoyalRef, setHoyalRef] = useState(null)
  const [dallenLength] = useState(1400)
  const [hoyalLength] = useState(1450)
  const [blurColor, setBlurColor] = useState(hexTofeColorMatrix(primaryColor.state))

  useEffect(() => {
    setBlurColor(hexTofeColorMatrix(primaryColor.state))
  }, [primaryColor])
  
  useEffect(() => {
    window.locomotiveScroll.stop()
  }, [])

  useEffect(() => {
    if (dallenRef && hoyalRef) {

      const tl = gsap.timeline({
        delay: 1,
        onComplete: () => {
          window.locomotiveScroll.start()
        }
      })

      tl.to(dallenRef, {
        duration: 2.5,
        strokeDasharray: `${dallenLength}, ${dallenLength}`,
        ease: 'none'
      }, 0)

      tl.to(hoyalRef, {
        duration: 2.5,
        strokeDasharray: `${hoyalLength}, ${hoyalLength}`,
        ease: 'none'
      }, 0)

      tl.to([dallenRef, hoyalRef], {
        duration: 1,
        fill: 'rgba(255, 255, 255, 1)',
      }, 2.5)

      tl.call(initAnimation.setState, [true], 2.5)

      tl.to([marqueeWrapperRef.current, InfoRowWrapperRef.current], {
        duration: 1,
        opacity: 1
      }, 2.5)
    }
  }, [dallenRef, hoyalRef, dallenLength, hoyalLength, initAnimation])

  return (
    <Wrapper>
      <MarqueeWrapper ref={marqueeWrapperRef}>
        <NameMarquee/>
      </MarqueeWrapper>

      <H1>
        <Dallen width="1487" height="243" viewBox="0 0 1487 243" fill="none" >
          <Path filter="url(#name-blur)" strokeDasharray={`0, ${dallenLength}`} ref={ref => setDallenRef(ref)} d="M307.72 91.24L250.12 40.48C238.96 30.76 227.8 25 210.88 25H20.8V223H210.88C227.8 223 238.96 217.6 250.12 207.52L307.72 156.76C318.88 146.68 323.2 138.04 323.2 124C323.2 109.96 318.88 100.96 307.72 91.24ZM280 157.48C280 171.88 267.76 183.4 253.36 183.4H64V64.6H253.36C267.76 64.6 280 76.12 280 90.52V157.48ZM599.433 91.24L541.833 40.48C530.673 30.76 519.513 25 502.593 25H312.512V64.6H545.073C559.473 64.6 571.713 76.12 571.713 90.52V104.2H421.233C404.313 104.2 393.513 109.6 381.992 119.68L327.992 172.96C317.912 184.48 312.512 195.28 312.512 212.2V223H502.593C519.513 223 530.673 217.6 541.833 207.52L599.433 156.76C610.593 146.68 614.913 138.04 614.913 124C614.913 109.96 610.593 100.96 599.433 91.24ZM545.073 183.4H355.712V169.72C355.712 155.32 367.952 143.8 382.352 143.8H571.713V157.48C571.713 171.88 559.473 183.4 545.073 183.4ZM762.653 223V183.4H702.893C688.493 183.4 676.253 171.88 676.253 157.48V25H633.053V115C633.053 131.92 638.453 142.72 648.533 154.24L702.533 207.52C714.053 217.6 724.853 223 741.773 223H762.653ZM863.467 223V183.4H803.707C789.307 183.4 777.067 171.88 777.067 157.48V25H733.867V115C733.867 131.92 739.267 142.72 749.347 154.24L803.347 207.52C814.867 217.6 825.667 223 842.587 223H863.467ZM1031.88 143.8C1048.8 143.8 1059.6 138.4 1071.12 128.32L1125.12 75.04C1135.2 63.52 1140.6 52.72 1140.6 35.8V25H950.517C933.597 25 922.437 30.76 911.277 40.48L853.677 91.24C842.517 100.96 838.197 109.96 838.197 124C838.197 138.04 842.517 146.68 853.677 156.76L911.277 207.52C922.437 217.6 933.597 223 950.517 223H1140.6V183.4H908.037C893.637 183.4 881.397 171.88 881.397 157.48V143.8H1031.88ZM908.037 64.6H1097.4V78.28C1097.4 92.68 1085.16 104.2 1070.76 104.2H881.397V90.52C881.397 76.12 893.637 64.6 908.037 64.6ZM1445.66 93.76L1391.66 40.48C1380.86 29.68 1369.34 25 1352.42 25H1267.46C1250.54 25 1239.02 29.68 1228.22 40.48L1201.94 66.4V25H1158.74V223H1201.94V90.52C1201.94 76.12 1214.18 64.6 1228.58 64.6H1391.3C1405.7 64.6 1417.94 76.12 1417.94 90.52V223H1461.14V133C1461.14 116.08 1456.46 104.56 1445.66 93.76Z"/>
        </Dallen>

        <Hoyal width="1591" height="243" viewBox="0 0 1591 243" fill="none">
          <Path filter="url(#name-blur)" strokeDasharray={`0, ${hoyalLength}`} ref={ref => setHoyalRef(ref)} d="M279.423 25V145.96L249.543 119.68C238.383 109.96 227.223 104.2 210.303 104.2H90.0635C75.6635 104.2 63.4235 92.68 63.4235 78.28V25H20.2235V223H63.4235V102.04L93.3035 128.32C104.463 138.04 115.623 143.8 132.543 143.8H252.783C267.183 143.8 279.423 155.32 279.423 169.72V223H322.623V25H279.423ZM643.164 25H449.484C432.564 25 421.764 30.4 410.244 40.48L356.244 93.76C346.164 105.28 340.764 116.08 340.764 133V223H534.444C551.364 223 562.164 217.6 573.684 207.52L627.684 154.24C637.764 142.72 643.164 131.92 643.164 115V25ZM599.964 157.48C599.964 171.88 587.724 183.4 573.324 183.4H383.964V90.52C383.964 76.12 396.204 64.6 410.604 64.6H599.964V157.48ZM920.505 25V78.28C920.505 92.68 908.265 104.2 893.865 104.2H731.145C716.745 104.2 704.505 92.68 704.505 78.28V25H661.305V35.8C661.305 52.72 665.985 64.24 676.785 75.04L730.785 128.32C741.585 139.12 753.105 143.8 770.025 143.8H790.905V223H834.105V143.8H854.985C871.905 143.8 883.425 139.12 894.225 128.32L948.225 75.04C959.025 64.24 963.705 52.72 963.705 35.8V25H920.505ZM1244.52 25H1050.84C1033.92 25 1023.12 30.4 1011.6 40.48L957.599 93.76C947.519 105.28 942.119 116.08 942.119 133V223H985.319V143.8H1135.8C1152.72 143.8 1163.52 138.4 1175.04 128.32L1201.32 102.4V223H1244.52V25ZM1174.68 104.2H985.319V90.52C985.319 76.12 997.559 64.6 1011.96 64.6H1201.32V78.28C1201.32 92.68 1189.08 104.2 1174.68 104.2ZM1565.06 223V183.4H1332.5C1318.1 183.4 1305.86 171.88 1305.86 157.48V25H1262.66V115C1262.66 131.92 1268.06 142.72 1278.14 154.24L1332.14 207.52C1343.66 217.6 1354.46 223 1371.38 223H1565.06Z" fill="white"/>
        </Hoyal>

        <svg>
          <filter id="name-blur" x="0.799988" y="0" width="1591" height="243" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-5" dy="5"/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0907315 0 0 0 0 0.0839931 0 0 0 0 0.491667 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_207_47"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="5" dy="-5"/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values={blurColor}/>
            <feBlend mode="normal" in2="effect1_dropShadow_207_47" result="effect2_dropShadow_207_47"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect2_dropShadow_207_47" result="effect3_dropShadow_207_47"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_207_47" result="shape"/>
            <feGaussianBlur stdDeviation="1.5" result="effect4_foregroundBlur_207_47"/>
          </filter>
        </svg>
      </H1>
      <InfoRowWrapper ref={InfoRowWrapperRef}>
        <InfoRow/>
      </InfoRowWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  padding-top: 3.033vw;
  padding-left: 3.535vw;
  padding-right: 3.535vw;
  padding-bottom: 3.033vw;

  ${media.mobile} {
    padding: 10.67vw 4.8vw;
  }
`

const H1 = styled.h1`
  position: relative;
  width: 100%;
  
  height: 30vw;
  margin-top: 1.515vw;

  ${media.mobile} {
    height: 33.07vw;
    margin-top: 5.33vw;
  }
`

const Dallen = styled.svg`
  width: 77vw;

  ${media.mobile} {
    position: relative;
    width: 100%;
    top: -20vw;
  }
`

const Hoyal = styled.svg`
  position: absolute;

  right: 0;
  top: 15vw;
  width: 78vw;

  ${media.mobile} {
    width: 100%;
    right: unset;
    left: 0;
    top: -5vw;
  }
`

const Path = styled.path`
  fill: rgba(255, 255, 255, 0);
  stroke: ${colors.white};
  stroke-width: 2px;
`

const MarqueeWrapper = styled.div`
  opacity: 0;
`

const InfoRowWrapper = styled(MarqueeWrapper)``
