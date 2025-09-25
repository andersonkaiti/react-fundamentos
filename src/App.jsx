import { useState } from 'react'
import Header from './Header'
import Post from './Post'

const ONE_SECOND = 1000
const TWO_SECONDS = ONE_SECOND * 2

export default function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title #01', subtitle: 'Sub #01', likes: 20 },
    { id: Math.random(), title: 'Title #02', subtitle: 'Sub #02', likes: 10 },
    { id: Math.random(), title: 'Title #03', subtitle: 'Sub #03', likes: 50 },
    { id: Math.random(), title: 'Title #04', subtitle: 'Sub #04', likes: 50 },
  ])

  function handleRefresh() {
    // posts.push({
    //   id: Math.random(),
    //   title: `Title #0${posts.length + 1}`,
    //   subtitle: `Sub #0${posts.length + 1}`,
    //   likes: 50,
    // })

    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Title #0${prevState.length + 1}`,
          subtitle: `Sub #0${prevState.length + 1}`,
          likes: 50,
        },
      ])
    }, TWO_SECONDS)
  }

  return (
    <>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh} type="button">
            Atualizar
          </button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  )
}
