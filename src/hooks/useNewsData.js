import { useState, useEffect } from 'react'

const useNewsData = () => {
  //Todo: state for news data

  const [newsData, setNewsData] = useState({
    articles: [],
  })

  // Todo: state for url

    const [url, setUrl] = useState('http://localhost:8000/v2/top-headlines')

  //Todo: Loadind state

  const [loading, setLoading] = useState({
    state: false,
    message: '',
  })

  //Todo: Error State
  const [error, setError] = useState(null)

  //Todo: Fetch News Data
  const fetchNewsData = async (url) => {
    try {
      setLoading({
        state: true,
        message: 'Loading News Data...',
      })

      const response = await fetch(url)

      if (!response.ok) {
        const errorMsg = `An error has occured: ${response.status}`
        throw new Error(errorMsg)
      }

      const data = await response.json()
      console.log("useNewsData -> data", data)
      const updateNewsData = {
        ...data,
        articles: data.articles,
        
      }
      setNewsData(updateNewsData)
    } catch (error) {
      setError(error)
    } finally {
      setLoading({
        state: false,
        message: '',
      })
    }
  }

  //todo: useEffect

  useEffect(() => {
    fetchNewsData(url)
  }, [url])

  //todo: return state and fetch function

  return { newsData, loading, error, fetchNewsData }
}

export default useNewsData
