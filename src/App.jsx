import Post from './Post'

const primeiroTitulo = 'Título da notícia 01'

export default function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      {/* <Post subtitle="Subtítulo da notícia 01" title={primeiroTitulo} /> */}

      <Post
        post={{
          title: primeiroTitulo,
          subtitle: 'Subtítulo da notícia 01',
        }}
      />
      <Post
        post={{
          title: 'Título da notícia 02',
          subtitle: 'Subtítulo da notícia 02',
        }}
      />
      <Post
        post={{
          title: 'Título da notícia 03',
          subtitle: 'Subtítulo da notícia 03',
        }}
      />
    </>
  )
}
