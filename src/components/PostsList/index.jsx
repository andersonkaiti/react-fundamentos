import { Component } from 'react'
import Post from './Post'
import posts from './posts'
import { Container } from './styles'

// Todo componente de classe deve estender a classe Component
export default class PostsList extends Component {
  // Método obrigatório e responsável por renderizar o JSX
  render() {
    return (
      <Container>
        {posts.map((post) => (
          <Post
            description={post.description}
            key={post.id}
            title={post.title}
          />
        ))}
      </Container>
    )
  }
}
