import { Component } from 'react'
import Layout from './components/Layout'
import GlobalStyle from './styles/global'

// function hello() {}
// hello.bind(...)

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      message: 'Hello, World!',
    }

    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement() {
    // O método contém o próprio objeto this
    console.log(this)

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
