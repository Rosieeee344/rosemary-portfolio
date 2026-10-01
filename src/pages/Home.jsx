import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import { profilePageJsonLd } from '../data/site'
import Hero from '../components/Hero'
import About from '../components/About'
import Currently from '../components/Currently'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Awards from '../components/Awards'
import Blog from '../components/Blog'
import GithubActivity from '../components/GithubActivity'
import Contact from '../components/Contact'

/**
 * Home — assembles all portfolio sections in order.
 * Supports scroll-to-section navigation via location.state.scrollTo
 * (see Navbar.jsx). Dedicated pages (About, Field Notes,
 * Projects) remain available as deeper, focused views.
 */
export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const id = location.state?.scrollTo
    if (id) {
      const timeout = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [location])

  return (
    <>
      <Seo
        title="Rosemary Boahemaa Dwamena — Student Software Developer"
        description="Rosemary Boahemaa Dwamena is a student software developer, team lead at RoreDevs, Core maintainer at Codetopia Community, technical team at SprinTelex, and BTech ICT student in Koforidua Technical University, Ghana. Explore her projects, experience, education, awards, and field notes."
        path="/"
        type="website"
        jsonLd={profilePageJsonLd}
      />
      <main>
        <Hero />
        <About />
        <Currently />
        <Experience />
        <Education />
        <Projects />
        <Awards />
        <Blog />
        <GithubActivity />
        <Contact />
      </main>
    </>
  )
}
