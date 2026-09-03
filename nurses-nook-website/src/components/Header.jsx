import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Mission & Vision', path: '/mission-vision' },
  { name: 'Programs', path: '/programs' },
  { name: 'Impact', path: '/impact' },
  { name: 'Team', path: '/team' },
  { name: 'News', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

function Header({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white text-sm py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">EIN: 92-3488213</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">BONITA SPRINGS, FL 34134</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:admin@pelicanbaysailingschoolinc.sbs" className="hover:text-primary-200 transition-colors">admin@pelicanbaysailingschoolinc.sbs</a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+1234567890" className="hidden sm:flex items-center gap-1 hover:text-primary-200 transition-colors">
              <Phone size={14} />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="PELICAN BAY SAILING SCHOOL INC Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-primary-800 leading-tight">PELICAN BAY SAILING SCHOOL INC</h1>
              <p className="text-xs text-gray-500 hidden sm:block">BONITA SPRINGS, Florida</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-warm-500 hover:bg-warm-600 text-white font-semibold rounded-md transition-colors"
            >
              <Heart size={18} />
              Donate
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-warm-500 text-white font-semibold rounded-md"
            >
              <Heart size={18} />
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
