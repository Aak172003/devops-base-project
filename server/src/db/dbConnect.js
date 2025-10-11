import mongoose from 'mongoose';
import 'dotenv/config';

const dbConnection = async () => {
  try {
    const conInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to DB ${conInstance.connection.host}`);
  } catch (error) {
    console.log(`Error in DB Connection ${error.message}`);
    process.exit(1);
  }
};

export default dbConnection;
