import { Component } from 'react'
import Layout from './components/Layout'
import GlobalStyle from './styles/global'

export default class App extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  componentDidMount() {
    console.log('componentDidMount executed')
  }

  componentDidUpdate(_, prevState) {
    // useEffect(() => {}, [count])
    if (prevState.count !== this.state.count) {
      console.log('count changed')
    }
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', { error, info })
  }

  shouldComponentUpdate(_nextProps, _nextState) {
    return true
  }

  render() {
    const { count } = this.state

    return (
      <div
        style={{
          height: '200vh',
        }}
      >
        <GlobalStyle />

        {!!(count & 1) && <Layout />}

        <button
          onClick={this.handleIncrement}
          style={{
            marginTop: '10px',
          }}
          type="button"
        >
          Incrementar {count}
        </button>
      </div>
    )
  }
}
