import { experienceData } from '../data/experience'

/**
 * Experience — professional timeline, rendered from src/data/experience.js
 */
export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-cream-50 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="section-subtitle">Where I&apos;ve been</p>
          <h2 className="section-title">Experience</h2>
          <div className="divider" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-cream-300 dark:bg-espresso-700 ml-3 hidden md:block" />

          <div className="space-y-6">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-sand-400 dark:border-sand-600 bg-cream-50 dark:bg-espresso-900 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sand-400 dark:bg-sand-500" />
                </div>

                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-display text-lg font-light text-espresso-900 dark:text-cream-100">{exp.organization}</h3>
                      <p className="font-mono text-sm text-sand-600 dark:text-sand-400 mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">{exp.type}</span>
                      {(exp.startDate || exp.endDate) && (
                        <span className="tag">
                          {exp.startDate && exp.endDate
                            ? `${exp.startDate} — ${exp.endDate}`
                            : exp.startDate || exp.endDate}
                        </span>
                      )}
                    </div>
                  </div>

                  {exp.description && (
                    <p className="font-body text-sm text-espresso-700 dark:text-cream-300 leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  )}

                  {exp.achievements.length > 0 && (
                    <ul className="space-y-1 mt-3">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-3">
                          <span className="mt-2 w-1 h-1 rounded-full bg-sand-400 dark:bg-sand-500 flex-shrink-0" />
                          <span className="font-body text-sm text-espresso-700 dark:text-cream-300 leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
