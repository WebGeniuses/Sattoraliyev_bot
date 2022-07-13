import dotenv from "dotenv";

dotenv.config();
const {env} = process;

export const PORT = Number(env.PORT)||10000;
export const HOST = env.HOST || "0.0.0.0";
export const DB_URL = String(env.DB_URL|| "mongodb://localhost:27017/Sattobot");
export const TOKEN = String(env.TOKEN|| "5392270600:AAH_BfG4kLrOCvoKYz_mgSFs-ElpWxYGLZY");
console.log("///////////// :    "+DB_URL)