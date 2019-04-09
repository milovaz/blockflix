import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import helmet from 'helmet';
import schema from './schema';
import { connectMongo, loadModels } from './database/mongoose';

const playground = {
  settings: {
    'editor.cursorShape': 'line',
  },
};
class Server {
  constructor() {
    this.express = express();
    this.express.use(helmet());
    this.database();
    this.createServerApollo();
  }

  database() {
    connectMongo();
    loadModels();
  }

  async createServerApollo() {
    const apolloServer = new ApolloServer({
      // eslint-disable-next-line no-unused-vars
      context: async ({ req }) => {
        return {};
      },
      schema,
      playground,
      uploads: false,
      introspection: true,
    });

    apolloServer.applyMiddleware({ app: this.express, path: '/' });
  }
}

export default new Server();
