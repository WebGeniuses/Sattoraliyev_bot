import fastify from "fastify";
import { botStarter } from "./bot";
import {ENV } from "./config";

import dotenv from 'dotenv';
import path from "path";

import { dbConnect } from "./db/Connector";

// import axios from "axios";


// async function test(){
//     const chat = "563662874";


//     // let url = `https://api.telegram.org/bot5392270600:AAH_BfG4kLrOCvoKYz_mgSFs-ElpWxYGLZY/sendMessage?chat_id=${chat}&text=Salom`;

// //    const res= await axios.get(url);
//    console.log("Ok")

// }
// test()
dotenv.config({
    path:path.resolve(__dirname, '../.env')
})

const server = fastify({
    logger:true
})
server.register(dbConnect)
server.get('/',(req, res)=>{
    res.send("bot started;   Coder : Dev.Saturn")
})
server.register (botStarter);

function start(){
    server.listen({
        port:ENV.PORT,
        host:ENV.HOST,
    })
    .then(()=>console.log("started"))
    .catch((e)=>console.log("Failed",e));
}

start();
