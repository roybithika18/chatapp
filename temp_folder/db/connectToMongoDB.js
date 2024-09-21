import mongoose from "mongoose";

// Hardcoded MongoDB URI
const MONGO_DB_URI = "mongodb+srv://roybithika188:7wxeAepo36pBGCTR@cluster0.pr70b.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_DB_URI, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}

export default connectToMongoDB;
