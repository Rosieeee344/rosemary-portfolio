import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FiBook, FiBriefcase, FiAward, FiUsers, FiFolder, FiZap } from 'react-icons/fi'
import PageHeading from '../components/PageHeading'
import milestones from '../data/journey'

const typeMeta = {
  education:   { icon: FiBook,     label: 'Education' },
  work:        { icon: FiBriefcase, label: 'Work' },
  achievement: { icon: FiAward,    label: 'Achievement' },
  leadership:  { icon: FiUsers,    label: 'Leadership' },
  project:     { icon: FiFolder,   label: 'Project' },
  learning:    { icon: FiZap,      label: 'Learning' },
}

function MilestoneCard({ milestone }) {
  const meta = typeMeta[milestone.type] || typeMeta.achievement

  return (
    <div className="relative md:pl-14">
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-sand-400 dark:border-sand-600 bg-cream-100 dark:bg-espresso-900 items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-sand-400 dark:bg-sand-500" />
      </div>

      <div className="card">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display text-xl font-light text-espresso-900 dark:text-cream-100">
              {milestone.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="tag">{meta.label}</span>
            <span className="tag">{milestone.date}</span>
          </div>
        </div>

        <p className="font-body text-sm text-espresso-700 dark:text-cream-300 leading-relaxed">
          {milestone.description}
        </p>

        {milestone.link && (
          <div className="mt-3">
            <a
              href={milestone.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors border border-current px-3 py-1.5"
            >
              View Project &rarr;
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function JourneyPage() {
  const grouped = useMemo(() => {
    const map = {}
    milestones.forEach((m) => {
      if (!map[m.date]) map[m.date] = []
      map[m.date].push(m)
    })
    return Object.entries(map).sort(([a], [b]) => b.localeCompare(a))
  }, [])

  return (
    <main className="section-padding pt-32 bg-cream-50 dark:bg-espresso-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageHeading
          eyebrow="Journey"
          title="How I got here — and where I'm going."
          description="Every milestone, late-night debugging session, open source pull request, and leadership role on a timeline. This page grows as I do."
        />

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-px bg-cream-300 dark:bg-espresso-700 ml-[11px] hidden md:block"
          />

          <div className="space-y-16">
            {grouped.map(([year, items]) => (
              <div key={year}>
                {/* Year divider */}
                <div className="relative md:pl-14 mb-8">
                  <span className="font-mono text-sm tracking-widest uppercase text-sand-500 dark:text-sand-400 bg-cream-50 dark:bg-espresso-900 relative z-10 pr-4">
                    {year}
                  </span>
                </div>

                <div className="space-y-10">
                  {items.map((milestone) => (
                    <MilestoneCard key={milestone.id} milestone={milestone} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-cream-300 dark:border-espresso-700 text-center">
          <p className="font-mono text-xs text-sand-500 dark:text-sand-500">
            More milestones ahead.&nbsp;
            <Link
              to="/projects"
              className="text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors underline underline-offset-4"
            >
              Check out what I&rsquo;m building now &rarr;
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
