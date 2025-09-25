export default function Post(props) {
  // props.title = 'Título sobrescrito'

  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <br />
        <small>{props.post.subtitle}</small>
      </article>

      <br />
    </>
  )
}
