import React, { useEffect, useRef, useState } from 'react'
import { motion,useScroll,useMotionValueEvent, useTransform, animate, useMotionValue } from 'framer-motion'
import CountUp, { useCountUp } from 'react-countup';

export default function Features() {
    const targetRef = useRef()
    const [scrollValue, setScrollValue] = useState()
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
  
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset:[" start start","end end"]
    })

    
    
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollValue(latest)
    })
    useEffect(() => {
      const animation = animate(count, 85, { duration: 1 });
  
      return animation.stop;
    }, [scrollValue]);

   

  return (
    <>
          <div  ref={targetRef} className=' bg-[#151218]' >
              <div className='h-[400vh]'>
                  <div className='  h-screen w-full top-0 sticky overflow-hidden'>
                      <img src="./assets/gradient-bg.svg" className='h-[90%] absolute right-0 bottom-0' alt="" />
                      <div className={`h-[100vh]  absolute top-0 justify-center flex flex-col text-white font-semibold items-center w-full ${scrollValue<0.3374?"opacity-100":"opacity-0"}`}  >
                          <h1 className='text-[37px] font-semibold leading-[48px]' ><span className='text-[150px] text-gradient leading-[150px] font-bold'>{scrollValue<0.3374&&<CountUp duration={1} end={10}/> }</span><span >%</span></h1>
                          <h2 className=" text-[28px] font-semibold">Reduction in out-of-stock</h2>
                     </div>
                      <div className={`h-[100vh] absolute top-0  justify-center flex flex-col  text-white font-semibold items-center w-full ${scrollValue>0.3374&& scrollValue<0.6374?"opacity-100":"opacity-0"}`}  >
                          <h1 className='text-[37px] font-semibold leading-[48px]' ><span  className='text-[150px] text-gradient leading-[150px] font-bold'>{scrollValue>0.3374&& scrollValue<0.6374&&<CountUp duration={1} end={15} />}</span><span >days</span></h1>
                          <h2 className=" text-[28px] font-semibold">Reduction in Cash recovery Time</h2>
                     </div>
                      <div className={`h-[100vh] absolute top-0  justify-center flex flex-col  text-white font-semibold items-center w-full ${scrollValue>0.6374?"opacity-100":"opacity-0"}`}  >
                      <h1 className='text-[37px] font-semibold leading-[48px]' ><span  className='text-[150px] text-gradient leading-[150px] font-bold'>{scrollValue>0.6374&&<CountUp duration={1} end={10}  />}</span><span >%</span></h1> 
                          <h2 className=" text-[28px] font-semibold">Growth in revenue</h2>
                     
                     </div>
                      
                  </div>
              </div>
              
      </div>
    </>
  )
}
