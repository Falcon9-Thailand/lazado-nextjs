import { connect, Mongoose } from "mongoose";

const mongoConnection = async () => {
  let isConnection: boolean = false;
  if (isConnection) return;

  const db: Mongoose = await connect(
    process.env.NEXT_PUBLIC_MONGODB_CONNECT_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  /*
    readyState
    '0': 'disconnected',
    '1': 'connected',
    '2': 'connecting',
    '3': 'disconnecting',
    '99': 'uninitialized',
  */

  isConnection = !!db.connection.readyState;
};

export default mongoConnection;
