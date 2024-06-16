// Import the mongoose library
import mongoose from "mongoose";

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Attempt to connect to the database using the connection string from the environment variables
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Connected to DB");
    } catch (error) {
        console.log("Error connecting to DB", error);
    }
}

export default connectDB;
