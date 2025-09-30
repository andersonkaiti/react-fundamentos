export default function Post({
  post: { read, title, id, subtitle, likes },
  onRemove,
}) {
  return (
    <>
      <article>
        <strong>
          {read && <s>{title}</s>}

          {!read && title}
        </strong>
        <button onClick={() => onRemove(id)} type="button">
          Remover
        </button>
        <br />
        <small>{subtitle}</small>
        <br />
        Média: {likes / 2}
      </article>

      <br />
    </>
  )
}
