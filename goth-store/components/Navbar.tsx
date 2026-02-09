"use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
     <div className='px-5'>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white border-b border-gray-200 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full">
            {/* Left: Men & Women */}
            <div className="flex items-center space-x-9">
              <a href="#" className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-800 hover:text-black'
              }`}>
                MEN
              </a>
              <a href="#" className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-800 hover:text-black'
              }`}>
                WOMEN
              </a>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              }`}>
                LOGO
              </h1>
            </div>

            {/* Right: Avatar & Shopping Bag */}
            <div className="flex items-center space-x-6">
              <button className="transition-colors duration-300">
                <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="transition-colors duration-300">
                <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}