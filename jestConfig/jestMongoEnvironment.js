const NodeEnvironment = require('jest-environment-node');
const path = require('path');
const fs = require('fs');

const globalConfigPath = path.join(__dirname, 'globalConfig.json');

class MongoEnvironment extends NodeEnvironment {
  async setup() {
    const globalConfig = JSON.parse(fs.readFileSync(globalConfigPath, 'utf-8'));

    this.global.JEST_MONGO_URI = globalConfig.mongoUri;
    this.global.JEST_MONGO_DB_NAME = globalConfig.mongoDBName;

    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = MongoEnvironment;
