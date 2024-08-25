import { useContext } from 'react'
import { CATEGORIES } from '../../constants/constant.js'
import { ThemeContext } from '../../context/index.js'


const Categories = () => {
    const { isDark } = useContext(ThemeContext)

  return (
    <div>
      <h2>List of categories</h2>
    </div>
  )
}

export default Categories


