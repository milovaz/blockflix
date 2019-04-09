import { gql } from 'apollo-server-express';
import Movie from '../../models/Movie';

export const typeDef = gql`
  type Mutation {
    addMovie(input: AddMovieInput!): MoviePayload
    changeMovieStatus(id: ID!, status: STATUS): MoviePayload
    removeMovie(input: RemoveMovieInput!): RemoveMoviePayload
  }

  input AddMovieInput {
    title: String!
    price: Float
    stars: [String]
  }

  input RemoveMovieInput {
    id: ID!
  }

  type MoviePayload {
    movie: Movie
  }

  type RemoveMoviePayload {
    movie: Movie
    removed: Boolean
  }
`;

export const resolvers = {
  Mutation: {
    addMovie: async (parent, { input }) => {
      const movie = new Movie(input);
      await movie.save();
      return { movie };
    },
    changeMovieStatus: async (parent, { id, status }) => {
      const movie = await Movie.findOneAndUpdate(
        { _id: id },
        { status },
        { new: true },
      );
      return { movie };
    },
    removeMovie: async (parent, { input }) => {
      const { id } = input;
      const movie = await Movie.findById(id);
      await Movie.deleteOne({ _id: id });
      return { movie, removed: true };
    },
  },
};
