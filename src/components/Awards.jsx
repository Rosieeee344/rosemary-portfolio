import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'
import { awardsData } from '../data/awards'

/**
 * Awards & Honors — recognitions rendered from src/data/awards.js
 */
export default function Awards() {
  return (
    <section id="awards" className="section-padding bg-cream-100 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="section-subtitle">Recognition</p>
          <h2 className="section-title">Awards & Honors</h2>
          <div className="divider" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {awardsData.map((award) => (
            <div key={award.id} className="card">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-shrink-0 w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400">
                  <FiAward size={18} strokeWidth={1.5} />
                </div>
                {award.isPlaceholder && (
                  <span className="tag flex-shrink-0">Placeholder</span>
                )}
              </div>

              <h3 className="font-display text-lg font-light text-espresso-900 dark:text-cream-100 mb-1">
                {award.title}
              </h3>
              <p className="font-mono text-sm text-sand-600 dark:text-sand-400 mb-2">
                {award.organization}
              </p>

              {award.date && (
                <div className="flex items-center gap-2 text-sm text-sand-600 dark:text-sand-400 mb-3">
                  <FiCalendar size={14} strokeWidth={1.5} />
                  <span className="font-mono text-xs">{award.date}</span>
                </div>
              )}

              <p className="font-body text-sm text-espresso-600 dark:text-cream-400 leading-relaxed">
                {award.description}
              </p>

              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors border border-current px-3 py-1.5 mt-4"
                >
                  <FiExternalLink size={12} strokeWidth={1.5} />
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
