import { Link } from 'react-router-dom'
import Routes from '../../Routes'
import Header from '../Header'
import { Nav } from './styles'

export default function Layout() {
  return (
    <>
      <Header />

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/123">Post</Link>
      </Nav>

      <Routes />

      {/* <Footer /> */}
    </>
  )
}
