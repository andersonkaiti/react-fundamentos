export default function Button({ children, onClick, theme }) {
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
