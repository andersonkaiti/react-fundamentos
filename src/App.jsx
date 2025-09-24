const category = 'Posts da semana'

export default function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>{category}</h2>
      <p>
        {console.log('Log de dentro do JSX')} {1 ? 'sim' : 'não'}{' '}
        {Math.random()}
      </p>
    </>
  )
}
