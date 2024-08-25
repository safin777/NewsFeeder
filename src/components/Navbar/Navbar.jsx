import { useContext } from 'react'
import LWSLogo from '../../assets/logo.png'
import LWSLogo_light from '../../assets/logo_light.png'
import { ThemeContext } from '../../context/index.js'
import NavDate from './NavDate.jsx'

export default function Navbar({ children }) {
  const { isDark, setIsDark } = useContext(ThemeContext)
  const handleToggleDarkMode = () => {
    setIsDark((prevDark) => !prevDark)
  }
  return (
    <nav className="py-6 border-b border-black md:py-8">
      <div className="container flex flex-wrap items-center justify-between gap-6 mx-auto">
        <NavDate />
        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[165px]"
            src={!isDark ? LWSLogo : LWSLogo_light}
            alt="Lws"
          />
        </a>
        <div className="flex items-center space-x-3 lg:space-x-8">
          {/* Search */}
          <button
            onClick={handleToggleDarkMode}
            className={`rounded-full ${
              isDark ? 'bg-gray-700' : 'bg-white'
            } shadow-md p-1`}
          >
            {isDark ? '🌙' : '🌞'}
          </button>
        </div>
      </div>
      {children}
    </nav>
  )
}
