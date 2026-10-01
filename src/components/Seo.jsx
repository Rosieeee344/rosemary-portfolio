import { useEffect } from 'react'
import { SITE_URL, SITE_NAME, PROFILE_IMAGE } from '../data/site'

function upsertMeta(attr, key, content) {
  if (!content) return
  const selector = attr === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(data) {
  let el = document.getElementById('page-jsonld')
  if (el) el.remove()
  if (!data) return
  el = document.createElement('script')
  el.type = 'application/ld+json'
  el.id = 'page-jsonld'
  el.textContent = JSON.stringify(data)
  document.head.appendChild(el)
}

/**
 * Seo — headless per-route metadata manager.
 *
 * Renders nothing visually; updates <title>, meta description, Open Graph,
 * Twitter card, canonical URL, and JSON-LD for the current route. This keeps
 * a client-rendered React app crawlable without adding SSR or new deps.
 */
export default function Seo({
  title,
  description,
  path = '/',
  type = 'website',
  image = PROFILE_IMAGE,
  jsonLd = null,
}) {
  useEffect(() => {
    const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = title

    upsertMeta('name', 'description', description)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:image', imageUrl)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)

    upsertCanonical(url)
    upsertJsonLd(jsonLd)
  }, [title, description, path, type, image, jsonLd])

  return null
}
