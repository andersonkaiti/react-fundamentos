import { Component } from 'react'
import Layout from './components/Layout'
import GlobalStyle from './styles/global'

// Nos componentes funcionais, o lifecycle é controlado com o useEffect
// Nos componentes de classe, o lifecycle é controlado com métodos

export default class App extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  // O equivalente ao componentDidMount é o useEffect(() => {}, [])
  componentDidMount() {
    console.log('componentDidMount executed')
  }

  // O equivalente ao render é o useEffect(() => {})
  render() {
    const { count } = this.state

    console.log('rendered')

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
