import Button from './Button'

export default function Header({
  theme,
  onToggleTheme,
  title = "JStack's Blog",
  children,
}) {
  return (
    <>
      <h1>{title}</h1>
      <Button onClick={onToggleTheme} theme={theme}>
        Mudar tema
      </Button>
      {children}
    </>
  )
}
