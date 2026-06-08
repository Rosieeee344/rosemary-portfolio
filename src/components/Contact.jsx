import { useState } from 'react'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href =
      `mailto:rdwamena36@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const socials = [
    {
      href: 'https://github.com/Rosieeee344',
      icon: FiGithub,
      label: 'GitHub',
      handle: '@Rosieeee344',
    },
    {
      href: 'https://www.linkedin.com/in/dwamena-rosemary-80b3a03b7',
      icon: FiLinkedin,
      label: 'LinkedIn',
      handle: 'Dwamena Rosemary',
    },
    {
      href: 'https://x.com/dwamen1dwamena',
      icon: FiTwitter,
      label: 'Twitter / X',
      handle: '@dwamen1dwamena',
    },
  ]

  const inputClass =
    'bg-cream-100 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-600 px-4 py-3 font-body text-sm text-espresso-800 dark:text-cream-200 placeholder-sand-400 dark:placeholder-sand-600 focus:outline-none focus:border-sand-500 dark:focus:border-sand-400 transition-colors w-full'

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-cream-50 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400 mb-4">
            Get in touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide text-espresso-800 dark:text-cream-100 mb-6">
            Contact
          </h2>
          <div className="w-12 h-px bg-sand-400 dark:bg-sand-600 my-6" />
          <p className="font-body text-sm text-sand-600 dark:text-sand-400 max-w-md">
            Whether you have a project idea, an opportunity, or just want to connect — I would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs tracking-wide text-sand-600 dark:text-sand-400">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs tracking-wide text-sand-600 dark:text-sand-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs tracking-wide text-sand-600 dark:text-sand-400">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs tracking-wide text-sand-600 dark:text-sand-400">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className={inputClass + ' resize-none'}
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-espresso-800 text-cream-100 font-body text-sm font-medium tracking-wide hover:bg-espresso-700 transition-all duration-200 dark:bg-cream-200 dark:text-espresso-900 dark:hover:bg-cream-100"
            >
              <FiSend size={14} strokeWidth={1.5} />
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-8">

            {/* Direct contact cards */}
            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400 mb-5">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:rdwamena36@gmail.com"
                  className="flex items-center gap-4 bg-cream-50 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 p-5 hover:border-sand-400 dark:hover:border-sand-600 transition-colors group"
                >
                  <div className="w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400 group-hover:bg-espresso-800 group-hover:text-cream-100 dark:group-hover:bg-cream-200 dark:group-hover:text-espresso-900 transition-colors flex-shrink-0">
                    <FiMail size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-sand-500 dark:text-sand-500">Email</p>
                    <p className="font-body text-sm text-espresso-800 dark:text-cream-200">
                      rdwamena36@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-cream-50 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 p-5">
                  <div className="w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400 flex-shrink-0">
                    <FiMapPin size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-sand-500 dark:text-sand-500">Location</p>
                    <p className="font-body text-sm text-espresso-800 dark:text-cream-200">
                      Koforidua, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400 mb-5">
                Social Media
              </h3>
              <div className="space-y-3">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-cream-50 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 p-5 hover:border-sand-400 dark:hover:border-sand-600 transition-colors group"
                    >
                      <div className="w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400 group-hover:bg-espresso-800 group-hover:text-cream-100 dark:group-hover:bg-cream-200 dark:group-hover:text-espresso-900 transition-colors flex-shrink-0">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-sand-500 dark:text-sand-500">
                          {s.label}
                        </p>
                        <p className="font-body text-sm text-espresso-800 dark:text-cream-200">
                          {s.handle}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability note */}
            <div className="bg-cream-50 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 border-l-2 border-l-sand-400 dark:border-l-sand-600 p-5">
              <p className="font-mono text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
                Currently open to{' '}
                <span className="text-espresso-800 dark:text-cream-200">internship opportunities</span>
                ,{' '}
                <span className="text-espresso-800 dark:text-cream-200">collaborations</span>
                , and{' '}
                <span className="text-espresso-800 dark:text-cream-200">mentorship conversations</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}