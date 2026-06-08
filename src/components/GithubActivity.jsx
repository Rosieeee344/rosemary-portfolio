import { useState, useEffect } from 'react'
import { FiGithub, FiStar, FiGitBranch, FiCode, FiExternalLink } from 'react-icons/fi'

const GITHUB_USERNAME = 'Rosieeee344'

export default function GithubActivity() {
  const [repos, setRepos] = useState([])
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
          ),
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API error')
        }

        const user = await userRes.json()
        const reposData = await reposRes.json()

        setUserData(user)
        setRepos(reposData)
      } catch (err) {
        setError('Unable to load GitHub data at this time.')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHub()
  }, [])

  const stats = userData
    ? [
        { label: 'Public Repos', value: userData.public_repos },
        { label: 'Followers', value: userData.followers },
        { label: 'Following', value: userData.following },
        { label: 'Gists', value: userData.public_gists },
      ]
    : []

  return (
    <section
      id="github"
      className="py-24 px-6 md:px-12 lg:px-20 xl:px-32 bg-cream-100 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400 mb-4">
            Open Source
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide text-espresso-800 dark:text-cream-100 mb-6">
            GitHub Activity
          </h2>
          <div className="w-12 h-px bg-sand-400 dark:bg-sand-600 my-6" />
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex items-center gap-3 text-sand-500 dark:text-sand-500">
            <div className="w-4 h-4 border border-sand-400 border-t-transparent rounded-full animate-spin" />
            <span className="font-mono text-sm">Fetching GitHub data...</span>
          </div>
        )}

        {/* Error state */}
        {error && (
          <p className="font-mono text-sm text-sand-500 dark:text-sand-500">{error}</p>
        )}

        {/* Loaded state */}
        {!loading && !error && userData && (
          <>
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-cream-50 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 p-6 text-center"
                >
                  <p className="font-display text-3xl font-light text-espresso-900 dark:text-cream-100">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-sand-500 dark:text-sand-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Contribution graph */}
            <div className="bg-cream-50 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 p-6 mb-10 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400">
                  Contribution Graph
                </h3>
                <a
                  href={'https://github.com/' + GITHUB_USERNAME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors"
                >
                  <FiGithub size={12} strokeWidth={1.5} />
                  View Profile
                  <FiExternalLink size={10} strokeWidth={1.5} />
                </a>
              </div>
              <div className="w-full overflow-x-auto">
                <img
                  src={'https://ghchart.rshah.org/' + GITHUB_USERNAME}
                  alt="GitHub contribution chart"
                  className="w-full min-w-96 h-auto opacity-80 dark:opacity-60 dark:invert"
                />
              </div>
            </div>

            {/* Recent repos */}
            <h3 className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400 mb-4">
              Recent Repositories
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-3 bg-cream-50 dark:bg-espresso-800 border border-cream-300 dark:border-espresso-700 p-5 hover:border-sand-400 dark:hover:border-sand-600 transition-colors group"
                >
                  {/* Repo name */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 text-espresso-800 dark:text-cream-200">
                      <FiCode size={14} strokeWidth={1.5} />
                      <span className="font-mono text-sm font-medium group-hover:underline">
                        {repo.name}
                      </span>
                    </div>
                    <FiExternalLink
                      size={12}
                      strokeWidth={1.5}
                      className="text-sand-400 dark:text-sand-600 flex-shrink-0"
                    />
                  </div>

                  {/* Description */}
                  {repo.description && (
                    <p className="font-body text-xs text-espresso-600 dark:text-cream-400 leading-relaxed line-clamp-2">
                      {repo.description}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center gap-4 mt-auto">
                    {repo.language && (
                      <span className="flex items-center gap-1 font-mono text-xs text-sand-500 dark:text-sand-500">
                        <span className="w-2 h-2 rounded-full bg-sand-400 dark:bg-sand-500" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 font-mono text-xs text-sand-500 dark:text-sand-500">
                      <FiStar size={10} strokeWidth={1.5} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-xs text-sand-500 dark:text-sand-500">
                      <FiGitBranch size={10} strokeWidth={1.5} />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}