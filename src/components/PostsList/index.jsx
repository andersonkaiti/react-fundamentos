import Post from './Post'
import posts from './posts'
import { Container } from './styles'

export default function PostsList() {
  return (
    <Container>
      {posts.map((post) => (
        <Post description={post.description} key={post.id} title={post.title} />
      ))}
    </Container>
  )
}
