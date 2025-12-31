import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import themes from '../styles/themes'

export const ThemeContext = createContext()

const THEME_KEY = 'theme'

export default function ThemeProvider({ children }) {
  const defaultTheme = localStorage.getItem(THEME_KEY) || 'dark'

  const [theme, setTheme] = useState(defaultTheme)

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme])

  function handleToggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(nextTheme)

    localStorage.setItem(THEME_KEY, nextTheme)
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
