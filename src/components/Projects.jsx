import { useState } from 'react'
import { projects, categories } from '../data/projects'
import { FiExternalLink, FiGithub, FiClock } from 'react-icons/fi'

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full bg-cream-50 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 p-6 transition-all duration-200 hover:border-sand-400 dark:hover:border-sand-600">

      {/* Screenshot / placeholder */}
      <div className="relative w-full h-44 bg-cream-200 dark:bg-espresso-700 border border-cream-300 dark:border-espresso-600 mb-5 overflow-hidden flex items-center justify-center text-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="p-4">
            {project.status === 'In Development' ? (
              <p className="font-mono text-xs text-sand-500 dark:text-sand-400">Coming Soon</p>
            ) : (
              <p className="font-mono text-xs text-sand-500 dark:text-sand-400">
                Add screenshot at
                <br />
                <span className="text-sand-700 dark:text-sand-300">
                  {'/assets/images/' + project.title.toLowerCase().replace(/\s+/g, '-') + '.png'}
                </span>
              </p>
            )}
          </div>
        )}

        {/* Status badge */}
        <div
          className={`absolute top-2 right-2 px-2 py-0.5 font-mono text-xs ${
            project.status === 'Live'
              ? 'bg-espresso-800 text-cream-100 dark:bg-cream-200 dark:text-espresso-900'
              : 'bg-sand-200 dark:bg-sand-700 text-sand-700 dark:text-sand-300'
          }`}
        >
          {project.status === 'Live' ? '● Live' : '◌ In Dev'}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-display text-xl font-light text-espresso-900 dark:text-cream-100 mb-2">
          {project.title}
        </h3>
        <p className="font-body text-sm text-espresso-600 dark:text-cream-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-3 py-1 text-xs font-mono tracking-wide bg-cream-200 dark:bg-espresso-700 text-sand-700 dark:text-sand-300 border border-cream-300 dark:border-espresso-600"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors border border-current px-3 py-1.5"
            >
              <FiExternalLink size={12} strokeWidth={1.5} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors"
            >
              <FiGithub size={12} strokeWidth={1.5} />
              Source
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="flex items-center gap-1.5 font-mono text-xs text-sand-500 dark:text-sand-500">
              <FiClock size={12} strokeWidth={1.5} />
              In Development
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-cream-50 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400 mb-4">
            What I have built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide text-espresso-800 dark:text-cream-100 mb-6">
            Projects
          </h2>
          <div className="w-12 h-px bg-sand-400 dark:bg-sand-600 my-6" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs tracking-wide px-4 py-2 border transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-espresso-800 text-cream-100 border-espresso-800 dark:bg-cream-200 dark:text-espresso-900 dark:border-cream-200'
                  : 'border-cream-300 dark:border-espresso-600 text-espresso-700 dark:text-cream-300 hover:border-sand-400 dark:hover:border-sand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}