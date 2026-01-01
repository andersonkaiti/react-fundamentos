import { Component } from 'react'
import { Container } from './styles'

export default class Post extends Component {
  render() {
    // As props ficam dentro da instância da classe: this
    const { title, description } = this.props

    return (
      <Container>
        <h2>{title}</h2>
        <small>{description}</small>
      </Container>
    )
  }
}
