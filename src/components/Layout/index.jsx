import { Link } from 'react-router-dom'
import Routes from '../../Routes'
import Footer from '../Footer'
import Header from '../Header'
import { Nav } from './styles'

export default function Layout() {
  return (
    <>
      <Header />

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/post/123">Post</Link>
      </Nav>

      <Routes />

      <Footer />
    </>
  )
}
