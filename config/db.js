import mongoose from "mongoose";
import { createDefaultUser } from "../controllers/auth.js";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const LIVE_DB = process.env.MONGO_URI;

  try {
    await mongoose.connect(LIVE_DB);
    console.log("✅ MongoDB Connected");
    await createDefaultUser();
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
