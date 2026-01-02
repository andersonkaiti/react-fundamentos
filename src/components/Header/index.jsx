import { Component } from 'react'
import { ThemeContext } from '../../contexts/ThemeProvider'
import { Container } from './styles'

export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, onToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button onClick={onToggleTheme} type="button">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    )
  }
}
