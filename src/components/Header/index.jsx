import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/ThemeContext'
import Button from '../Button'

const Title = styled.h1`
  color: #637bf3;
`

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
