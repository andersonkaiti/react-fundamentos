import styles from './Post.scss'
import PostHeader from './PostHeader'
import { Rate, Subtitle } from './styles'

export default function Post({
  post: { subtitle, likes, removed, ...rest },
  onRemove,
}) {
  return (
    <article className={removed ? styles.postDeleted : styles.post}>
      <PostHeader onRemove={onRemove} post={rest} />

      <Subtitle>{subtitle}</Subtitle>

      <Rate>Média: {likes / 2}</Rate>
    </article>
  )
}
