export default function About() {
  const highlights = [
    { number: '3+', label: 'Years Learning' },
    { number: '7+', label: 'Projects Built' },
    { number: '2', label: 'Internships' },
    { number: '1', label: 'Ambassador Role' },
  ]

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-cream-50 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: heading and stats */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400 mb-4">
              Who I am
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide text-espresso-800 dark:text-cream-100 mb-6">
              About Me
            </h2>
            <div className="w-12 h-px bg-sand-400 dark:bg-sand-600 my-6" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="border-l-2 border-sand-300 dark:border-sand-700 pl-4"
                >
                  <p className="font-display text-4xl font-light text-espresso-900 dark:text-cream-100">
                    {h.number}
                  </p>
                  <p className="font-mono text-xs text-sand-600 dark:text-sand-400 mt-1">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-12 border-l-2 border-sand-400 dark:border-sand-600 pl-5 italic">
              <p className="font-display text-xl font-light text-espresso-700 dark:text-cream-300 leading-relaxed">
                Technology is most powerful when it solves the problems of everyday people.
              </p>
            </blockquote>
          </div>

          {/* Right: bio text */}
          <div className="space-y-5 font-body text-base text-espresso-700 dark:text-cream-300 leading-relaxed">
            <p>
              I am an ICT student at{' '}
              <span className="font-medium text-espresso-900 dark:text-cream-100">
                Koforidua Technical University
              </span>{' '}
              with a strong interest in web development and building practical digital solutions.
            </p>
            <p>
              I have leadership experience as a{' '}
              <span className="font-medium text-espresso-900 dark:text-cream-100">
                Class Representative
              </span>{' '}
              and as a member of the{' '}
              <span className="font-medium text-espresso-900 dark:text-cream-100">
                Ghana Union of University Class Representatives (GUUCR)
              </span>
              , where I contribute to student coordination and communication.
            </p>
            <p>
              I gained hands-on industry experience during my internship at the{' '}
              <span className="font-medium text-espresso-900 dark:text-cream-100">
                National Communications Authority
              </span>
              , where I supported IT operations and explored communication systems.
            </p>
            <p>
              I am currently a{' '}
              <span className="font-medium text-espresso-900 dark:text-cream-100">
                volunteer intern and mentee at Codetopia Community
              </span>{' '}
              and an{' '}
              <span className="font-medium text-espresso-900 dark:text-cream-100">
                Ambassador for Xolace
              </span>
              .
            </p>
            <p>
              I enjoy creating websites and web-based tools, including a class attendance system.
              I am currently learning and building projects with{' '}
              <span className="font-medium text-espresso-900 dark:text-cream-100">
                React.js, Tailwind CSS
              </span>
              , and modern frontend technologies.
            </p>
            <p>
              My goal is to leverage technology to solve real-world challenges and build impactful
              digital products that improve everyday experiences.
            </p>

            
          </div>
        </div>
      </div>
    </section>
  )
}
