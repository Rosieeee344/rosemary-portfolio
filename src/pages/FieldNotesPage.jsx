import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Seo from '../components/Seo'
import PageHeading from '../components/PageHeading'
import { blogPosts } from '../data/blogPosts'

function ArticleCard({ post }) {
  return (
    <Link
      to={`/field-notes/${post.slug}`}
      className="card group block hover:translate-y-[-2px] transition-transform duration-200"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="tag">{post.category}</span>
        <span className="font-mono text-xs text-sand-500 dark:text-sand-500">
          {post.readTime}
        </span>
      </div>

      <h2 className="font-display text-xl font-light text-espresso-900 dark:text-cream-100 leading-snug mb-2 group-hover:text-sand-700 dark:group-hover:text-sand-300 transition-colors">
        {post.title}
      </h2>

      <p className="font-body text-sm text-espresso-600 dark:text-cream-400 leading-relaxed mb-4">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-sand-500 dark:text-sand-500">
          {post.date}
        </span>
        <span className="flex items-center gap-1 font-mono text-xs text-espresso-700 dark:text-cream-300 group-hover:gap-2 transition-all">
          Read more <FiArrowRight size={12} strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  )
}

export default function FieldNotesPage() {
  return (
    <>
      <Seo
        title="Field Notes — Rosemary Boahemaa Dwamena"
        description="Short reflections from Rosemary Boahemaa Dwamena on building software, lessons from internships, and learning as a student software developer."
        path="/field-notes"
        type="website"
      />
      <main className="section-padding pt-32 bg-cream-100 dark:bg-espresso-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageHeading
          eyebrow="Field Notes"
          title="Writing from the journey."
          description="Short reflections on building software, lessons from internships, and what I'm learning along the way. These are drafts — rough, honest, and evolving."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      </main>
    </>
  )
}
