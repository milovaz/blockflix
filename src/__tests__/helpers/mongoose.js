import mongoose from 'mongoose';

export function dropMongo() {
  return mongoose.connection.dropDatabase();
}

export function closeMongo() {
  return mongoose.connection.close();
}
