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
    { name: 'Service', href: '/service' },
    { name: 'Product', href: '/product' },
    { name: 'Finance', href: '/finance' },
    { name: 'Company', href: '/company' },
  ]

  return (
    <nav className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-[1000] flex items-center justify-between px-6 sm:px-12 md:px-24 py-4 sm:py-6 text-center font-geist w-full rounded-3xl transition-all duration-500 ease-in-out max-w-[95vw] sm:max-w-[950px] h-16 sm:h-20  ${
      isScrolled 
        ? 'bg-[#161719] shadow-xm backdrop-blur-md border border-white/10' 
        : 'bg-transparent shadow-none backdrop-blur-none border border-white/0'
    }`}>
      <div className="flex items-center w-full justify-between lg:justify-center">
        {/* Logo - Hidden on mobile */}
        <div className={`hidden lg:block flex-shrink-0 transition-all duration-700 ease-in-out ${
          isScrolled ? 'mr-24' : 'mr-96'
        }`}>
          <Image
            width={120}
            height={120}
            src="/image/horizontalLogo.png" 
            alt="Cashstack" 
            className="h-8 sm:h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-indigo-300 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Get Started Button - Hidden on mobile */}
        <div className={`hidden lg:block flex-shrink-0 transition-all duration-700 ease-in-out ${
          isScrolled ? 'ml-16 xl:ml-24' : 'ml-96'
        }`}>
          <button className="bg-white border border-white text-gray-700 px-6 py-3 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/30">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden bg-none border-none cursor-pointer p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col w-6 h-[18px] relative">
            <span className={`block h-0.5 w-full bg-gray-700 rounded-sm transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
            <span className={`block h-0.5 w-full bg-gray-700 rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
            <span className={`block h-0.5 w-full bg-gray-700 rounded-sm transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[90px] sm:top-[110px] left-[2vw] sm:left-[5vw] right-[2vw] sm:right-[5vw] backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transform transition-all duration-300 z-40 ${
        isScrolled 
          ? 'bg-white/95' 
          : 'bg-white/80'
      } ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        <div className="p-6 sm:p-8 flex flex-col space-y-4 sm:space-y-6 max-w-6xl mx-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-indigo-300 font-medium text-lg py-3 border-b border-white/20 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="bg-white border border-white text-gray-700 px-8 py-4 rounded-full font-semibold text-base cursor-pointer transition-all duration-300 mt-4 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/30">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
