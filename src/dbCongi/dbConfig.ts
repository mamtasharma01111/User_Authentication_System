import mongoose from "mongoose";

export async function connectToDatabase() {
    try {
    mongoose.connect(process.env.MONGODB_URI !);
    const connection = mongoose.connection;
    connection.on("connected", () => {
        console.log("Connected to the database successfully!");
    })
    connection.on("error", (err) => {
        console.error("Database connection error:", err);
    })
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}