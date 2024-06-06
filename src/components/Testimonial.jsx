import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "./index.css";

const testimonials = [
  {
    text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    author: "Diksha Pande",
    role: "Co-founder, Samosa Party",
    image: "./assets/ptal.webp",
  },
  {
    text: `As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.
While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.`,
    author: "John Doe",
    role: "CEO, Example Corp",
    image: "./assets/samosaParty.webp",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className=" p-8 lg:p-[8rem]  min-h-screen flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 gap-[7rem] ">
        {/* Image Section */}
        <div className="order-1 w-[20rem] lg:w-[26.1rem] md:order-2 p-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
          <div className="relative  bg-white rounded-lg overflow-hidden">
            <img
              className="w-full h-[30rem] object-cover"
              src={testimonials[currentIndex].image}
              alt="Samosa Party"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 text-lg mb-4">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex items-center mt-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-8 w-full max-w-md">
        <div className="text-center">
          <p className="text-4xl text-pink-500 font-bold">upto 95%</p>
          <p className="text-gray-500">Demand Fulfilment</p>
        </div>
        <div className="text-center">
          <p className="text-4xl text-pink-500 font-bold">&lt; 3%</p>
          <p className="text-gray-500">Daily Stock-out</p>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="text-pink-500 border border-pink-500 rounded-full py-2 px-4"
          >
            Read story
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
