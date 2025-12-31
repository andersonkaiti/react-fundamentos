import { useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PostsList from '../PostsList'

export default function Layout() {
  useEffect(() => {
    // Para exibir uma mensagem quando o componente for desmontado, basta retornar uma função e tudo que estiver dentro dela será executado quando o componente for desmontado
    return () => {
      console.debug('<Layout /> saiu da tela')
    }
  })

  return (
    <>
      <Header />

      <PostsList />

      <Footer />
    </>
  )
}
