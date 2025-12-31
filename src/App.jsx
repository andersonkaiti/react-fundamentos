import { useEffect } from 'react'
import Layout from './components/Layout'
import { useTheme } from './contexts/ThemeProvider'
import GlobalStyle from './styles/global'

export default function App() {
  const { theme } = useTheme()

  // Executa sempre que qualquer coisa é alterada
  useEffect(() => {
    console.debug('useEffect executou 1')
  })

  // Executa toda vez que o theme muda
  useEffect(() => {
    console.debug('useEffect executou 2')
  }, [theme])

  // Executa apenas quando o componente é montado
  useEffect(() => {
    console.debug('useEffect executou 3')
  }, [])

  return (
    <>
      <GlobalStyle />

      <Layout />
    </>
  )
}
