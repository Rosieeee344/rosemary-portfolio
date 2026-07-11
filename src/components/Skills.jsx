import { tools, interests } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-cream-100 dark:bg-espresso-900">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title">Skills & Tools</h2>
          <div className="divider"></div>
        </div>

        {/* Tools Badge Grid */}
        <p className="font-mono text-sm text-sand-500 dark:text-sand-400 mb-6">
          My toolkit grows with every project. Here&apos;s what I&apos;ve been working with lately:
        </p>
        <div className="flex flex-wrap gap-3 mb-14">
          {tools.map((tool) => (
            <span
              key={tool}
              className="card font-mono text-sm text-espresso-800 dark:text-cream-200 px-4 py-2 tracking-wide"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Interests */}
        <div className="card space-y-6">
          <h3 className="font-mono text-xs tracking-widest2 uppercase text-sand-500">
            Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-cream-200 dark:bg-espresso-800 font-mono text-sm text-espresso-700 dark:text-cream-300 rounded"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}