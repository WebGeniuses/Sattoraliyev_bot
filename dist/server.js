"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const bot_1 = require("./bot");
const config_1 = require("./config");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const path_1 = tslib_1.__importDefault(require("path"));
const Connector_1 = require("./db/Connector");
// import axios from "axios";
// async function test(){
//     const chat = "563662874";
//     // let url = `https://api.telegram.org/bot5392270600:AAH_BfG4kLrOCvoKYz_mgSFs-ElpWxYGLZY/sendMessage?chat_id=${chat}&text=Salom`;
// //    const res= await axios.get(url);
//    console.log("Ok")
// }
// test()
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env')
});
const server = (0, fastify_1.default)({
    logger: true
});
server.register(Connector_1.dbConnect);
server.get('/', (req, res) => {
    res.send("bot started;   Coder : Dev.Saturn");
});
server.register(bot_1.botStarter);
function start() {
    server.listen({
        port: config_1.ENV.PORT,
        host: config_1.ENV.HOST,
    })
        .then(() => console.log("started"))
        .catch((e) => console.log("Failed", e));
}
start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEI7QUFDOUIsK0JBQW1DO0FBQ25DLHFDQUE4QjtBQUU5Qiw0REFBNEI7QUFDNUIsd0RBQXdCO0FBRXhCLDhDQUEyQztBQUUzQyw2QkFBNkI7QUFHN0IseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUdoQyx3SUFBd0k7QUFFeEkseUNBQXlDO0FBQ3pDLHVCQUF1QjtBQUV2QixJQUFJO0FBQ0osU0FBUztBQUNULGdCQUFNLENBQUMsTUFBTSxDQUFDO0lBQ1YsSUFBSSxFQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQztDQUMxQyxDQUFDLENBQUE7QUFFRixNQUFNLE1BQU0sR0FBRyxJQUFBLGlCQUFPLEVBQUM7SUFDbkIsTUFBTSxFQUFDLElBQUk7Q0FDZCxDQUFDLENBQUE7QUFDRixNQUFNLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsQ0FBQTtBQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsRUFBRTtJQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUE7QUFDakQsQ0FBQyxDQUFDLENBQUE7QUFDRixNQUFNLENBQUMsUUFBUSxDQUFFLGdCQUFVLENBQUMsQ0FBQztBQUU3QixTQUFTLEtBQUs7SUFDVixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ1YsSUFBSSxFQUFDLFlBQUcsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxFQUFDLFlBQUcsQ0FBQyxJQUFJO0tBQ2hCLENBQUM7U0FDRCxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZhc3RpZnkgZnJvbSBcImZhc3RpZnlcIjtcclxuaW1wb3J0IHsgYm90U3RhcnRlciB9IGZyb20gXCIuL2JvdFwiO1xyXG5pbXBvcnQge0VOViB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuaW1wb3J0IHsgZGJDb25uZWN0IH0gZnJvbSBcIi4vZGIvQ29ubmVjdG9yXCI7XHJcblxyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gdGVzdCgpe1xyXG4vLyAgICAgY29uc3QgY2hhdCA9IFwiNTYzNjYyODc0XCI7XHJcblxyXG5cclxuLy8gICAgIC8vIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDUzOTIyNzA2MDA6QUFIX0JmRzRrTHJPQ3ZvS1l6X21nU0ZzLUVscFd4WUdMWlkvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0ke2NoYXR9JnRleHQ9U2Fsb21gO1xyXG5cclxuLy8gLy8gICAgY29uc3QgcmVzPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuLy8gICAgY29uc29sZS5sb2coXCJPa1wiKVxyXG5cclxuLy8gfVxyXG4vLyB0ZXN0KClcclxuZG90ZW52LmNvbmZpZyh7XHJcbiAgICBwYXRoOnBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uZW52JylcclxufSlcclxuXHJcbmNvbnN0IHNlcnZlciA9IGZhc3RpZnkoe1xyXG4gICAgbG9nZ2VyOnRydWVcclxufSlcclxuc2VydmVyLnJlZ2lzdGVyKGRiQ29ubmVjdClcclxuc2VydmVyLmdldCgnLycsKHJlcSwgcmVzKT0+e1xyXG4gICAgcmVzLnNlbmQoXCJib3Qgc3RhcnRlZDsgICBDb2RlciA6IERldi5TYXR1cm5cIilcclxufSlcclxuc2VydmVyLnJlZ2lzdGVyIChib3RTdGFydGVyKTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCl7XHJcbiAgICBzZXJ2ZXIubGlzdGVuKHtcclxuICAgICAgICBwb3J0OkVOVi5QT1JULFxyXG4gICAgICAgIGhvc3Q6RU5WLkhPU1QsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCk9PmNvbnNvbGUubG9nKFwic3RhcnRlZFwiKSlcclxuICAgIC5jYXRjaCgoZSk9PmNvbnNvbGUubG9nKFwiRmFpbGVkXCIsZSkpO1xyXG59XHJcblxyXG5zdGFydCgpO1xyXG4iXX0=