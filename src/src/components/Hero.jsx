import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiArrowDown } from 'react-icons/fi'

const typingTexts = [
  'Frontend Developer',
  'ICT Student',
  'Future Software Engineer',
  'Tech Entrepreneur',
]

/**
 * Hero — full-viewport landing section with typing animation and CTAs
 */
export default function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  // Typing effect
  useEffect(() => {
    const current = typingTexts[textIndex]
    let timeout

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 45)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex(i => (i + 1) % typingTexts.length)
    }

    setDisplayed(current.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center noise-bg overflow-hidden bg-cream-100 dark:bg-espresso-900"
    >
      {/* Decorative background circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-sand-200 dark:bg-espresso-800 opacity-40 blur-3xl translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-cream-300 dark:bg-espresso-700 opacity-50 blur-2xl -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="animate-fade-in">
            {/* Location pill */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-sand-600 dark:text-sand-400 mb-8 border border-sand-300 dark:border-sand-700 px-3 py-1.5">
              <FiMapPin size={11} />
              Koforidua, Ghana
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-espresso-900 dark:text-cream-50 mb-4">
              Rosemary<br />
              <span className="italic text-sand-600 dark:text-sand-400">Boahemaa</span><br />
              Dwamena
            </h1>

            {/* Typing role */}
            <div className="flex items-center gap-2 mb-6 h-8">
              <span className="font-mono text-sm text-sand-600 dark:text-sand-400 tracking-wide">
                {displayed}
              </span>
              <span className="w-0.5 h-5 bg-sand-500 dark:bg-sand-400 animate-blink" />
            </div>

            {/* Role pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Course Representative', 'Xolace Ambassador', 'ICT Student'].map(role => (
                <span key={role} className="tag">{role}</span>
              ))}
            </div>

            {/* Tagline */}
            <p className="font-body text-base md:text-lg text-espresso-700 dark:text-cream-300 leading-relaxed max-w-md mb-3">
              Building scalable, efficient, and user-friendly digital solutions.
            </p>
            <p className="font-body text-sm text-sand-600 dark:text-sand-400 leading-relaxed max-w-md mb-10">
              ICT Student passionate about robotics, startups, mental health, and building products that solve real-world problems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary"
              >
                View Projects
              </button>
              <a
                href="/assets/resume/Rosemary_Dwamena_Resume.pdf"
                download
                className="btn-outline"
              >
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-outline"
              >
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a href="https://github.com/Rosieeee344" target="_blank" rel="noopener noreferrer"
                className="text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors"
                aria-label="GitHub">
                <FiGithub size={18} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/dwamena-rosemary-80b3a03b7" target="_blank" rel="noopener noreferrer"
                className="text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors"
                aria-label="LinkedIn">
                <FiLinkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="https://x.com/dwamen1dwamena" target="_blank" rel="noopener noreferrer"
                className="text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors"
                aria-label="Twitter/X">
                <FiTwitter size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:rdwamena36@gmail.com"
                className="text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors"
                aria-label="Email">
                <FiMail size={18} strokeWidth={1.5} />
              </a>

              {/* Divider + email */}
              <span className="w-px h-4 bg-sand-300 dark:bg-sand-700 mx-1" />
              <a href="mailto:rdwamena36@gmail.com"
                className="font-mono text-xs text-sand-600 dark:text-sand-400 hover:text-espresso-800 dark:hover:text-cream-200 transition-colors hidden sm:block">
                rdwamena36@gmail.com
              </a>
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-sand-300 dark:border-sand-700" />
              
              {/* Image container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 bg-cream-200 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-sand-300 dark:bg-sand-600" />
                  <p className="font-mono text-xs text-sand-500 dark:text-sand-400 text-center px-4">
                    Add your photo at<br />
                    <code className="text-sand-700 dark:text-sand-300">/assets/images/rosemary-profile.jpg</code>
                  </p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-cream-50 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 px-4 py-3 shadow-lg">
                <p className="font-display text-2xl font-light text-espresso-900 dark:text-cream-100">7+</p>
                <p className="font-mono text-xs text-sand-500 dark:text-sand-400">Projects Built</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sand-500 dark:text-sand-500 animate-bounce">
          <span className="font-mono text-xs tracking-widest2">scroll</span>
          <FiArrowDown size={14} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  )
}