import path from 'path';
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS middleware
import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

import { app, server } from "./Routes/socket.js"; // Assuming you're exporting both app and server from socket.js

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

const  __dirname = path.resolve();

app.use(express.json()); // Middleware for parsing incoming JSON requests
app.use(cookieParser());

// Enable CORS for both localhost and production domain
app.use(cors({
    origin: ["http://localhost:3000", "https://chat-app-yt.onrender.com"], // Allow your frontend origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Enable if using cookies or authentication headers
}));

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});
// Connect to MongoDB, then start the server
const startServer = async () => {
    try {
        await connectToMongoDB(); // Wait for MongoDB connection to establish
        console.log("Connected to MongoDB");

        // Start the server using Socket.IO's server instance
        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit the process if unable to connect
    }
};

startServer(); // Run the function to connect to the DB and start the server
