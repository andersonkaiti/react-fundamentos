import { useContext } from 'react'
import { ThemeContext } from './App'

export default function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      onClick={onClick}
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#fff',
      }}
      type="button"
    >
      {children}
    </button>
  )
}
