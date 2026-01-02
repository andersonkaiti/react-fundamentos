import { ThemeContext } from '../../contexts/ThemeProvider'
import { Container } from './styles'

export default function Footer() {
  return (
    <ThemeContext.Consumer>
      {({ theme, onToggleTheme }) => (
        <Container>
          <span>JStack's Blog. Todos os direitos reservados.</span>
          <button onClick={onToggleTheme} type="button">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </Container>
      )}
    </ThemeContext.Consumer>
  )
}
