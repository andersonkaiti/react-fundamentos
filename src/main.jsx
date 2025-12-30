import { createRoot } from 'react-dom/client'
import Layout from './components/Layout'
import GlobalStyle from './styles/global'

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <Layout />
  </>
)
