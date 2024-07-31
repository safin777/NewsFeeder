import { NewsContext } from "../context";
import { useNewsData } from "../hooks";


export default function NewsProvider({ children }) {
    const { newsData, isLoading, isError } = useNewsData()
    return (
        <NewsContext.Provider value={{ newsData, isLoading, isError }}>
        {children}
        </NewsContext.Provider>
    )
}