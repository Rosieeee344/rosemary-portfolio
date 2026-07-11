import { FiArrowRight } from 'react-icons/fi'
import PageHeading from '../components/PageHeading'
import Projects from '../components/Projects'

export default function ProjectsPage() {
  return (
    <main className="section-padding pt-32 bg-cream-50 dark:bg-espresso-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageHeading
          eyebrow="Projects"
          title="Things I've designed and built."
          description="A selection of products and tools I've shipped or am actively developing — mostly full-stack web apps built to solve real problems for students and communities."
        />

        <Projects showHeading={false} showBorder={false} />

        <div className="mt-16 pt-10 border-t border-cream-300 dark:border-espresso-700 text-center">
          <p className="font-mono text-xs text-sand-500 dark:text-sand-500">
            More projects on the way.&nbsp;
            <a
              href="https://github.com/Rosieeee344"
              target="_blank"
              rel="noopener noreferrer"
              className="text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors inline-flex items-center gap-1"
            >
              Follow on GitHub <FiArrowRight size={12} strokeWidth={1.5} />
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
