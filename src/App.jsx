import { Component } from 'react'
import Layout from './components/Layout'
import GlobalStyle from './styles/global'

export default class App extends Component {
  constructor(props) {
    // Executa o método constructor da classe pai
    // Component.constructor()
    super(props)

    this.state = {
      count: 0,
      message: 'Hello, World!',
    }

    // Isso acontece ao executar o método .setState(), ou seja, ele não sobrescreve tudo, mas sim realiza um merge
    // function setState(newState) {
    //   this.state = {
    //     ...currentState,
    //     ...newState,
    //   }
    // }
  }

  render() {
    const { count } = this.state

    console.log(this.state)

    return (
      <>
        <GlobalStyle />

        <Layout />

        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
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
