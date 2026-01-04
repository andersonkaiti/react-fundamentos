import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Post from './pages/Post'
import Posts from './pages/Posts'

export default function Routes() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Posts} exact path="/posts" />
      {/* Ao adicionar o dois-pontos (:), o id passa a ser dinâmico */}
      <Route component={Post} path="/posts/:id/:author" />
      <Route component={NotFound} />
    </Switch>
  )
}
