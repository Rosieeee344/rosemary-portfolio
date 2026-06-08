import { useState } from 'react'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi'

/**
 * Contact — contact form and social/location info
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens default mail client as a simple no-backend solution
    const { name, email, subject, message } = form
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:rdwamena36@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section-padding bg-cream-50 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="section-subtitle">Get in touch</p>
          <h2 className="section-title">Contact</h2>
          <div className="divider" />
          <p className="font-body text-sm text-sand-600 dark:text-sand-400 mt-4 max-w-md">
            Whether you have a project idea, an opportunity, or just want to connect — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Left: Form ── */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs tracking-wide text-sand-600 dark:text-sand-400">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="bg-cream-100 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-600 px-4 py-3 font-body text-sm text-espresso-800 dark:text-cream-200 placeholder-sand-400 dark:placeholder-sand-600 focus:outline-none focus:border-sand-500 dark:focus:border-sand-400 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs tracking-wide text-sand-600 dark:text-sand-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="bg-cream-100 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-600 px-4 py-3 font-body text-sm text-espresso-800 dark:text-cream-200 placeholder-sand-400 dark:placeholder-sand-600 focus:outline-none focus:border-sand-500 dark:focus:border-sand-400 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs tracking-wide text-sand-600 dark:text-sand-400">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="bg-cream-100 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-600 px-4 py-3 font-body text-sm text-espresso-800 dark:text-cream-200 placeholder-sand-400 dark:placeholder-sand-600 focus:outline-none focus:border-sand-500 dark:focus:border-sand-400 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs tracking-wide text-sand-600 dark:text-sand-400">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="bg-cream-100 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-600 px-4 py-3 font-body text-sm text-espresso-800 dark:text-cream-200 placeholder-sand-400 dark:placeholder-sand-600 focus:outline-none focus:border-sand-500 dark:focus:border-sand-400 transition-colors resize-none"
                placeholder="Tell me about your project or opportunity…"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              <FiSend size={14} strokeWidth={1.5} />
              Send Message
            </button>
          </form>

          {/* ── Right: Contact Info ── */}
          <div className="space-y-8">
            {/* Direct contact */}
            <div>
              <h3 className="font-mono text-xs tracking-widest2 uppercase text-sand-600 dark:text-sand-400 mb-5">Direct Contact</h3>
              <div className="space-y-4">
                <a href="mailto:rdwamena36@gmail.com" className="card flex items-center gap-4 hover:border-sand-400 dark:hover:border-sand-600 transition-colors group">
                  <div className="w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400 group-hover:bg-espresso-800 group-hover:text-cream-100 dark:group-hover:bg-cream-200 dark:group-hover:text-espresso-900 transition-colors">
                    <FiMail size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-sand-500 dark:text-sand-500">Email</p>
                    <p className="font-body text-sm text-espresso-800 dark:text-cream-200">rdwamena36@gmail.com</p>
                  </div>
                </a>

                <div className="card flex items-center gap-4">
                  <div className="w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400">
                    <FiMapPin size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-sand-500 dark:text-sand-500">Location</p>
                    <p className="font-body text-sm text-espresso-800 dark:text-cream-200">Koforidua, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="font-mono text-xs tracking-widest2 uppercase text-sand-600 dark:text-sand-400 mb-5">Social Media</h3>
              <div className="space-y-3">
                {[
                  { href: 'https://github.com/Rosieeee344', icon: FiGithub, label: 'GitHub', handle: '@Rosieeee344' },
                  { href: 'https://www.linkedin.com/in/dwamena-rosemary-80b3a03b7', icon: FiLinkedin, label: 'LinkedIn', handle: 'Dwamena Rosemary' },
                  { href: 'https://x.com/dwamen1dwamena', icon: FiTwitter, label: 'Twitter/X', handle: '@dwamen1dwamena' },
                ].map(social => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card flex items-center gap-4 hover:border-sand-400 dark:hover:border-sand-600 transition-colors group"
                    >
                      <div className="w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400 group-hover:bg-espresso-800 group-hover:text-cream-100 dark:group-hover:bg-cream-200 dark:group-hover:text-espresso-900 transition-colors">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-sand-500 dark:text-sand-500">{social.label}</p>
                        <p className="font-body text-sm text-espresso-800 dark:text-cream-200">{social.handle}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability note */}
            <div className="card border-l-2 border-sand-400 dark:border-sand-600">
              <p className="font-mono text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
                Currently open to <span className="text-espresso-800 dark:text-cream-200">internship opportunities</span>, <span className="text-espresso-800 dark:text-cream-200">collaborations</span>, and <span className="text-espresso-800 dark:text-cream-200">mentorship conversations</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}