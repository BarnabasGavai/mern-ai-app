import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      family: 4,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

export default connectDB;
