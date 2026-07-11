/**
 * PageHeading — reusable eyebrow + title + optional description block
 * for standalone pages. Uses the site's established typography system.
 */
export default function PageHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-14">
      {eyebrow && (
        <p className="font-mono text-xs tracking-widest uppercase text-sand-600 dark:text-sand-400 mb-4">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-4xl md:text-5xl font-light tracking-wide text-espresso-800 dark:text-cream-100 mb-6">
        {title}
      </h1>
      <div className="w-12 h-px bg-sand-400 dark:bg-sand-600 my-6" />
      {description && (
        <p className="font-body text-base md:text-lg text-espresso-700 dark:text-cream-300 leading-relaxed max-w-2xl mt-4">
          {description}
        </p>
      )}
    </div>
  )
}
