/**
 * Site-wide identity and SEO constants.
 *
 * Central source of truth for the canonical domain, display name, profile
 * image, and public social profiles. Reused by the <Seo> component and by
 * the JSON-LD structured data so metadata stays consistent everywhere.
 */
export const SITE_URL = 'https://www.rosemaryboahemaa.dev'
export const SITE_NAME = 'Rosemary Boahemaa Dwamena'
export const SITE_ALTERNATE_NAME = 'rosemaryboahemaa'
export const PROFILE_IMAGE = '/assets/images/rosemary-profile.jpg'

export const socialProfiles = [
  'https://github.com/Rosieeee344',
  'https://www.linkedin.com/in/rosemaryboahemaa',
  'https://x.com/dwamen1dwamena',
  'https://www.instagram.com/_rosemaryboahemaa/',
]

/**
 * ProfilePage / Person structured data for the homepage.
 * See https://schema.org/ProfilePage and https://schema.org/Person
 */
export const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Rosemary Boahemaa Dwamena — Student Software Developer',
  url: `${SITE_URL}/`,
  mainEntity: {
    '@type': 'Person',
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAME,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${PROFILE_IMAGE}`,
    jobTitle: 'Student Software Developer',
    description:
      'Student software developer, team lead at RoreDevs, Core maintainer at Codetopia Community, technical team at SprinTelex, and BTech ICT student from Koforidua, Ghana, building projects across web and full-stack development.',
    knowsAbout: [
      'Software Engineering',
      'Full-Stack Development',
      'Web Development',
      'React',
      'JavaScript',
    ],
    sameAs: socialProfiles,
  },
}
