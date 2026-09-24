import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FieldNotesPage from './pages/FieldNotesPage'
import FieldNotePage from './pages/FieldNotePage'

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
        <Route path="/field-notes" element={<FieldNotesPage />} />
        <Route path="/field-notes/:slug" element={<FieldNotePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
