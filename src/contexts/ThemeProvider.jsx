import { createContext, useContext, useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import themes from '../styles/themes'

export const ThemeContext = createContext()

const THEME_KEY = 'theme'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem(THEME_KEY) || 'dark')

  const handleToggleTheme = () => {
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
      <StyledComponentsThemeProvider theme={themes[theme]}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
