import PostHeader from './PostHeader'

export default function Post({
  post: { subtitle, likes, ...rest },
  onRemove,
  theme,
}) {
  return (
    <>
      <article>
        <PostHeader onRemove={onRemove} post={rest} theme={theme} />
        <br />
        <small>{subtitle}</small>
        <br />
        Média: {likes / 2}
      </article>

      <br />
    </>
  )
}
