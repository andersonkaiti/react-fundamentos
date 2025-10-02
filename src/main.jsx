import { createRoot } from 'react-dom/client'
import App from './components/App'
import GlobalStyle from './styles/global'

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <App />
  </>
)
