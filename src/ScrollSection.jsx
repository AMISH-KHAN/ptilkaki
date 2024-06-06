import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { FaHome, FaInfo, FaContact } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const sections = [
  {
    id: 'home',
    // icon: <FaHome />,
    content: 'Home Content',
  },
  {
    id: 'about',
    // icon: <FaInfo />,
    content: 'About Content',
  },
  {
    id: 'contact',
    // icon: <FaContact />,
    content: 'Contact Content',
  },
];

const ScrollSection = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (e) => {
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
    console.log(currentSection)
  };

  return (
    <div
      onWheel={handleScroll}
      className="relative w-screen h-screen overflow-hidden bg-gray-800 text-white"
    >
      <div className="fixed top-1/2 transform -translate-y-1/2 left-4 flex flex-col space-y-4">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => setCurrentSection(index)}
            className={`p-2 rounded-full transition ${
              currentSection === index ? 'bg-blue-500' : 'bg-gray-500'
            }`}
          >
            {/* {section.icon} */}
          </a>
        ))}
      </div>

      <AnimatePresence>
        {sections.map(
          (section, index) =>
            index === currentSection && (
              <motion.div
                key={section.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full flex items-center justify-center"
              >
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">{section.content}</h1>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollSection;
