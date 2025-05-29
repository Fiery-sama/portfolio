import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

function App() {
  let [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".sk-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".sk-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function() {
        if(this.progress() >= 0.9){
          document.querySelector(".svg").remove()
          setShowContent(true)
          this.kill()
        }
      },
    })
  })


  return (
    <>
    <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]'>
      <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <mask id="skMask">
            <rect width={"100%"} height={"100%"} fill='black' />
            <g className="sk-mask-group">
              <text x={"50%"} y={"50%"} fontSize={250} textAnchor='middle' fill='white' dominantBaseline={"middle"} fontFamily='Arial Black'>
                SK
              </text>
            </g>
          </mask>
        </defs>
        <image href='./bg.png' width={"100%"} height={"100%"} preserveAspectRatio='xMidYMid slice' mask='url(#skMask)'/>
      </svg>      
    </div>
    </>
  )
}

export default App