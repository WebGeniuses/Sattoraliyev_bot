import fp from "fastify-plugin";
import mongoose from "mongoose";
import { DB_URL } from "../config";


async function connectDB() {
    try {
        mongoose.connect("mongodb://localhost:27017/Sattobot");
        // console.log("aaaaaaaaaaaaaaaaaaaaa: "+DB_URL)
        mongoose.set('debug',true);
        console.log('Connected to Mongo Db');
    } catch (e) {
        console.log("Mongodb Connect failed");
        console.log(e);
    }
}

export const dbConnect = fp(connectDB)