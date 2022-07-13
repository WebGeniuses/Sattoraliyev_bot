"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
async function connectDB() {
    try {
        mongoose_1.default.connect("mongodb://localhost:27017/Sattobot");
        // console.log("aaaaaaaaaaaaaaaaaaaaa: "+DB_URL)
        mongoose_1.default.set('debug', true);
        console.log('Connected to Mongo Db');
    }
    catch (e) {
        console.log("Mongodb Connect failed");
        console.log(e);
    }
}
exports.dbConnect = (0, fastify_plugin_1.default)(connectDB);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RiL0Nvbm5lY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNEVBQWdDO0FBQ2hDLGdFQUFnQztBQUloQyxLQUFLLFVBQVUsU0FBUztJQUNwQixJQUFJO1FBQ0Esa0JBQVEsQ0FBQyxPQUFPLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUN2RCxnREFBZ0Q7UUFDaEQsa0JBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN4QztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7QUFDTCxDQUFDO0FBRVksUUFBQSxTQUFTLEdBQUcsSUFBQSx3QkFBRSxFQUFDLFNBQVMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZwIGZyb20gXCJmYXN0aWZ5LXBsdWdpblwiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IERCX1VSTCB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L1NhdHRvYm90XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWFhYWFhYWFhYWFhYWFhYWFhYWFhOiBcIitEQl9VUkwpXHJcbiAgICAgICAgbW9uZ29vc2Uuc2V0KCdkZWJ1ZycsdHJ1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nbyBEYicpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9uZ29kYiBDb25uZWN0IGZhaWxlZFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRiQ29ubmVjdCA9IGZwKGNvbm5lY3REQikiXX0=