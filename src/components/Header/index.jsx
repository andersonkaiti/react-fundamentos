import React, { Component } from 'react'
import { ThemeContext } from '../../contexts/ThemeProvider'
import { Container } from './styles'

function HOC(WrappedComponent) {
  return class HocComponent extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(ctx) => <WrappedComponent {...this.props} {...ctx} />}
        </ThemeContext.Consumer>
      )
    }
  }
}

class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.theme !== prevProps.theme) {
      console.log('theme changed')
    }
  }

  render() {
    const { theme, onToggleTheme } = this.props

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button onClick={onToggleTheme} type="button">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </Container>
    )
  }
}

export default HOC(Header)
