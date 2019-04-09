module.exports = async function globalTeardown() {
  await global.JEST_MONGOD.stop();
};
