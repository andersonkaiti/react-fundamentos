import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Posts from './pages/Posts'

// Para que o React Router renderize apenas 1 página por vez, usamos o Switch

export default function Routes() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Posts} path="/posts" />
      <Route component={NotFound} />
    </Switch>
  )
}
