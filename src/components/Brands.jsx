import React from "react";
import { motion, useAnimation } from "framer-motion";

const items = ["brand_0.svg","brand_1.svg","brand_2.svg","brand_3.svg","brand_4.svg","brand_5.svg","brand_6.svg"];

const Brands = () => {
  const controls = useAnimation();

  const startScrolling = async () => {
    await controls.start({
      x: [0, -1500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    });
  };

  React.useEffect(() => {
    startScrolling();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="relative w-full overflow-hidden  mt-8">
        <motion.div
          className="flex"
          animate={controls}
        style={{ whiteSpace: "nowrap" }}
                  
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="mx-[40px]   flex "
            >
              <img className=" mx-[140px] h-[60px]  object-contain" src={`./assets/${item}`} alt="" />
            </div>
          ))}
          {items.map((item, index) => (
            <div
              key={index + items.length}
              className="mx-[40px]   flex "
            >
              <img className="mx-[140px] h-[60px] object-contain" src={`./assets/${item}`} alt="" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
