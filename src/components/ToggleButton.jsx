import { MotionConfig,motion } from 'framer-motion'
import React, { useState } from 'react'

export default function ToggleButton() {
    const [active,setActive]=useState(false)
  return (
      <>
          <MotionConfig
              transition={{
                  duration: 0.2,
                  ease:"easeInOut"
          }}
          >
              
          <motion.button className='relative  opacity-100 h-[4rem] '
              onClick={() => setActive(pv => !pv)}
                  animate={active ? "open" : "closed"}
                  initial={false}
              >
              <motion.span
                  style={{
                      left: "-20px",
                      top: "35%",
                      x: "0%",
                      y:"-50%"
                    }}
                    
                      variants={{
                          open: {
                              rotate: ["0deg", "0deg", "45deg"],
                              top: ["35%", "35%", "41%"],
                              left:["-12px"]
                            },
                            closed: {
                                rotate: ["45deg", "0deg", "0deg"],
                                top:["41%","35%","35%"],
                                left:["-12px"]
                          }
                      }}
                      
                    className=' absolute h-1 w-4 bg-white'
                    
                    
                    />
              <motion.span
                   style={{
                       left: "50%",
                       top: "50%",
                       x: "-50%",
                       y:"-50%"
                      }}
                      
                      variants={{
                        open: {
                            rotate: ["0deg", "0deg", "-45deg"],
                          
                        },
                        closed: {
                            rotate: ["-45deg", "0deg", "0deg"],
                           
                        }
                    }}
                    
                    className=' absolute h-1 w-7 bg-white' />
              <motion.span
               style={{
                left: "10px  ",
                bottom: "30%",
                x: "-50%",
                y:"-50%"
                      }}
                      
                      variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],
                            bottom: ["30%", "30%", "38%"],
                            left:["4px"]
                          },
                          closed: {
                              rotate: ["45deg", "0deg", "0deg"],
                              bottom:["38%","30%","30%"],
                              left:["4px"]
                        }
                    }}
                    
            className=' absolute h-1 w-4 bg-white' />
      </motion.button>
            </MotionConfig>
    </>
  )
}
