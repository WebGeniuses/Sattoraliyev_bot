import fp from "fastify-plugin";
import mongoose from "mongoose";
import { ENV } from "../config";


export async function connectDB() {
    try {
        mongoose.set("debug", true)
        await mongoose.connect(ENV.DB_URL);
        
        console.log('Connected to Mongo Db:  '+ENV.DB_URL);
    } catch (e) {
        console.log("Mongodb Connect failed");
        console.log(e);
    }
}

export const dbConnect = fp(connectDB)