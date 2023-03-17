import mongoose from "mongoose";

mongoose.set("strictQuery", false);
export default async function DBConnectWithRetry() {
  try {
    console.log("Attempting MongoDB connection (will retry if needed)");
    await mongoose.connect("mongodb://localhost:27017/mgmt_db");
    console.log("Database connected...".cyan.underline.bold);
  } catch (error) {
    const retrySeconds = 5;
    console.log(
      `MongoDB connection unsuccessful (will retry in #${count} after ${retrySeconds} seconds)`,
      error
    );
    setTimeout(DBConnectWithRetry, retrySeconds * 1000);
    process.exit(1);
  }
};
