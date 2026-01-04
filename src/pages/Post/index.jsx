import { Component } from 'react'

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.queryParams = new URLSearchParams(this.props.location.search)
  }

  handleNavigate = () => {
    this.props.history.push('/posts')
  }

  render() {
    return (
      <>
        <button onClick={this.handleNavigate} type="button">
          Voltar para a lista de posts
        </button>
        <h1>Post page</h1>
      </>
    )
  }
}
