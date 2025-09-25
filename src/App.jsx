import Header from './Header'
import Post from './Post'

export default function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {/* <Post subtitle="Subtítulo da notícia 01" title={primeiroTitulo} /> */}

      <Post
        post={{
          title: 'Título da notícia 01',
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
