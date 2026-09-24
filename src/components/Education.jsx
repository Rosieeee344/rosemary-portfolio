import { FiBook, FiCalendar } from 'react-icons/fi'
import { educationData } from '../data/education'

/**
 * Education — academic background, rendered from src/data/education.js
 */
export default function Education() {
  return (
    <section id="education" className="section-padding bg-cream-100 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="section-subtitle">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <div className="divider" />
        </div>

        {/* Education cards */}
        <div className="max-w-2xl space-y-5">
          {educationData.map((edu) => (
            <div key={edu.id} className="card flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400">
                  <FiBook size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-light text-espresso-900 dark:text-cream-100">
                    {edu.institution}
                  </h3>
                  <p className="font-display text-base font-light italic text-espresso-700 dark:text-cream-300">
                    {edu.degree} {edu.program}
                  </p>
                  <p className="font-mono text-xs text-sand-600 dark:text-sand-400 mt-1">{edu.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-sand-600 dark:text-sand-400">
                <FiCalendar size={14} strokeWidth={1.5} />
                <span className="font-mono text-xs">
                  {edu.startDate} &mdash; {edu.endDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
