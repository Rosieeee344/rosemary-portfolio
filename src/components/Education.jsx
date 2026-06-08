import { FiBook, FiCalendar } from 'react-icons/fi'

/**
 * Education — academic background
 */
export default function Education() {
  return (
    <section id="education" className="section-padding bg-cream-100 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="section-subtitle">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <div className="divider" />
        </div>

        {/* Education card */}
        <div className="max-w-2xl">
          <div className="card relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cream-200 dark:bg-espresso-700 opacity-50" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-12 h-12 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400">
                <FiBook size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-light text-espresso-900 dark:text-cream-100">
                  Koforidua Technical University
                </h3>
                <p className="font-mono text-sm text-sand-600 dark:text-sand-400 mt-1">Koforidua, Ghana</p>
              </div>
            </div>

            <div className="space-y-4 pl-17">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-sand-500 dark:text-sand-500 mb-1">Degree</p>
                <p className="font-display text-xl font-light text-espresso-800 dark:text-cream-200">
                  Bachelor of Technology (BTech)
                </p>
                <p className="font-display text-lg font-light text-espresso-700 dark:text-cream-300 italic">
                  Information and Communication Technology
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-sand-600 dark:text-sand-400">
                <FiCalendar size={14} strokeWidth={1.5} />
                <span className="font-mono text-xs">Expected Graduation: 2030</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Web Development', 'Software Engineering', 'Networking', 'Database Systems', 'IT Management'].map(subject => (
                  <span key={subject} className="tag">{subject}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}