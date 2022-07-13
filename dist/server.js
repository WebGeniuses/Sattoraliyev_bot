"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const bot_1 = require("./bot");
const config_1 = require("./config");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const path_1 = tslib_1.__importDefault(require("path"));
const Connector_1 = require("./db/Connector");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env')
});
const server = (0, fastify_1.default)({
    logger: true
});
server.register(Connector_1.dbConnect);
server.register(bot_1.botStarter);
function start() {
    server.listen({
        port: config_1.PORT,
        host: config_1.HOST,
    })
        .then(() => console.log("started"))
        .catch((e) => console.log("Failed", e));
}
start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEI7QUFDOUIsK0JBQW1DO0FBQ25DLHFDQUFzQztBQUV0Qyw0REFBNEI7QUFDNUIsd0RBQXdCO0FBRXhCLDhDQUEyQztBQUczQyxnQkFBTSxDQUFDLE1BQU0sQ0FBQztJQUNWLElBQUksRUFBQyxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7Q0FDMUMsQ0FBQyxDQUFBO0FBRUYsTUFBTSxNQUFNLEdBQUcsSUFBQSxpQkFBTyxFQUFDO0lBQ25CLE1BQU0sRUFBQyxJQUFJO0NBQ2QsQ0FBQyxDQUFBO0FBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLENBQUE7QUFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBRSxnQkFBVSxDQUFDLENBQUM7QUFFN0IsU0FBUyxLQUFLO0lBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNWLElBQUksRUFBQyxhQUFJO1FBQ1QsSUFBSSxFQUFDLGFBQUk7S0FDWixDQUFDO1NBQ0QsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRCxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXN0aWZ5IGZyb20gXCJmYXN0aWZ5XCI7XHJcbmltcG9ydCB7IGJvdFN0YXJ0ZXIgfSBmcm9tIFwiLi9ib3RcIjtcclxuaW1wb3J0IHsgSE9TVCwgUE9SVCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuaW1wb3J0IHsgZGJDb25uZWN0IH0gZnJvbSBcIi4vZGIvQ29ubmVjdG9yXCI7XHJcblxyXG5cclxuZG90ZW52LmNvbmZpZyh7XHJcbiAgICBwYXRoOnBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uZW52JylcclxufSlcclxuXHJcbmNvbnN0IHNlcnZlciA9IGZhc3RpZnkoe1xyXG4gICAgbG9nZ2VyOnRydWVcclxufSlcclxuc2VydmVyLnJlZ2lzdGVyKGRiQ29ubmVjdClcclxuc2VydmVyLnJlZ2lzdGVyIChib3RTdGFydGVyKTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCl7XHJcbiAgICBzZXJ2ZXIubGlzdGVuKHtcclxuICAgICAgICBwb3J0OlBPUlQsXHJcbiAgICAgICAgaG9zdDpIT1NULFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpPT5jb25zb2xlLmxvZyhcInN0YXJ0ZWRcIikpXHJcbiAgICAuY2F0Y2goKGUpPT5jb25zb2xlLmxvZyhcIkZhaWxlZFwiLGUpKTtcclxufVxyXG5cclxuc3RhcnQoKTtcclxuIl19