import { gql } from 'apollo-server-express';
import Movie from '../../models/Movie';

export const typeDef = gql`
  type Query {
    "Teste"
    movies: [Movie]
  }
`;

export const resolvers = {
  Query: {
    movies: async () => {
      const movies = await Movie.find({});
      return movies;
    },
  },
};
