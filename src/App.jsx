import Layout from './components/Layout'
import { useTheme } from './contexts/ThemeProvider'
import GlobalStyle from './styles/global'

export default function App() {
  const { theme, onToggleTheme } = useTheme()

  return (
    <>
      <GlobalStyle />

      <button onClick={onToggleTheme} type="button">
        Toggle theme
      </button>

      {theme === 'dark' && <Layout />}
    </>
  )
}
