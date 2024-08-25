import { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import { ThemeContext } from './context'
import Categories from './components/Navbar/Categories'

export default function Page() {
  const { isDark } =  useContext(ThemeContext)
  return (
    <div className={`${isDark ? 'bg-gray-700' : ''}`}>
      <Navbar>
        <Categories/>
      </Navbar>
    </div>
  )
}
