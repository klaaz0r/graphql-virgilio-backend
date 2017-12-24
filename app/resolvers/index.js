import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify'
import { makeExecutableSchema } from 'graphql-tools'

export default function graphql(options) {
  const virgilio = this
  const graphql = virgilio.namespace$('graphql')

  const schema = makeExecutableSchema({
    resolver: graphql.forumResolver.resolver(),
    typeDefs: virgilio.types.allTypes
  })

  virgilio.http.post('/graphql')
    .addHandler(graphqlRestify({ schema }))

  virgilio.http.get('/graphql')
    .addHandler(graphqlRestify({ schema }))

  virgilio.http.get('/graphiql')
    .addHandler(graphiqlRestify({ endpointURL: '/graphql' }))
}
