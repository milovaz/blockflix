import { gql } from 'apollo-server-express';

export const typeDef = gql`
  type Movie {
    id: ID!
    title: String!
    price: Float
    status: STATUS!
    stars: [String]
  }

  enum STATUS {
    AVAILABLE
    RENTED
    UNDER_MAINTENANCE
    OUT_OF_CATALOG
  }
`;

export const resolvers = {
  Movie: {
    id: ({ _id }) => _id,
  },
};
