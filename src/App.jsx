import { useState } from 'react'
import Header from './Header'
import Post from './Post'

export default function App() {
  const [theme, setTheme] = useState('dark')

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title #01',
      subtitle: 'Sub #01',
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title #02',
      subtitle: 'Sub #02',
      likes: 10,
      read: true,
    },
    {
      id: Math.random(),
      title: 'Title #03',
      subtitle: 'Sub #03',
      likes: 50,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title #04',
      subtitle: 'Sub #04',
      likes: 50,
      read: false,
    },
  ])

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title #0${prevState.length + 1}`,
        subtitle: `Sub #0${prevState.length + 1}`,
        likes: 50,
      },
    ])
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId))
  }

  return (
    <>
      <Header onToggleTheme={handleToggleTheme} theme={theme}>
        <h2>
          Posts da semana
          <button onClick={handleRefresh} type="button">
            Atualizar
          </button>
        </h2>
      </Header>

      <hr />

      {posts?.map((post) => (
        <Post
          key={post.title}
          onRemove={handleRemovePost}
          post={post}
          theme={theme}
        />
      ))}
    </>
  )
}
