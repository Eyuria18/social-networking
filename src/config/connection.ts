import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/social-network");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
