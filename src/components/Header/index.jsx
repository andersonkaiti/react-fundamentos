import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import Button from '../Button'
import Title from './../Title'

export default function Header({ title = "JStack's Blog", children }) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {children}
    </>
  )
}
