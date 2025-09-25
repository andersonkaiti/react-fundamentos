import Header from './Header'
import Post from './Post'

/**
 * @type {Array<{
 *  title: string,
 *  subtitle: string,
 *  likes: number
 * }>}
 */
const posts = [
  { title: 'Title #01', subtitle: 'Sub #01', likes: 20 },
  { title: 'Title #02', subtitle: 'Sub #02', likes: 10 },
  { title: 'Title #03', subtitle: 'Sub #03', likes: 50 },
  { title: 'Title #04', subtitle: 'Sub #04', likes: 50 },
]

export default function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {/* {[<h1>Primeiro elemento</h1>, <h1>Segundo elemento</h1>]} */}

      {posts.map((post) => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  )
}
