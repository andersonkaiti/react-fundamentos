import { useContext } from 'react'
import { ThemeContext } from './App'
import Button from './Button'

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
