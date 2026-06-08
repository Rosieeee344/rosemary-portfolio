import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Leadership from '../components/Leadership'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Blog from '../components/Blog'
import GithubActivity from '../components/GithubActivity'
import Contact from '../components/Contact'

/**
 * Home — assembles all portfolio sections in order
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Leadership />
      <Projects />
      <Education />
      <Blog />
      <GithubActivity />
      <Contact />
    </main>
  )
}