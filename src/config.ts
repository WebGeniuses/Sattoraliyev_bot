import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(__dirname, "../.env")
});



export const ENV = {
    PORT: parseInt(process.env.PORT) || 11000,
    HOST: process.env.HOST || "0.0.0.0",
    DB_URL: process.env.DB_URL,
    TOKEN: String(process.env.TOKEN)

}

console.log("///////////// :    " + ENV.DB_URL)
console.log("///////////// :    " + ENV.PORT)