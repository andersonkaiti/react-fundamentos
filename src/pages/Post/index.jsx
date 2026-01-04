import { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Post() {
  const params = useParams()
  const { search } = useLocation()

  // Só criará uma nova instancia do URLSearchParams quando o search mudar
  const queryParams = useMemo(() => new URLSearchParams(search), [search])

  console.log(params)
  console.log(queryParams.get('meuQueryParam'))

  return <h1>Post page</h1>
}
