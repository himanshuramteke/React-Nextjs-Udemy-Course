import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

async function dbConnect() {
  if (isConnected) {
    console.log("Mongodb is already connected");
    return;
  }
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState === 1;

    console.log("Connected to MongoDB", conn);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

export default dbConnect;
