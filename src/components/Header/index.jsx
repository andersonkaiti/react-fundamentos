import { useTheme } from '../../contexts/ThemeProvider'
import { Container } from './styles'

export default function Header() {
  const { theme, onToggleTheme } = useTheme()

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={onToggleTheme} type="button">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </Container>
  )
}
