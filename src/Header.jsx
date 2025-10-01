import { useContext } from 'react'
import Button from './Button'
import { ThemeContext } from './ThemeContext'

export default function Header({ title = "JStack's Blog", children }) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <header
      style={{
        background: '#ccc',
        fontFamily: 'sans-serif',
        // marginBottom: 24,
        marginBottom: '24px',
      }}
    >
      <h1>{title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {children}
    </header>
  )
}
