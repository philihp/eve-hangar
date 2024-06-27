import { createYoga, createSchema } from 'graphql-yoga'
import { gql } from 'graphql-tag'
import { NextApiRequest, NextApiResponse } from 'next'

import { supabase } from '@/supabase'
import { createClient } from '@/utils/supabase/client'

const typeDefs = gql`
  type Query {
    types(first: Int = 1000, after: ID = "0"): [Type]
  }

  type Type {
    typeID: ID
    typeName: String!
  }
`
// type(typeID: ID!): Type
// typeName: String!

type Context = {
  dataSource: ReturnType<typeof createClient>
}

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers: {
      Query: {
        types: async (_, { first, after }, { dataSource }: Context) => {
          const { data: records } = await dataSource
            .schema('evesde')
            .from('invTypes')
            .select(
              'typeID, groupID, typeName, description, mass, volume, capacity, portionSize, raceID, basePrice, published, marketGroupID, iconID, soundID, graphicID'
            )
            .limit(first)
            .gt('typeID', after)
          return records
        },
      },
    },
  }),
  graphqlEndpoint: '/graphql/v1',
  fetchAPI: { Response },
  context: {
    dataSource: createClient(),
  },
})

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }
