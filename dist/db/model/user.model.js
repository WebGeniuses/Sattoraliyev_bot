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
tslib_1.__decorate([
    (0, typegoose_1.prop)({
        default: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "IsAdmin", void 0);
User = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.Collection.USER
        }
    })
], User);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9tb2RlbC91c2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvREFBNEU7QUFDNUUsZ0RBQTRDO0FBTzNDLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7Q0FtQmhCLENBQUE7QUFqQkc7SUFEQyxJQUFBLGdCQUFJLEdBQUU7O29DQUNRO0FBR2Y7SUFEQyxJQUFBLGdCQUFJLEdBQUU7O3dDQUNZO0FBR25CO0lBREMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDYTtBQUdwQjtJQURDLElBQUEsZ0JBQUksR0FBRTs7eUNBQ1k7QUFJbkI7SUFIQyxJQUFBLGdCQUFJLEVBQUM7UUFDSCxPQUFPLEVBQUMsS0FBSztLQUNmLENBQUM7O3FDQUNjO0FBZlAsSUFBSTtJQUxqQixJQUFBLHdCQUFZLEVBQUM7UUFDVixhQUFhLEVBQUM7WUFDZCxVQUFVLEVBQUMsd0JBQVUsQ0FBQyxJQUFJO1NBQ3pCO0tBQ0osQ0FBQztHQUNZLElBQUksQ0FtQmhCO0FBbkJZLG9CQUFJO0FBcUJKLFFBQUEsU0FBUyxHQUFHLElBQUEsNEJBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBtb2RlbE9wdGlvbnMsIHByb3AgfSBmcm9tIFwiQHR5cGVnb29zZS90eXBlZ29vc2VcIjtcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gXCIuLi9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgICBzY2hlbWFPcHRpb25zOntcclxuICAgIGNvbGxlY3Rpb246Q29sbGVjdGlvbi5VU0VSXHJcbiAgICB9XHJcbn0pXHJcbiBleHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICAgQHByb3AoKVxyXG4gICAgIGNoYXRJZDogbnVtYmVyO1xyXG5cclxuICAgICBAcHJvcCgpXHJcbiAgICAgZmlyc3RfbmFtZTogc3RyaW5nO1xyXG5cclxuICAgICBAcHJvcCgpXHJcbiAgICAgdXNlcm5hbWUgPzogIHN0cmluZztcclxuXHJcbiAgICAgQHByb3AoKVxyXG4gICAgIHRlbGVncmFtX2lkOm51bWJlcjtcclxuICAgICBAcHJvcCh7XHJcbiAgICAgICAgZGVmYXVsdDpmYWxzZVxyXG4gICAgIH0pXHJcbiAgICAgSXNBZG1pbjpib29sZWFuO1xyXG4gICAgIGNyZWF0ZWRBdDogRGF0ZVxyXG4gICAgIFVwZGF0ZWRBdDogRGF0ZVxyXG5cclxuIH1cclxuXHJcbiBleHBvcnQgY29uc3QgVXNlck1vZGVsID0gZ2V0TW9kZWxGb3JDbGFzcyhVc2VyKVxyXG4iXX0=