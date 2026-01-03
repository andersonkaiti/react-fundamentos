import { Component, createContext, useContext } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import themes from '../styles/themes'

export const ThemeContext = createContext()

const THEME_KEY = 'theme'

export default class ThemeProvider extends Component {
  state = {
    theme: localStorage.getItem(THEME_KEY) || 'dark',
  }

  handleToggleTheme = () => {
    const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark'

    this.setState({ theme: nextTheme }, () => {
      localStorage.setItem(THEME_KEY, nextTheme)
    })
  }

  render() {
    return (
      <ThemeContext
        value={{
          theme: this.state.theme,
          onToggleTheme: this.handleToggleTheme,
        }}
      >
        <StyledComponentsThemeProvider theme={themes[this.state.theme]}>
          {this.props.children}
        </StyledComponentsThemeProvider>
      </ThemeContext>
    )
  }
}

export function useTheme() {
  return useContext(ThemeContext)
}
