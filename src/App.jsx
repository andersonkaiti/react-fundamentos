import { useLayoutEffect } from 'react'
import Layout from './components/Layout'
import { useTheme } from './contexts/ThemeProvider'
import GlobalStyle from './styles/global'

export default function App() {
  const { theme } = useTheme()

  useLayoutEffect(() => {
    for (let i = 0; i <= 15_000; i++) {
      console.debug(i)
    }
  }, [theme])

  return (
    <>
      <GlobalStyle />

      <Layout />
    </>
  )
}
