import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

/**
 * Footer — site footer with brand, tagline, links, and auto copyright
 */
export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]

  const socials = [
    { href: 'https://github.com/Rosieeee344', icon: FiGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/dwamena-rosemary-80b3a03b7', icon: FiLinkedin, label: 'LinkedIn' },
    { href: 'https://x.com/dwamen1dwamena', icon: FiTwitter, label: 'Twitter/X' },
    { href: 'mailto:rdwamena36@gmail.com', icon: FiMail, label: 'Email' },
  ]

  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-cream-300 dark:border-espresso-700 bg-cream-50 dark:bg-espresso-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32 py-16">

        <div className="grid md:grid-cols-3 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-display text-2xl font-light text-espresso-900 dark:text-cream-100 mb-2">
              Rosemary Boahemaa Dwamena
            </p>
            <p className="font-body text-sm text-sand-600 dark:text-sand-400 leading-relaxed max-w-xs">
              Building scalable, efficient, and user-friendly digital solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs tracking-widest2 uppercase text-sand-500 dark:text-sand-500 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs tracking-widest2 uppercase text-sand-500 dark:text-sand-500 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              {socials.map(s => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-body text-sm text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors group"
                  >
                    <Icon size={14} strokeWidth={1.5} />
                    {s.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-300 dark:border-espresso-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-sand-500 dark:text-sand-500">
            © {year} Rosemary Boahemaa Dwamena. All rights reserved.
          </p>
          <p className="font-mono text-xs text-sand-400 dark:text-sand-600">
            Built with React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}