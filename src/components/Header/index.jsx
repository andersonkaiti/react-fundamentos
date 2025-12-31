import { Container } from './styles'

export default function Header({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={onToggleTheme} type="button">
        {selectedTheme === 'dark' ? '☀️' : '🌙'}
      </button>
    </Container>
  )
}
