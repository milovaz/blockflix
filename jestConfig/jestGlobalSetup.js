const fs = require('fs');
const { MongoMemoryServer } = require('mongodb-memory-server');
const path = require('path');

const globalConfigPath = path.join(__dirname, 'globalConfig.json');
const dotenv = require('dotenv');

dotenv.load();

module.exports = async function globalSetup() {
  const mongoServer = new MongoMemoryServer();

  const mongoConfig = {
    mongoDBName: 'jest',
    mongoUri: await mongoServer.getConnectionString(),
  };

  // Write global config to disk because all tests run in different contexts.
  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));

  // Set reference to mongod in order to close the server during teardown.
  global.JEST_MONGOD = mongoServer;
};
