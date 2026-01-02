import { Component } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PostsList from '../PostsList'

export default class Layout extends Component {
  componentDidMount() {
    console.log('componentDidMount executed')
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount executed')

    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    console.log('scrolled')
  }

  render() {
    return (
      <>
        <Header />

        <PostsList />

        <Footer />
      </>
    )
  }
}
