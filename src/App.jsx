import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import JourneyPage from './pages/JourneyPage'
import FieldNotesPage from './pages/FieldNotesPage'
import ProjectsPage from './pages/ProjectsPage'

/**
 * App — root component with theme context and top-level routing.
 */
function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className={`min-h-screen font-body bg-cream-100 dark:bg-espresso-900 transition-colors duration-300`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/field-notes" element={<FieldNotesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
