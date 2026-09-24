import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import { FiArrowRight } from 'react-icons/fi'

/**
 * BlogCard — individual post preview linking to its article page
 */
function BlogCard({ post }) {
  return (
    <Link
      to={`/field-notes/${post.slug}`}
      className="card group block hover:translate-y-[-2px] transition-transform duration-200"
    >
      {/* Category + read time */}
      <div className="flex items-center justify-between mb-3">
        <span className="tag">{post.category}</span>
        <span className="font-mono text-xs text-sand-500 dark:text-sand-500">{post.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-light text-espresso-900 dark:text-cream-100 leading-snug mb-2 group-hover:text-sand-700 dark:group-hover:text-sand-300 transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="font-body text-sm text-espresso-600 dark:text-cream-400 leading-relaxed mb-4">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-sand-500 dark:text-sand-500">{post.date}</span>
        <span className="flex items-center gap-1 font-mono text-xs text-espresso-700 dark:text-cream-300 group-hover:gap-2 transition-all">
          Read more <FiArrowRight size={12} strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  )
}

/**
 * Blog — compact preview of the latest Field Notes
 */
export default function Blog() {
  const posts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="section-padding bg-cream-50 dark:bg-espresso-900 border-t border-cream-300 dark:border-espresso-700">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="section-subtitle">Blog</p>
          <h2 className="section-title">Field Notes</h2>
          <div className="divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Link to full blog page */}
        <div className="mt-8 text-center">
          <Link
            to="/field-notes"
            className="font-mono text-xs text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors inline-flex items-center gap-1"
          >
            View all field notes <FiArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
