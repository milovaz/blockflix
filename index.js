import './src/env';
import Server from './src/server';

const port = process.env.PORT || 4000;
Server.express.listen(port, () =>
  // eslint-disable-next-line
  console.log(`🚀 Launched http://localhost:${port}/`),
);
