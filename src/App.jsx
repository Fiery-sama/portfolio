import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'

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
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove()
          setShowContent(true)
          this.kill()
        }
      },
    })
  })


  
  useGSAP(() => {
    if (!showContent) return

    gsap.to('.main', {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: 'Ease.inOut',
      delay: -1,
    })

    gsap.to('.sky', {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      ease: 'Ease.inOut',
      delay: -.8,
    })

    gsap.to('.bg', {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      ease: 'Ease.inOut',
      delay: -.8,
    })

    gsap.to('.text', {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: 'Ease.inOut',
      delay: -.8,
    })


    gsap.to('.me', {
      scale: 1,
      x: "-50%",
      bottom: "-10%",
      rotate: 0,
      duration: 2,
      ease: 'Ease.inOut',
      delay: -.8,
    })



    const main = document.querySelector(".main")

    main?.addEventListener("mousemove", function (e) {
      // console.log(e.clientX, e.clientY)
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40
      const yMove = (e.clientY / window.innerHeight - 0.5) * 40
      gsap.to(".main .text", {
        x: `${xMove * 0.5}%`,
        y: `${yMove * 0.5}%`,
      })
      gsap.to(".sky", {
        x: xMove,
      })
      gsap.to(".bg", {
        x: `${xMove * 1.7}`,
      })
      // gsap.to(".me", {
      //   x: `${xMove * 0.3}`,
      // })
      gsap.to(".about-text", {
        
      })

    })
  }, [showContent])


  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]'>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id="skMask">
              <rect width={"100%"} height={"100%"} fill='black' />
              <g className="sk-mask-group">
                <text x={"50%"} y={"50%"} fontSize={250} textAnchor='middle' fill='white' dominantBaseline={"middle"}>
                  SK
                </text>
              </g>
            </mask>
          </defs>
          <image href='./bg.png' width={"100%"} height={"100%"} preserveAspectRatio='xMidYMid slice' mask='url(#skMask)' />
        </svg>
      </div>
      {
        showContent && (
          <div className='main w-full rotate-[-10deg] scale-[1.7]'>
            <div className='landing overflow-hidden relative w-full h-screen bg-black'>
              <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
                <div className='logo flex gap-7'>
                  <div className='lines flex flex-col gap-[6px]'>
                    <div className="line md:w-15 md:h-2 w-10 h-1 bg-white"></div>
                    <div className="line md:w-8 md:h-2 w-6 h-1 bg-white"></div>
                    <div className="line md:w-5 md:h-2 w-3 h-1 bg-white"></div>
                  </div>
                </div>
              </div>
              <div className='imagesdiv relative overflow-hidden w-full h-screen'>
                <img className='absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="skies" />
                <img className='absolute bg scale-[1.8] rotate-[-10deg] top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="background-image" />
                <div className='text text-white flex flex-col gap-3 absolute top-40 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[10deg]'>
                  <h1 className='md:text-[10rem] md:-ml-20 text-8xl -ml-20'>Suhail</h1>
                  <h1 className='md:text-[10rem] md:ml-96 text-8xl ml-30'>Khan</h1>
                </div>
                <img className='absolute me -bottom-[150%] left-1/2 -translate-x-1/2 h-[40rem] scale-[7] rotate-[-20deg]' src="./me-2.png" alt="my-image" />
              </div>
              <div className='btmbar text-white absolute w-full bottom-0 left-0 py-15 px-10 bg-gradient-to-t from-black to-transparent'>
                <div className='flex gap-4 items-center'>
                  <i className='text-4xl ri-arrow-down-line'></i>
                  <h3 className='text-xl font-montserrat'>Scroll Down</h3>
                </div>
              </div>
            </div>
            <div className="w-full min-h-screen flex items-center justify-center bg-black">
              <div className="flex flex-col md:flex-row text-white w-full h-full max-w-7xl p-4">

                {/* Left Section (Image) — Hidden on small screens */}
                <div className="relative w-full md:w-1/2 h-96 md:h-auto hidden md:flex items-center justify-center">
                  <img
                    className="about-image"
                    src="./me-1.png"
                    alt="suhail-khan"
                  />
                </div>

                {/* Right Section (Content) */}
                <div className="w-full md:w-[60%] flex flex-col justify-center items-center text-center md:text-left about-content">
                  <h1 className="md:text-7xl text-5xl text-red-600 p-4">About Me</h1>
                  <div className='about-text'>
                  <p className="md:text-xl text-md mt-4 font-montserrat p-4">
                    Hi, I&apos;m Suhail Khan, a full-stack developer with a passion for crafting smart, scalable web solutions. With a toolkit that spans Python, JavaScript, Django, React, and beyond, I thrive at the intersection of logic and creativity. Whether I&apos;m optimizing a MySQL schema, architecting APIs, or collaborating on sleek UI, I bring sharp problem-solving skills and a growth mindset to every sprint.          </p>
                  <p className="md:text-xl text-md mt-3 font-montserrat p-4">
                    Outside code, you&apos;ll find me sketching, gaming, or diving into the next tech trend. I don&apos;t just build apps, I build experiences that work beautifully and scale effortlessly. Let&apos;s make the web smarter, one project at a time.          
                    </p>
                  </div>
                  <div className="p-4 mt-5">
                    <a
                      href="./docs/suhail_khan_resume.pdf"
                      download
                      className="bg-amber-400 px-5 py-4 text-2xl transition-all duration-300 text-black hover-btn"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default App
