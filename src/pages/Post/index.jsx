import { Component } from 'react'

export default class Post extends Component {
  constructor(props) {
    super(props)

    // Para não recalcular uma nova instancia do URLSearchParams toda vez que o componente renderizar em class components, basta fazer isso no método construtor:
    this.queryParams = new URLSearchParams(this.props.location.search)
  }

  render() {
    console.log(this.props.match.params)
    console.log(this.queryParams.get('meuQueryParam'))

    return <h1>Post page</h1>
  }
}

// export default function Post() {
//   const params = useParams()
//   const { search } = useLocation()

//   const queryParams = useMemo(() => new URLSearchParams(search), [search])

//   console.log(params)
//   console.log(queryParams.get('meuQueryParam'))

//   return <h1>Post page</h1>
// }
