import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Journey', to: '/journey' },
  { label: 'Field Notes', to: '/field-notes' },
  { label: 'Projects', to: '/projects' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const linkClass = ({ isActive }) =>
    `font-body text-sm tracking-wide transition-colors duration-150 pb-0.5 ${
      isActive
        ? 'text-espresso-900 dark:text-cream-100 border-b border-sand-400 dark:border-sand-500'
        : 'text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100'
    }`

  const mobileLinkClass = (isActive) =>
    `font-display text-3xl font-light transition-colors ${
      isActive
        ? 'text-espresso-900 dark:text-cream-100'
        : 'text-espresso-800 dark:text-cream-100 hover:text-sand-600 dark:hover:text-sand-400'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/95 dark:bg-espresso-900/95 backdrop-blur-md border-b border-cream-300 dark:border-espresso-700 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl font-light tracking-wide text-espresso-800 dark:text-cream-100 hover:text-sand-600 dark:hover:text-sand-400 transition-colors"
          >
            RBD
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              className="md:hidden p-2 text-espresso-800 dark:text-cream-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream-50 dark:bg-espresso-900 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => mobileLinkClass(isActive)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  )
}
