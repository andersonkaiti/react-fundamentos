import { useTheme } from '../../contexts/ThemeProvider'
import { Container } from './styles'

export default function Footer() {
  const { theme, onToggleTheme } = useTheme()

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button onClick={onToggleTheme} type="button">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </Container>
  )
}
