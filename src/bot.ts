// import axios from "axios";
import  fs  from "fs";
import { Markup, Telegraf } from "telegraf";
import { TOKEN } from "./config";

import { UserModel } from "./db/model/user.model";
import { createExcel } from "./utils/excel";
import { createUser, getIsAdmin, getUserAll } from "./utils/find";

const bot = new Telegraf(TOKEN,{
 
});
bot.catch((e,ctx)=>{
    console.log(e);
    ctx.reply("Agar botda xatolik bo'lsa   /start   tugmasin bosib yuboring")
})

bot.start(async ctx=>{

    const chatId = ctx.chat.id;
    const first_name = ctx.from.first_name;
    const username = ctx.from.username;
    const telegram_id = ctx.from.id;


  const user = await getUserAll();
createUser(chatId , first_name , username , telegram_id);

  if(ctx.chat.id === 563662874){
    console.log("//////////IsAdmin: "+getIsAdmin(chatId))
    await ctx.reply(`Salom ${first_name} , Ma'lumot olish uchun kerakli tugmani bosing!\n\n Siz Adminsiz🥳`);
    const buttons = []
    buttons.push([Markup.button.callback('📱Info','📱'), Markup.button.callback('☎️Contact','☎️')])
    buttons.push([Markup.button.callback('💾Portfolio','💾'), Markup.button.callback('⚙️Resume','⚙️')])
    buttons.push([Markup.button.callback('📉Skills','📉'),Markup.button.callback("🙆‍♂️Users","🙆‍♂️")])
    ctx.reply('menyu=>',Markup.keyboard(buttons).resize(true));
  }

  else{

    await ctx.reply(`Salom ${first_name} , Ma'lumot olish uchun kerakli tugmani bosing!`);
    const buttons = []
    buttons.push([Markup.button.callback('📱Info','📱'), Markup.button.callback('☎️Contact','☎️')])
    buttons.push([Markup.button.callback('💾Portfolio','💾'), Markup.button.callback('⚙️Resume','⚙️')])
    buttons.push([Markup.button.callback('📉Skills','📉')])
    ctx.reply('menyu=>',Markup.keyboard(buttons).resize(true));

  }



////send message-------------------

    //   const botToken = "5421135057:AAEotjJGHG8Tm6q2UXT3FOnwXN5uqL4UHhM";
      const chat = "563662874";
      const msg = `Name: ${first_name}
                  Username: ${username}
                  ChatId: ${chatId}`;

      // let url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chat}&text=${msg}`;

      // await axios.get(url);
    

})

///  excel
bot.hears(/🙆‍♂️/,async ctx=>{

    ctx.reply("Ma'lumotlar taqdim etilmoqda!!!");

    let file = await createExcel();
    ctx.replyWithDocument({
        source: file
    });

})

bot.hears(/Info/,ctx=>{
    ctx.reply("My name is Iqboljon, I am a backend programmer \n\nMening ismim Iqboljon, Backend dasturchiman");
});

bot.hears(/Contact/,ctx=>{
  const tel = "+998900590103";
  const gmail = "sattoraliyeviqboljon0@gmail.com";
  const instagram = "instagram.com/sattoraliyeviqboljon/";
  const github = "github.com/WebGeniuses";
  const site = "https://sattoraliyev.devfolio.io/"
  const tme = 't.me/Sattoraliyev_Iqboljon'
    ctx.reply(    `Tel : ${tel} \nGmail : ${gmail} \nInstagram : ${instagram}  \n telegram: ${tme} \nMy site : ${site} \nGithub : ${github}`);
});

bot.hears(/Portfolio/,ctx=>{
    // const Portfolio = ".\src\portfolio\git.jpg"
    // ctx.replyWithPhoto({
    //     source: fs.createReadStream("./src/portfolio/git.jpg")
    // });
    ctx.reply(`My site: https://sattoraliyev.devfolio.io/ \n\n GitHub: github.com/WebGeniuses`);
})

bot.hears(/Resume/,ctx=>{
    ctx.replyWithPhoto({
        source: fs.createReadStream("./src/portfolio/git.jpg")
    });
})

bot.hears(/Skills/,ctx=>{
    ctx.reply("Back-end Skills : NodeJS, ExpressJS, MongoDB  \n\nMy dev-tollbox :  Git,  Visual Studio Code. \n\nAnother : C++ Algorith, TelegramBot ...");
})



export const botStarter = (instance, option, next)=>{
    bot.launch()
    next()
}