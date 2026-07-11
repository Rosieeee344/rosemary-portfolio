import Hero from '../components/Hero'
import Currently from '../components/Currently'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import GithubActivity from '../components/GithubActivity'
import Contact from '../components/Contact'

/**
 * Home — assembles all portfolio sections in order.
 * Blog section moved to /field-notes as a dedicated page.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Currently />
      <Skills />
      <Experience />
      <Education />
      <GithubActivity />
      <Contact />
    </main>
  )
}
