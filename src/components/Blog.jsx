import { blogPosts } from '../data/blogPosts'
import { FiArrowRight } from 'react-icons/fi'

/**
 * BlogCard — individual post preview
 */
function BlogCard({ post }) {
  return (
    <article className="card group cursor-pointer hover:translate-y-[-2px] transition-transform duration-200">
      {/* Category + read time */}
      <div className="flex items-center justify-between mb-4">
        <span className="tag">{post.category}</span>
        <span className="font-mono text-xs text-sand-500 dark:text-sand-500">{post.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-light text-espresso-900 dark:text-cream-100 leading-snug mb-3 group-hover:text-sand-700 dark:group-hover:text-sand-300 transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="font-body text-sm text-espresso-600 dark:text-cream-400 leading-relaxed mb-5">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-sand-500 dark:text-sand-500">{post.date}</span>
        <span className="flex items-center gap-1 font-mono text-xs text-espresso-700 dark:text-cream-300 group-hover:gap-2 transition-all">
          Read more <FiArrowRight size={12} strokeWidth={1.5} />
        </span>
      </div>
    </article>
  )
}

/**
 * Blog — article grid with placeholder posts
 */
export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-cream-50 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="section-subtitle">Thoughts & Reflections</p>
          <h2 className="section-title">Blog</h2>
          <div className="divider" />
          <p className="font-body text-sm text-sand-600 dark:text-sand-400 mt-4 max-w-md">
            Writing about my learning journey, internship experiences, and thoughts on technology and entrepreneurship.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-10 text-center">
          <p className="font-mono text-xs text-sand-500 dark:text-sand-500">
            Full blog coming soon — articles in progress
          </p>
        </div>
      </div>
    </section>
  )
}