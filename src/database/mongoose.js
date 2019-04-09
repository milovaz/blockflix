import mongoose from 'mongoose';
import models from '../models';

export function connectMongo() {
  const URL = global.JEST_MONGO_URI || process.env.MONGO_URL;
  mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  mongoose.set('useFindAndModify', false);
}

export function dropMongo() {
  return mongoose.connection.dropDatabase();
}

export function closeMongo() {
  return mongoose.connection.close();
}

export function loadModels() {
  return models;
}
