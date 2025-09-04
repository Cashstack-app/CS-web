"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroContent = [
  {
    id: "1",
    title: "AI-Powered Banking with",
    highlight: "StackAI",
    description: "Send money with just text or snap a photo of any account number",
  },
  {
    id: "2",
    title: "Seamless Digital",
    highlight: "Transactions",
    description: "Easy bill payments at your fingertips with instant processing and real-time notifications",
  },
  {
    id: "3",
    title: "Earn Rewards with",
    highlight: "StackPoints",
    description: "Earn StackPoints on every transaction and redeem for cash, gift cards, and exclusive rewards",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[currentIndex];
  return (
    <section className="relative w-full h-screen sm:h-[800px] md:h-[1000px] lg:h-[1300px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/hero.png"
          alt="Hero"
          fill
          className="object-cover scale-100"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-start items-center h-full px-6 sm:px-12 md:px-16 lg:px-24 pt-20 sm:pt-28 md:pt-32 lg:pt-32 ">
        {/* Text Content */}
        <div className="max-w-5xl mt-8 sm:mt-12 md:mt-16 text-center px-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentContent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight"
            >
              {currentContent.title}{" "}
              <span className="font-bold italic">{currentContent.highlight}</span>
            </motion.h1>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentContent.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              className="text-md sm:text-xl text-[#C5C5C5] leading-relaxed max-w-3xl mx-auto"
            >
              {currentContent.description}
            </motion.p>
          </AnimatePresence>
        </div>
        
        {/* Static Download Button */}
        <div className="mt-8">
          <motion.button 
            whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-black border border-[#383838] text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer transition-all duration-300 flex items-center gap-2 justify-center mx-auto"
          >
            Download
            <Image
              src="/icons/Social-Icon-apple.png"
              alt="Download"
              width={20}
              height={20}
            />
            <Image
              src="/icons/Social-Icon-google.png"
              alt="Download"
              width={18}
              height={18}
            />
          </motion.button>
        </div>
      </div>

      {/* iPhone Mockup - Positioned at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative">
          <Image
            src="/image/iPhone 15 Pro Black Titanium Mockup Portrait.png"
            alt="Cashstack App on iPhone 15 Pro"
            width={400}
            height={400}
            className="max-w-[250px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] h-auto drop-shadow-2xl"
            priority
          />
          
        </div>
      </div>

      {/* Full width glass effect layer at bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-r from-[#0D0D0D]/30 to-[#080808]/30 backdrop-blur-md z-30"></div>
    </section>
  );
}
