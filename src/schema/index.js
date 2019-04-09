import { merge } from 'lodash';
import { makeExecutableSchema } from 'apollo-server-express';
import { typeDef as QueryTypeDef, resolvers as QueryResolvers } from './Query';
import {
  typeDef as MutationTypeDef,
  resolvers as MutationResolvers,
} from './Mutation';
import { typeDef as MovieTypeDef, resolvers as MovieResolvers } from './Movie';

export const typeDefs = [QueryTypeDef, MutationTypeDef, MovieTypeDef];

export const resolvers = merge(
  QueryResolvers,
  MutationResolvers,
  MovieResolvers,
);

export default makeExecutableSchema({
  inheritResolversFromInterfaces: true,
  typeDefs,
  resolvers,
});
