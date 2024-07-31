//import css
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import NewsBoard from './components/newsBoard/NewsBoard'
import './index.css'

import { NewsProvider } from './provider'

function App() {
  return (
    <>
      <NewsProvider>
        <Header />
        <NewsBoard />
        <Footer />
      </NewsProvider>
    </>
  )
}

export default App
