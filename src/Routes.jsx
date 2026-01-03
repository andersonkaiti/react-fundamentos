import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'

// Back-end: rotas servem para identificar o recurso a ser acessado
// Front-end: rotas servem para identificar a página a ser acessada

// Rota: URL

// O React é responsável pela UI, tudo além disso deve ser feito por dependências

// As rotas são componentes
// Route: rota

export default function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" />
      <Route component={Posts} path="/posts" />
    </BrowserRouter>
  )
}
