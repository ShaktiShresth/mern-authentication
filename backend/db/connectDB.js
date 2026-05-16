import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("DB connection error: ", error.message);
    process.exit(1); // 1 means failure, while 0 status code means success
  }
};
