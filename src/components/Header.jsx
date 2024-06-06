import React from "react";

export default function Header() {
  return (
    <>
      <section id="header ">
        <div className=" lg:bg-100-auto bg-cover bg-custom-hero pt-[70px]  bg-no-repeat h-[1000px] md:px-8 lg:px-[6rem]">
          <div className="flex justify-center items-center h-[70%]  flex-col lg:flex-row">
          <div className="w-[70%]  text-white font-bold" >
            <h1 className="lg:text-[60px] leading-[40px] text-[36px] lg:leading-[88px] w-[80%]  ">
              Every order fulfilled,<span className="text-gradient"> on time. </span>
            </h1>
            <p className="lg:text-[18px] text-[13px] leading-[20px] lg:leading-[28px] font-semibold my-[20px]">
            Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
              </p>
              <div className="flex relative">
              <button className=" btn btn-background-circle  ">
                <a href="" className=" ">
              Get started with Crest

                </a>
            </button>
            <img className="absolute w-[8rem] left-[7rem] lg:left-[13rem] lg:w-[45%] top-4" src="./public/assets/hero-home-text.svg" alt="" />
              </div>
              </div>
            <div className="w-[60%] h-[60%] relative">
              <img src="./public/assets/Hero Image.svg" className=" absolute right-0 top-8 lg:right-[-4rem] lg:top-[-3rem] " alt="" />
            </div>
            </div>
        </div>
      </section>
    </>
  );
}
