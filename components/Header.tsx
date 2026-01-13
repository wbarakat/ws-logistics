'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-sm font-bold text-white">W</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-semibold tracking-tight">WS</span>
              <span className="text-lg font-light text-neutral-400 tracking-tight">Logistics</span>
            </div>
          </a>

          <nav className="hidden sm:flex items-center gap-8">
            <a href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
