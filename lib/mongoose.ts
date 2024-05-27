import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

let cached = (global as any).mongoose || { conn: null, Promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;
    if (!MONGODB_URL) throw new Error("MONGODB_URL IS MISSING");

    cached.Promise = cached.Promise || mongoose.connect(MONGODB_URL, {
        dbName: "altar",
        bufferCommands: false,
    });

    cached.conn = await cached.Promise;

    return cached.conn;
}