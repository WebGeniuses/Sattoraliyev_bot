"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../collections");
let User = class User {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "chatId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "telegram_id", void 0);
User = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.Collection.USER
        }
    })
], User);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9tb2RlbC91c2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvREFBNEU7QUFDNUUsZ0RBQTRDO0FBTzNDLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7Q0FlaEIsQ0FBQTtBQWJHO0lBREMsSUFBQSxnQkFBSSxHQUFFOztvQ0FDUTtBQUdmO0lBREMsSUFBQSxnQkFBSSxHQUFFOzt3Q0FDWTtBQUduQjtJQURDLElBQUEsZ0JBQUksR0FBRTs7c0NBQ2E7QUFHcEI7SUFEQyxJQUFBLGdCQUFJLEdBQUU7O3lDQUNZO0FBWFYsSUFBSTtJQUxqQixJQUFBLHdCQUFZLEVBQUM7UUFDVixhQUFhLEVBQUM7WUFDZCxVQUFVLEVBQUMsd0JBQVUsQ0FBQyxJQUFJO1NBQ3pCO0tBQ0osQ0FBQztHQUNZLElBQUksQ0FlaEI7QUFmWSxvQkFBSTtBQWlCSixRQUFBLFNBQVMsR0FBRyxJQUFBLDRCQUFnQixFQUFDLElBQUksQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgbW9kZWxPcHRpb25zLCBwcm9wIH0gZnJvbSBcIkB0eXBlZ29vc2UvdHlwZWdvb3NlXCI7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tIFwiLi4vY29sbGVjdGlvbnNcIjtcclxuXHJcbkBtb2RlbE9wdGlvbnMoe1xyXG4gICAgc2NoZW1hT3B0aW9uczp7XHJcbiAgICBjb2xsZWN0aW9uOkNvbGxlY3Rpb24uVVNFUlxyXG4gICAgfVxyXG59KVxyXG4gZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgIEBwcm9wKClcclxuICAgICBjaGF0SWQ6IG51bWJlcjtcclxuXHJcbiAgICAgQHByb3AoKVxyXG4gICAgIGZpcnN0X25hbWU6IHN0cmluZztcclxuXHJcbiAgICAgQHByb3AoKVxyXG4gICAgIHVzZXJuYW1lID86ICBzdHJpbmc7XHJcblxyXG4gICAgIEBwcm9wKClcclxuICAgICB0ZWxlZ3JhbV9pZDpudW1iZXI7XHJcbiAgICAgY3JlYXRlZEF0OiBEYXRlXHJcbiAgICAgVXBkYXRlZEF0OiBEYXRlXHJcblxyXG4gfVxyXG5cclxuIGV4cG9ydCBjb25zdCBVc2VyTW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKFVzZXIpXHJcbiJdfQ==