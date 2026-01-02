import { createRoot } from 'react-dom/client'
import App from './App'
import ThemeProvider from './contexts/ThemeProvider'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App propName="propValue" />
  </ThemeProvider>
)
