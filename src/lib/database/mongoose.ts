import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend NodeJS global to store mongoose connection across hot reloads
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseConnection | undefined;
}

// Use const here because cached is never reassigned
const cached: MongooseConnection = global.mongoose ?? {
  conn: null,
  promise: null,
};

global.mongoose = cached;

export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URL) {
    throw new Error('Missing MONGODB_URL');
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, {
      dbName: 'imagegGen',
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
};
