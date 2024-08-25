import { useState, useEffect } from 'react'
import { INITIAL_CATEGORY } from '../constants/constant.js'
const useNewsQuery = (search) => {
  const [newsData, setNewsData] = useState({
    data: {},
    message: '',
  })

  const baseUrl = import.meta.env.VITE_API_URL
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [category, setCategory] = useState(INITIAL_CATEGORY)

  const fetchUrl = search
    ? `${baseUrl}searchq=${search}`
    : `${baseUrl}top-headlines?category=${category.toLowerCase()}}`

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const res = await fetch(fetchUrl)
        if (!res.ok) {
          const errorMessage = `News fetching failed ${res.status}`
          throw new Error(errorMessage)
        } else {
          const data = await res.json()
          setNewsData((prevData) => ({
            ...prevData,
            data,
          }))
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }

      let ignore = false
      if (!ignore) {
        fetchNews()
      }

      return () => (ignore = true)
    }
  }, [fetchUrl, category])

  return { newsData, setNewsData, loading, error, category, setCategory }
}

export default useNewsQuery;
