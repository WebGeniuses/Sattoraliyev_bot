"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = exports.connectDB = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = require("../config");
async function connectDB() {
    try {
        mongoose_1.default.set("debug", true);
        await mongoose_1.default.connect(config_1.ENV.DB_URL);
        console.log('Connected to Mongo Db:  ' + config_1.ENV.DB_URL);
    }
    catch (e) {
        console.log("Mongodb Connect failed");
        console.log(e);
    }
}
exports.connectDB = connectDB;
exports.dbConnect = (0, fastify_plugin_1.default)(connectDB);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RiL0Nvbm5lY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNEVBQWdDO0FBQ2hDLGdFQUFnQztBQUNoQyxzQ0FBZ0M7QUFHekIsS0FBSyxVQUFVLFNBQVM7SUFDM0IsSUFBSTtRQUNBLGtCQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMzQixNQUFNLGtCQUFRLENBQUMsT0FBTyxDQUFDLFlBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFDLFlBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0RDtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7QUFDTCxDQUFDO0FBVkQsOEJBVUM7QUFFWSxRQUFBLFNBQVMsR0FBRyxJQUFBLHdCQUFFLEVBQUMsU0FBUyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnAgZnJvbSBcImZhc3RpZnktcGx1Z2luXCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgRU5WIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmdvb3NlLnNldChcImRlYnVnXCIsIHRydWUpXHJcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChFTlYuREJfVVJMKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvIERiOiAgJytFTlYuREJfVVJMKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvZGIgQ29ubmVjdCBmYWlsZWRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkYkNvbm5lY3QgPSBmcChjb25uZWN0REIpIl19