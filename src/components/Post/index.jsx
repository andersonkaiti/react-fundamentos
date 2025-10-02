import styles from './Post.scss'
import PostHeader from './PostHeader'

export default function Post({
  post: { subtitle, likes, removed, ...rest },
  onRemove,
}) {
  return (
    <article className={removed ? styles.postDeleted : styles.post}>
      <PostHeader onRemove={onRemove} post={rest} />
      <small>{subtitle}</small>
      Média: {likes / 2}
    </article>
  )
}
