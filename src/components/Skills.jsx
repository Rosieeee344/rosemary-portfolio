import { programmingSkills, toolsSkills, learningSkills, interests } from '../data/skills'

/**
 * SkillBar — animated progress bar for a single skill
 */
function SkillBar({ name, level }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-cream-300 dark:border-espresso-700">
      <span className="font-mono text-sm text-espresso-800 dark:text-cream-200">{name}</span>
      <span className="font-mono text-xs text-sand-500 dark:text-sand-400">{level}</span>
    </div>
  )
}

/**
 * Skills — programming proficiency, tools, learning goals, and interests
 */
export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-cream-100 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title">Skills & Tools</h2>
          <div className="divider" />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

          {/* Programming */}
          <div className="card space-y-6">
            <h3 className="font-mono text-xs tracking-widest2 uppercase text-sand-600 dark:text-sand-400">Programming</h3>
            <div className="space-y-5">
              {programmingSkills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="card space-y-6">
            <h3 className="font-mono text-xs tracking-widest2 uppercase text-sand-600 dark:text-sand-400">Tools</h3>
            <div className="space-y-5">
              {toolsSkills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="card space-y-6">
            <h3 className="font-mono text-xs tracking-widest2 uppercase text-sand-600 dark:text-sand-400">Currently Learning</h3>
            <ul className="space-y-3">
              {learningSkills.map(skill => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sand-400 dark:bg-sand-500 flex-shrink-0" />
                  <span className="font-mono text-sm text-espresso-700 dark:text-cream-300">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div className="card space-y-6">
            <h3 className="font-mono text-xs tracking-widest2 uppercase text-sand-600 dark:text-sand-400">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map(item => (
                <span
                  key={item.label}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-cream-200 dark:bg-espresso-700 border border-cream-300 dark:border-espresso-600 text-xs font-body text-espresso-700 dark:text-cream-300"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}