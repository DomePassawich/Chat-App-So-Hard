import mongoose from "mongoose";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("Connectd to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB",error.massage);
  }
  
};

export default connectToMongoDB;