import Button from './Button'

export default function PostHeader({
  post: { id, read, title },
  onRemove,
  theme,
}) {
  return (
    <>
      <strong>
        {read && <s>{title}</s>}

        {!read && title}
      </strong>

      <Button onClick={() => onRemove(id)} theme={theme}>
        Remover
      </Button>
    </>
  )
}
