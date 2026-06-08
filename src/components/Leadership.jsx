import { FiUsers, FiAward } from 'react-icons/fi'

/**
 * Leadership — leadership roles and student organizations
 */
const leadershipRoles = [
  {
    title: 'Class Representative',
    description: 'Elected class representative responsible for student-faculty communication, coordination, and advocacy on academic matters.',
    icon: FiUsers,
  },
  {
    title: 'Member, GUUCR',
    description: 'Active member of the Ghana Union of University Class Representatives — contributing to national student coordination, communication, and policy.',
    icon: FiAward,
  },
]

const organizations = [
  {
    name: 'KTU COMPSSA Web Development Club',
    role: 'Member',
    description: 'Participating in collaborative web projects, workshops, and peer learning sessions focused on modern web technologies.',
  },
  {
    name: 'KTU COMPSSA Women in Tech Club',
    role: 'Member',
    description: 'Engaging with a community that empowers women in technology through mentorship, networking, and skill-building events.',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-cream-100 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="section-subtitle">Leadership & Community</p>
          <h2 className="section-title">Leadership</h2>
          <div className="divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Leadership Roles */}
          <div>
            <h3 className="font-mono text-xs tracking-widest2 uppercase text-sand-600 dark:text-sand-400 mb-6">Leadership Roles</h3>
            <div className="space-y-4">
              {leadershipRoles.map((role) => {
                const Icon = role.icon
                return (
                  <div key={role.title} className="card flex gap-5">
                    <div className="flex-shrink-0 mt-1 w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-light text-espresso-900 dark:text-cream-100">{role.title}</h4>
                      <p className="font-body text-sm text-espresso-700 dark:text-cream-300 leading-relaxed mt-2">{role.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Student Organizations */}
          <div>
            <h3 className="font-mono text-xs tracking-widest2 uppercase text-sand-600 dark:text-sand-400 mb-6">Student Organizations</h3>
            <div className="space-y-4">
              {organizations.map((org) => (
                <div key={org.name} className="card">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-display text-xl font-light text-espresso-900 dark:text-cream-100">{org.name}</h4>
                    <span className="tag flex-shrink-0">{org.role}</span>
                  </div>
                  <p className="font-body text-sm text-espresso-700 dark:text-cream-300 leading-relaxed">{org.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}