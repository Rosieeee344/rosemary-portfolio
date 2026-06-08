/**
 * Experience — professional timeline
 */
const experiences = [
  {
    company: 'National Communications Authority',
    role: 'IT Intern',
    duration: '2 Months',
    type: 'Internship',
    responsibilities: [
      'Supported IT operations and day-to-day technical activities',
      'Assisted with Cybersecurity monitoring and incidents response',
      'Explored communication systems and network infrastructure',
      'Gained hands-on exposure to government IT environments',
    ],
  },
  {
    company: 'Codetopia Community',
    role: 'Volunteer Intern & Mentee',
    duration: 'Ongoing',
    type: 'Volunteer',
    responsibilities: [
      'Learning how to use Git and Github for version control and collaboration',
      'Collaborating with developers on community-driven projects',
      'Participating in mentorship activities and code reviews',
    ],
  },
  {
    company: 'Xolace',
    role: 'Student Ambassador',
    duration: 'Ongoing',
    type: 'Ambassador',
    responsibilities: [
      'Representing Xolace within the student community',
      'Promoting mental health awareness and student resources',
      'Connecting peers to support services and digital tools',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-cream-50 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="section-subtitle">Where I've been</p>
          <h2 className="section-title">Experience</h2>
          <div className="divider" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-cream-300 dark:bg-espresso-700 ml-3 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-sand-400 dark:border-sand-600 bg-cream-50 dark:bg-espresso-900 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sand-400 dark:bg-sand-500" />
                </div>

                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-light text-espresso-900 dark:text-cream-100">{exp.company}</h3>
                      <p className="font-mono text-sm text-sand-600 dark:text-sand-400 mt-1">{exp.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">{exp.type}</span>
                      <span className="tag">{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-sand-400 dark:bg-sand-500 flex-shrink-0" />
                        <span className="font-body text-sm text-espresso-700 dark:text-cream-300 leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}