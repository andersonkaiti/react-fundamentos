export default function Header({ title = "JStack's Blog", children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}
