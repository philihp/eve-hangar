import { createYoga, createSchema } from 'graphql-yoga'
import { gql } from 'graphql-tag'
import { NextApiRequest, NextApiResponse } from 'next'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

const typeDefs = gql`
  type Query {
    types(first: Int = 1000, after: ID = "0"): [Type]
  }

  type Type {
    typeID: ID
    typeName: String!
  }
`

type Context = {
  dataSource: ReturnType<typeof createClient>
}

const handleRequest = (req: NextApiRequest, res: NextApiResponse) => {
  const cookieStore = cookies()
  const context: Context = { dataSource: createClient(cookieStore) }

  return createYoga({
    schema: createSchema({
      typeDefs,
      resolvers: {
        Query: {
          types: async (_, { first, after }, { dataSource }: Context) => {
            const records = await dataSource
              .schema('evesde')
              .from('invTypes')
              .select('typeID, typeName')
              .limit(first)
              .gt('typeID', after)
            return records.data
          },
        },
      },
    }),
    graphqlEndpoint: '/graphql/v1',
    fetchAPI: { Response },
    context,
  })(req, res)
}

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }
