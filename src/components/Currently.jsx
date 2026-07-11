import { FiZap, FiCode } from 'react-icons/fi'

const learning = ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS']

const building = ['SkillSwap — a peer-to-peer skill exchange platform', 'Class attendance system for KTU']

export default function Currently() {
  return (
    <section
      id="currently"
      className="py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-cream-50 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400 mb-4">
          Right Now
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide text-espresso-800 dark:text-cream-100 mb-6">
          Currently
        </h2>
        <div className="w-12 h-px bg-sand-400 dark:bg-sand-600 my-6" />

        <p className="font-body text-sm text-sand-600 dark:text-sand-400 max-w-md mb-10">
          Here&rsquo;s what I&rsquo;m focused on. This section updates as my skills and
          projects evolve — keeping it honest and current.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {/* Learning */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400">
                <FiZap size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400">
                  Learning
                </h3>
              </div>
            </div>
            <ul className="space-y-2">
              {learning.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-sand-400 dark:bg-sand-500 flex-shrink-0" />
                  <span className="font-body text-sm text-espresso-700 dark:text-cream-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Building */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400">
                <FiCode size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400">
                  Building
                </h3>
              </div>
            </div>
            <ul className="space-y-2">
              {building.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-sand-400 dark:bg-sand-500 flex-shrink-0" />
                  <span className="font-body text-sm text-espresso-700 dark:text-cream-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
