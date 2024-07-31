import NewsCardShort from './NewsCardShort'
import { useContext } from 'react'
import { NewsContext } from '../../context/index'

export default function RelatedNews() {
  const { newsData } = useContext(NewsContext)
  //   const allArticles = newsData.articles
  const allArticles = newsData.articles.slice(0, 6)

  return (
    <>
      <div className="self-start col-span-12 xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          {allArticles.map((article, index) => (
            <NewsCardShort key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  )
}
