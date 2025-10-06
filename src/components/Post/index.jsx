import PostHeader from './PostHeader'
import { Container, Rate, Subtitle } from './styles'

export default function Post({
  post: { subtitle, likes, removed, ...rest },
  onRemove,
}) {
  return (
    <Container removed={removed}>
      <PostHeader onRemove={onRemove} post={rest} />

      <Subtitle>{subtitle}</Subtitle>

      <Rate>Média: {likes / 2}</Rate>
    </Container>
  )
}
