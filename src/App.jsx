import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

/**
 * App — root component
 * Provides theme context and top-level routing
 */
function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className={`min-h-screen font-body bg-cream-100 dark:bg-espresso-900 transition-colors duration-300`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App