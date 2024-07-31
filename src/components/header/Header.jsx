import CategoryNav from './CategoryNav'
import Search from './Search'

export default function Header() {
  return (
    <>
      <nav className="py-6 border-b border-black md:py-8">
        <Search />
        <CategoryNav />
      </nav>
    </>
  )
}
