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
      gsap.to(".main .text", {
        x: `${xMove * 0.5}%`
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
                <text x={"50%"} y={"50%"} fontSize={250} textAnchor='middle' fill='white' dominantBaseline={"middle"} fontFamily='Arial Black'>
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
                    <div className="line w-15 h-2 bg-white"></div>
                    <div className="line w-8 h-2 bg-white"></div>
                    <div className="line w-5 h-2 bg-white"></div>
                  </div>
                  <div className='text-4xl -mt-[8px] leading-none text-white'>Suhail Khan</div>

                </div>
              </div>
              <div className='imagesdiv relative overflow-hidden w-full h-screen'>
                <img className='absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="skies" />
                <img className='absolute bg scale-[1.8] rotate-[-10deg] top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="background-image" />
                <div className='text text-white flex flex-col gap-3 absolute top-40 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[10deg]'>
                  <h1 className='md:text-[10rem] md:-ml-20 text-8xl -ml-1'>Suhail</h1>
                  <h1 className='md:text-[10rem] md:ml-96 text-8xl ml-60'>Khan</h1>
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
            <div className='w-full h-screen items-center justify-center bg-black'>
              <div className='cntnr flex text-white w-full h-[80%]'>
                <div className='lsec relative w-1/2 h-full'>
                  <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-40" src="./me-1.png" alt="suhail-khan" />
                </div>
                <div className='rsec w-[40%] relative'>
                  <h1 className='text-7xl text-red-600 p-4'>About Me</h1>
                  <p className='text-xl mt-10 font-montserrat p-4'>Hi, I&apos;m Suhail Khan, a full-stack developer with a passion for crafting smart, scalable web solutions. With a toolkit that spans Python, JavaScript, Django, React, and beyond, I thrive at the intersection of logic and creativity. Whether I&apos;m optimizing a MySQL schema, architecting APIs, or collaborating on sleek UI, I bring sharp problem-solving skills and a growth mindset to every sprint.</p>
                  <p className='text-xl mt-3 font-montserrat p-4'>Outside code, you&apos;ll find me sketching, gaming, or diving into the next tech trend. I don&apos;t just build apps, I build experiences that work beautifully and scale effortlessly. Let&apos;s make the web smarter, one project at a time.</p>
                  <div className='container p-4 mt-5'>
                    <a href="#" download='./docs/suhail_khan_resume.pdf' className='bg-amber-400 px-5 py-4 border-amber-500 hover:border-amber-700 hover:bg-amber-600 white text-2xl transition-colors duration-300 text-black hover:shadow-sm hover:shadow-amber-200/50'>Download CV</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='projects w-full h-screen flex items-center justify-center bg-red-600'>
              <div className='cntnr text-white w-full h-full'>
                <div className='container'>
                  <h1 className='text-9xl text-black px-32 py-10'>Projects</h1>
                  <p className='font-montserrat px-32 w-[90%] text-xl'>
                    Here, you&#39;ll find a collection of my recent projects that highlight my skills in front-end and back-end development, UI/UX design, and performance optimization. Each project reflects my commitment to clean code, creativity, and delivering seamless digital experiences. Explore my work and see how I bring ideas to life on the web.
                  </p>
                  <div className='container flex mt-10 items-start justify-center text-zinc-800 mx-auto'>
                    <div className='p-4 max-w-sm mx-4 rounded-2xl bg-amber-300 hover:shadow-amber-500/40'>
                      <a href="https://github.com/Fiery-sama/DigiSamuday">
                        <div className='project-img'>
                          <img src="./digi-samuday.jpg" alt="digiSamuday" className='w-full rounded-xl' />
                        </div>
                        <div className='project-info'>
                          <h3 className='text-black text-3xl py-3'>DigiSamuday</h3>
                          <p className='font-montserrat text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas culpa vel, nobis magnam voluptates labore nulla optio hic perferendis rem excepturi dolores suscipit, nostrum illo autem tempora commodi amet consectetur corporis distinctio?</p>
                        </div>
                      </a>
                    </div>
                    <div className='p-4 max-w-sm  mx-4 rounded-2xl bg-amber-300'>
                      <a href="https://github.com/Fiery-sama/ct-gallery">
                        <div className='project-img'>
                          <img src="./ct-gallery.jpg" alt="ct-gallery" className='w-full rounded-xl' />
                        </div>
                        <div className='project-info'>
                          <h3 className='text-black text-3xl py-3'>College Tips - Gallery</h3>
                          <p className='font-montserrat text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas culpa vel, nobis magnam voluptates labore nulla optio hic perferendis rem excepturi dolores suscipit, nostrum illo autem tempora commodi amet consectetur corporis distinctio?</p>
                        </div>
                      </a>
                    </div>
                    <div className='p-4 max-w-sm  mx-4 rounded-2xl bg-amber-300'>
                      <a href="https://github.com/Fiery-sama/portfolio">
                        <div className='project-img'>
                          <img src="./portfolio.webp" alt="portfolio" className='w-full rounded-xl' />
                        </div>
                        <div className='project-info'>
                          <h3 className='text-black text-3xl py-3'>My Portfolio</h3>
                          <p className='font-montserrat text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas culpa vel, nobis magnam voluptates labore nulla optio hic perferendis rem excepturi dolores suscipit, nostrum illo autem tempora commodi amet consectetur corporis distinctio?</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex py-16 items-center justify-center bg-red-600'>
              <div className='text-black w-[80%] h-[80%] px-20'>
                <div className='contact mt-5 py-5 px-10'>
                  <h1 className='text-8xl text-white py-10'>Connect With Me</h1>
                  <div className='container flex mx-auto py-10'>
                  <a href="https://github.com/Fiery-sama" className='px-10 hover:text-white font-montserrat'><img src="./github.png" alt="github" className='w-10'/>Fiery-sama</a>
                  <a href="https://www.linkedin.com/in/iamsuhailkhan1864/" className='px-10 hover:text-white font-montserrat'><img src="./linkedin-logo.png" alt="linkedin" className='w-10'/>Suhail Khan</a>
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
