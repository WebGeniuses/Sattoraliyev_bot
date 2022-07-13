import ExcelJS from 'exceljs'
import path from 'path';
import { getUserAll } from './find';


export async function createExcel() {
    const users = await getUserAll()
  
    const columns = [
      {name: 'First Name.'},
      {name: '@Username.'},
      {name: 'TelegramId.'},
      {name: 'ChatId.'}
    ]
  
    const usersRow = users.map(u => [
      
      u.first_name,
      u.username,
      u.telegram_id,
      u.chatId
    ])
  
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('excelSheet');
    // excel
    worksheet.addTable({
      name: 'users',
      ref: 'A1',
      columns: columns,
      rows: usersRow,
    });
  
    // const filename =`${new Date().getTime()}.xlsx`;
    const filename =`${new Date().getTime()}.xlsx`;

    
    const file = `../portfolio/${filename}`
    const localPath = path.join(__dirname, file)
    await workbook.xlsx.writeFile(localPath)
    // const exe = `/src/portfolio/${filename}`
    return `./src/portfolio/${filename}`;
  
  }