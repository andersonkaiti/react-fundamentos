import { useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import PostsList from '../PostsList'

export default function Layout() {
  useEffect(() => {
    function handleScroll() {
      console.debug('scroll')
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Header />

      <PostsList />

      <Footer />
    </>
  )
}
