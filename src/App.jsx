//import css
import './App.css'
import './index.css'
import Page from './Page'
import ThemeProvider from './provider/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}

export default App
