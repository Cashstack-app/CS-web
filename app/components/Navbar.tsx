'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'StackAI', href: '/stackai' },
    { name: 'Convert', href: '/convert' },
    { name: 'Terms', href: '/terms' },
    { name: 'Policies', href: '/policies' },
  ]

  return (
    <nav className={`fixed top-4 sm:top-6 md:top-8 lg:top-10 left-1/2 transform -translate-x-1/2 z-[1000] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-3 sm:py-4 md:py-5 lg:py-6 text-center font-geist w-full rounded-2xl sm:rounded-3xl transition-all duration-500 ease-in-out max-w-[90vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[950px] h-14 sm:h-16 md:h-18 lg:h-20 ${
      isScrolled 
        ? 'bg-[#161719] shadow-xl backdrop-blur-md border border-white/10' 
        : 'bg-transparent shadow-none backdrop-blur-none border border-white/0'
    }`}>
      <div className="flex items-center w-full justify-between lg:justify-center">
        {/* Logo - Responsive */}
        <div className={`flex-shrink-0 transition-all duration-700 ease-in-out ${
          isScrolled ? 'mr-8 md:mr-16 lg:mr-24' : 'mr-16 md:mr-32 lg:mr-96'
        }`}>
          <Image
            width={120}
            height={120}
            src="/image/horizontalLogo.png" 
            alt="Cashstack" 
            className="h-6 sm:h-8 md:h-9 lg:h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-indigo-300 font-medium text-xs lg:text-sm xl:text-base transition-all duration-300 hover:-translate-y-0.5 relative group whitespace-nowrap"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Get Started Button - Responsive */}
        <div className={`flex-shrink-0 transition-all duration-700 ease-in-out ${
          isScrolled ? 'ml-4 md:ml-8 lg:ml-16 xl:ml-24' : 'ml-8 md:ml-16 lg:ml-96'
        }`}>
          <button className="bg-white border border-white text-gray-700 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/30 whitespace-nowrap">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden bg-none border-none cursor-pointer p-1 sm:p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col w-5 sm:w-6 h-[16px] sm:h-[18px] relative">
            <span className={`block h-0.5 w-full bg-white rounded-sm transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
            <span className={`block h-0.5 w-full bg-white rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
            <span className={`block h-0.5 w-full bg-white rounded-sm transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[70px] sm:top-[80px] md:top-[90px] lg:top-[110px] left-[5vw] sm:left-[8vw] md:left-[10vw] right-[5vw] sm:right-[8vw] md:right-[10vw] backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transform transition-all duration-300 z-40 ${
        isScrolled 
          ? 'bg-[#161719]/95' 
          : 'bg-[#161719]/80'
      } ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        <div className="p-4 sm:p-6 md:p-8 flex flex-col space-y-3 sm:space-y-4 md:space-y-6 max-w-6xl mx-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-indigo-300 font-medium text-base sm:text-lg py-2 sm:py-3 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="bg-white border border-white text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base cursor-pointer transition-all duration-300 mt-2 sm:mt-4 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/30">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
