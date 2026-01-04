import { useHistory } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeProvider'
import { Container } from './styles'

export default function Header() {
  const { theme, onToggleTheme } = useTheme()

  const history = useHistory()

  function handleNavigate() {
    // O history é um array que contém a lista de URLs visitadas, então o .push() adiciona uma nova URL na lista
    history.push('/posts')
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={onToggleTheme} type="button">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <button onClick={handleNavigate} style={{ color: '#fff' }} type="button">
        Navegar
      </button>
    </Container>
  )
}
