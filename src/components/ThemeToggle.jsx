import { Sun, Moon } from 'lucide-react'

/**
 * ThemeToggle — minimal icon button to switch between light and dark modes
 */
export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 text-espresso-800 dark:text-cream-200 hover:text-sand-600 dark:hover:text-sand-400 transition-colors duration-200"
    >
      {theme === 'light' ? (
        <Moon size={18} strokeWidth={1.5} />
      ) : (
        <Sun size={18} strokeWidth={1.5} />
      )}
    </button>
  )
}