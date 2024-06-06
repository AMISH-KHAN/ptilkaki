import React, { useState } from 'react'
import {motion,useScroll,useMotionValueEvent } from "framer-motion"
import ToggleButton from './ToggleButton'

export default function Navabar() {
  const [hidden, setHidden] = useState(false)
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)


  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > 100) {
      setShow(true)
    }
    else {
      setShow(false)
    }
    if (latest > previous && latest > 100) {
      setHidden(true)

    }
    else {
      setHidden(false)
    }
  })


  return (
    <>
      <motion.div
        variants={
          {
            visible: {y:0},
            hidden:{y:"-100%"}
          }
        }
        
        animate={hidden?"hidden":"visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        
        className={ `fixed flex  w-full h-[70px] text-white px-4 lg:px-[6rem] z-50 ${show?"bg-[#151218]  bg-opacity-40":"transparent"}` }  >
              <a href="" className='flex items-center'><img className='w-[150px] h-[32px]'    src="./public/assets/logo.png" alt="" /></a>
              <div className={` w-full  lg:justify-between lg:items-center items-baseline lg:static absolute h-[100vh] bg-white text-black top-[4rem] left-0 justify-around lg:h-full lg:text-white lg:flex-row lg:bg-transparent flex-col lg:flex ${open?"flex":"hidden"} `}>
                  <ul className='flex lg:gap-4 lg:mx-auto  lg:items-center lg:flex-row flex-col items-start ml-[3rem] gap-[3rem] mt-4 lg:mt-0'>
                      <li>Product</li>
                      <li>Pricing</li>
                      <li>Industry</li>
                      <li>Customer Stories</li>
                      <li>About</li>
                      <li>Blog</li>
                  </ul>
                  <div className='flex m-auto lg:m-0'>
                      <a href='' className='text-gradient py-[14px] px-[35px]'> Login</a>
                      <a href='' className=' rounded-full justify-center items-center px-[24px] py-[12px] text-[16px] font-semibold flex gradient text-black' >Lets Talk</a>
          </div>
        </div>
        <div className=' absolute right-8 block lg:hidden' onClick={()=>setOpen(prev=>!prev)}>
          <ToggleButton  />

        </div>
      </motion.div>
    </>
  )
}
