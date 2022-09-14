"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExcel = void 0;
const tslib_1 = require("tslib");
const exceljs_1 = tslib_1.__importDefault(require("exceljs"));
const path_1 = tslib_1.__importDefault(require("path"));
const find_1 = require("./find");
async function createExcel() {
    const users = await (0, find_1.getUserAll)();
    const columns = [
        { name: 'First Name.' },
        { name: '@Username.' },
        { name: 'TelegramId.' },
        { name: 'ChatId.' }
    ];
    const usersRow = users.map(u => [
        u.first_name,
        u.username,
        u.telegram_id,
        u.chatId
    ]);
    const workbook = new exceljs_1.default.Workbook();
    const worksheet = workbook.addWorksheet('excelSheet');
    // excel
    worksheet.addTable({
        name: 'users',
        ref: 'A1',
        columns: columns,
        rows: usersRow,
    });
    // const filename =`${new Date().getTime()}.xlsx`;
    const filename = `${new Date().getTime()}.xlsx`;
    const file = `../portfolio/${filename}`;
    const localPath = path_1.default.join(__dirname, file);
    await workbook.xlsx.writeFile(localPath);
    // const exe = `/src/portfolio/${filename}`
    return `./src/portfolio/${filename}`;
}
exports.createExcel = createExcel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZXhjZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhEQUE2QjtBQUM3Qix3REFBd0I7QUFDeEIsaUNBQW9DO0FBRzdCLEtBQUssVUFBVSxXQUFXO0lBQzdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBQSxpQkFBVSxHQUFFLENBQUE7SUFFaEMsTUFBTSxPQUFPLEdBQUc7UUFDZCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUM7UUFDckIsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDO1FBQ3BCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQztRQUNyQixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUM7S0FDbEIsQ0FBQTtJQUVELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUU5QixDQUFDLENBQUMsVUFBVTtRQUNaLENBQUMsQ0FBQyxRQUFRO1FBQ1YsQ0FBQyxDQUFDLFdBQVc7UUFDYixDQUFDLENBQUMsTUFBTTtLQUNULENBQUMsQ0FBQTtJQUVGLE1BQU0sUUFBUSxHQUFHLElBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELFFBQVE7SUFDUixTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pCLElBQUksRUFBRSxPQUFPO1FBQ2IsR0FBRyxFQUFFLElBQUk7UUFDVCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUMsQ0FBQztJQUVILGtEQUFrRDtJQUNsRCxNQUFNLFFBQVEsR0FBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUcvQyxNQUFNLElBQUksR0FBRyxnQkFBZ0IsUUFBUSxFQUFFLENBQUE7SUFDdkMsTUFBTSxTQUFTLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDNUMsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4QywyQ0FBMkM7SUFDM0MsT0FBTyxtQkFBbUIsUUFBUSxFQUFFLENBQUM7QUFFdkMsQ0FBQztBQXRDSCxrQ0FzQ0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZ2V0VXNlckFsbCB9IGZyb20gJy4vZmluZCc7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV4Y2VsKCkge1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRVc2VyQWxsKClcclxuICBcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgIHtuYW1lOiAnRmlyc3QgTmFtZS4nfSxcclxuICAgICAge25hbWU6ICdAVXNlcm5hbWUuJ30sXHJcbiAgICAgIHtuYW1lOiAnVGVsZWdyYW1JZC4nfSxcclxuICAgICAge25hbWU6ICdDaGF0SWQuJ31cclxuICAgIF1cclxuICBcclxuICAgIGNvbnN0IHVzZXJzUm93ID0gdXNlcnMubWFwKHUgPT4gW1xyXG4gICAgICBcclxuICAgICAgdS5maXJzdF9uYW1lLFxyXG4gICAgICB1LnVzZXJuYW1lLFxyXG4gICAgICB1LnRlbGVncmFtX2lkLFxyXG4gICAgICB1LmNoYXRJZFxyXG4gICAgXSlcclxuICBcclxuICAgIGNvbnN0IHdvcmtib29rID0gbmV3IEV4Y2VsSlMuV29ya2Jvb2soKTtcclxuICAgIGNvbnN0IHdvcmtzaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldCgnZXhjZWxTaGVldCcpO1xyXG4gICAgLy8gZXhjZWxcclxuICAgIHdvcmtzaGVldC5hZGRUYWJsZSh7XHJcbiAgICAgIG5hbWU6ICd1c2VycycsXHJcbiAgICAgIHJlZjogJ0ExJyxcclxuICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgcm93czogdXNlcnNSb3csXHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIGNvbnN0IGZpbGVuYW1lID1gJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0ueGxzeGA7XHJcbiAgICBjb25zdCBmaWxlbmFtZSA9YCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9Lnhsc3hgO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgZmlsZSA9IGAuLi9wb3J0Zm9saW8vJHtmaWxlbmFtZX1gXHJcbiAgICBjb25zdCBsb2NhbFBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKVxyXG4gICAgYXdhaXQgd29ya2Jvb2sueGxzeC53cml0ZUZpbGUobG9jYWxQYXRoKVxyXG4gICAgLy8gY29uc3QgZXhlID0gYC9zcmMvcG9ydGZvbGlvLyR7ZmlsZW5hbWV9YFxyXG4gICAgcmV0dXJuIGAuL3NyYy9wb3J0Zm9saW8vJHtmaWxlbmFtZX1gO1xyXG4gIFxyXG4gIH0iXX0=