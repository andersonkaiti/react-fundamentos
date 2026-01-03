import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'

export default function Routes() {
  return (
    <>
      <Route component={Home} exact path="/" />
      <Route component={Posts} path="/posts" />
    </>
  )
}
