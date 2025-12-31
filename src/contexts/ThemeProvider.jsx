import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import themes from '../styles/themes'

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme])

  function handleToggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      <StyledComponentsThemeProvider theme={currentTheme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
