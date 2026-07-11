import PageHeading from '../components/PageHeading'
import { FiHeart, FiCode, FiBookOpen } from 'react-icons/fi'

const values = [
  {
    icon: FiBookOpen,
    title: 'Curiosity First',
    description:
      'Everything I build starts with a question — why does this work the way it does? I believe the best engineers never stop being curious.',
  },
  {
    icon: FiCode,
    title: 'Learning in Public',
    description:
      'I document my journey openly — through commits, pull requests, and writing. Teaching what I learn helps me understand it deeper.',
  },
  {
    icon: FiHeart,
    title: 'Building with Care',
    description:
      'I care about writing clean, accessible, and genuinely useful code. Technology is most powerful when it serves real people solving real problems.',
  },
]

export default function AboutPage() {
  return (
    <main className="section-padding pt-32 bg-cream-100 dark:bg-espresso-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageHeading
          eyebrow="About"
          title="From curiosity to code."
          description="A story about what happens when you start asking how things work — and never stop."
        />

        {/* Personal story */}
        <div className="max-w-3xl space-y-6 font-body text-base md:text-lg text-espresso-700 dark:text-cream-300 leading-relaxed">
          <p>
            I&rsquo;m Rosemary, an ICT student at{' '}
            <span className="font-medium text-espresso-900 dark:text-cream-100">
              Koforidua Technical University
            </span>{' '}
            in Ghana. My journey into software started the way it probably starts for a lot
            of people — with a simple question: <em>how does this website actually work?</em>
          </p>

          <p>
            That question pulled me into a world I didn&rsquo;t know existed. HTML led to CSS,
            CSS led to JavaScript, and JavaScript led to building things that real people could
            actually use. What began as casual curiosity became something I couldn&rsquo;t put
            down — a craft I wanted to get genuinely good at.
          </p>

          <p>
            Most of my growth has come from contributing to open source and learning alongside
            other developers. As a core maintainer at{' '}
            <span className="font-medium text-espresso-900 dark:text-cream-100">
              Codetopia Community
            </span>
            , I collaborate on real projects, review pull requests, and mentor peers who
            are also early in their journey. Working in the open has taught me something
            important: great software isn&rsquo;t written by lone geniuses — it&rsquo;s built
            by teams that communicate well, give honest feedback, and support each other.
          </p>

          <p>
            I&rsquo;m currently deepening my full-stack skills with{' '}
            <span className="font-medium text-espresso-900 dark:text-cream-100">
              React, Node.js, Express, and PostgreSQL
            </span>
            . I&rsquo;m documenting my learning journey as I go — through projects like{' '}
            <span className="font-medium text-espresso-900 dark:text-cream-100">Acadex</span>{' '}
            and{' '}
            <span className="font-medium text-espresso-900 dark:text-cream-100">
              GNUTS Skills Hub
            </span>{' '}
            that solve real problems for students. I also co-founded{' '}
            <span className="font-medium text-espresso-900 dark:text-cream-100">NovuTech</span>
            , a student-led developer group whose mission is to leverage technology to build
            impactful products for everyday people.
          </p>

          <p>
            Looking ahead, I&rsquo;m interested in the intersection of software engineering,
            accessibility, and developer tooling. I want to work on products that are not
            only powerful but also thoughtful — tools that make people&rsquo;s lives simpler
            and more dignified. I&rsquo;m actively seeking internship and graduate
            opportunities where I can keep growing, keep shipping, and keep learning from
            people who believe in building things well.
          </p>

          <p>
            My long-term goal is to become a great full-stack engineer who mentors others
            the way I was mentored — paying forward the patience, kindness, and rigour that
            shaped my own path. I&rsquo;m still early in my journey, but I&rsquo;m deeply
            intentional about where I&rsquo;m headed.
          </p>
        </div>

        {/* Values */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.title} className="card p-8">
                <div className="flex-shrink-0 w-10 h-10 border border-sand-300 dark:border-sand-700 flex items-center justify-center text-sand-600 dark:text-sand-400 mb-5">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-light text-espresso-900 dark:text-cream-100 mb-3">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-espresso-600 dark:text-cream-400 leading-relaxed">
                  {v.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
