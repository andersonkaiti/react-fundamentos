import PostHeader from './PostHeader'

export default function Post({ post: { subtitle, likes, ...rest }, onRemove }) {
  return (
    <>
      <article>
        <PostHeader onRemove={onRemove} post={rest} />
        <br />
        <small>{subtitle}</small>
        <br />
        Média: {likes / 2}
      </article>

      <br />
    </>
  )
}
