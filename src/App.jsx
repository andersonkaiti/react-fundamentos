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

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', {
      currentState: this.state,
      previousState: prevState,
      previousProps: prevProps,
    })
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', { error, info })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', {
      currentState: this.state,
      nextState,
      nextProps,
    })

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
