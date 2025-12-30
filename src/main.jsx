import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import GlobalStyle from './styles/global'
import themes from './styles/themes'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={themes.light}>
    <GlobalStyle />
    <Layout />
  </ThemeProvider>
)
