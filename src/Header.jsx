import { useContext } from 'react'
import Button from './Button'
import { ThemeContext } from './ThemeContext'

export default function Header({ title = "JStack's Blog", children }) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <>
      <h1>{title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {children}
    </>
  )
}
