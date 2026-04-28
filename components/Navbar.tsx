'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Programs', href: '#programs' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Partners', href: '#partners' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Accredian Enterprise Home">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm font-display">A</span>
          </div>
          <div>
            <span
              className={`font-display font-bold text-lg leading-none ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Accredian
            </span>
            <span
              className={`block text-[10px] font-medium tracking-widest uppercase ${
                scrolled ? 'text-blue-600' : 'text-blue-300'
              }`}
            >
              Enterprise
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 relative ${
                  scrolled ? 'text-gray-700' : 'text-blue-100'
                } ${isActive ? 'text-blue-600' : ''}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`block py-2 font-medium hover:text-blue-600 transition-colors ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href="#contact"
              className="block w-full text-center bg-blue-600 text-white font-semibold py-2.5 rounded-lg mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

