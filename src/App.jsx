import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import GlobalStyle from './styles/global'
import themes from './styles/themes'

export default function App() {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme])

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  )
}
