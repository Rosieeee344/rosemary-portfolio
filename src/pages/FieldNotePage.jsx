import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Seo from '../components/Seo'
import { SITE_URL, SITE_NAME } from '../data/site'
import { blogPosts } from '../data/blogPosts'

/**
 * FieldNotePage — individual article page (placeholder content).
 * Resolves the post by its slug and renders a full article layout.
 */
export default function FieldNotePage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  const articleJsonLd = useMemo(() => {
    if (!post) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.isoDate,
      articleSection: post.category,
      mainEntityOfPage: `${SITE_URL}/field-notes/${post.slug}`,
      author: { '@type': 'Person', name: SITE_NAME, url: `${SITE_URL}/` },
      publisher: { '@type': 'Person', name: SITE_NAME, url: `${SITE_URL}/` },
    }
  }, [post])

  if (!post) {
    return (
      <main className="section-padding pt-32 bg-cream-100 dark:bg-espresso-900 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/field-notes"
            className="inline-flex items-center gap-2 font-mono text-xs text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors"
          >
            <FiArrowLeft size={14} strokeWidth={1.5} />
            Back to Field Notes
          </Link>
          <p className="font-body text-sm text-sand-500 dark:text-sand-500 mt-8">
            Field note not found.
          </p>
        </div>
      </main>
    )
  }

  return (
    <>
      <Seo
        title={`${post.title} — Rosemary Boahemaa Dwamena`}
        description={post.excerpt}
        path={`/field-notes/${post.slug}`}
        type="article"
        jsonLd={articleJsonLd}
      />
      <main className="section-padding pt-32 bg-cream-100 dark:bg-espresso-900 min-h-screen">
      <article className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          to="/field-notes"
          className="inline-flex items-center gap-2 font-mono text-xs text-espresso-700 dark:text-cream-300 hover:text-espresso-900 dark:hover:text-cream-100 transition-colors"
        >
          <FiArrowLeft size={14} strokeWidth={1.5} />
          Back to Field Notes
        </Link>

        {/* Category + read time */}
        <div className="flex items-center gap-3 mt-10 mb-6">
          <span className="tag">{post.category}</span>
          <span className="font-mono text-xs text-sand-500 dark:text-sand-500">{post.readTime}</span>
        </div>

        {/* Title + date */}
        <h1 className="font-display text-3xl md:text-4xl font-light text-espresso-900 dark:text-cream-100 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="font-mono text-xs text-sand-500 dark:text-sand-500">{post.date}</p>

        <div className="divider" />

        {/* Article body */}
        <div className="space-y-6 font-body text-base md:text-lg text-espresso-700 dark:text-cream-300 leading-relaxed">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
      </main>
    </>
  )
}
