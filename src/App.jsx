import { Component } from 'react'
import Layout from './components/Layout'
import GlobalStyle from './styles/global'

export default class App extends Component {
  state = {
    count: 0,
    message: 'Hello, World!',
  }

  handleIncrement = () => {
    // A arrow function herda o objeto this do contexto em que foi criada
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const { count } = this.state

    return (
      <>
        <GlobalStyle />

        <Layout />

        <button
          onClick={this.handleIncrement}
          style={{
            marginTop: '10px',
          }}
          type="button"
        >
          Incrementar {count}
        </button>
      </>
    )
  }
}
