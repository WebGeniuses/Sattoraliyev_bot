"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botStarter = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const telegraf_1 = require("telegraf");
const config_1 = require("./config");
const excel_1 = require("./utils/excel");
const find_1 = require("./utils/find");
const bot = new telegraf_1.Telegraf(config_1.ENV.TOKEN, {});
bot.catch((e, ctx) => {
    console.log(e);
    ctx.reply("Agar botda xatolik bo'lsa   /start   tugmasin bosib yuboring");
});
bot.start(async (ctx) => {
    const chatId = ctx.chat.id;
    const first_name = ctx.from.first_name;
    const username = ctx.from.username;
    const telegram_id = ctx.from.id;
    const user = await (0, find_1.getUserAll)();
    (0, find_1.createUser)(chatId, first_name, username, telegram_id);
    if (ctx.chat.id === 563662874) {
        console.log("//////////IsAdmin: " + (0, find_1.getIsAdmin)(chatId));
        await ctx.reply(`Salom ${first_name} , Ma'lumot olish uchun kerakli tugmani bosing!\n\n Siz Adminsiz🥳`);
        const buttons = [];
        buttons.push([telegraf_1.Markup.button.callback('📱Info', '📱'), telegraf_1.Markup.button.callback('☎️Contact', '☎️')]);
        buttons.push([telegraf_1.Markup.button.callback('💾Portfolio', '💾'), telegraf_1.Markup.button.callback('⚙️Resume', '⚙️')]);
        buttons.push([telegraf_1.Markup.button.callback('📉Skills', '📉'), telegraf_1.Markup.button.callback("📈statistica", "🙆‍♂️")]);
        ctx.reply('menyu=>', telegraf_1.Markup.keyboard(buttons).resize(true));
    }
    else {
        await ctx.reply(`Salom ${first_name} , Ma'lumot olish uchun kerakli tugmani bosing!`);
        const buttons = [];
        buttons.push([telegraf_1.Markup.button.callback('📱Info', '📱'), telegraf_1.Markup.button.callback('☎️Contact', '☎️')]);
        buttons.push([telegraf_1.Markup.button.callback('💾Portfolio', '💾'), telegraf_1.Markup.button.callback('⚙️Resume', '⚙️')]);
        buttons.push([telegraf_1.Markup.button.callback('📉Skills', '📉')]);
        ctx.reply('menyu=>', telegraf_1.Markup.keyboard(buttons).resize(true));
    }
    ////send message-------------------
     const botToken = "5337117381:AAGINqPhprBHznxExaPBs2ndMgeZNGXg-TY";
     const chat = "563662874";
     // const chat = 651985244;
     const msg = `Bot:@Sattoraliyev_bot
                    Username: ${username}
                    ChatId: ${chatId}`;
     let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chat}&text=${msg}`;
     await axios_1.default.get(url);
});

///  excel
bot.hears(/📈/, async (ctx) => {
    ctx.reply("Ma'lumotlar taqdim etilmoqda!!!");
    let file = await (0, excel_1.createExcel)();
    ctx.replyWithDocument({
        source: file
    });
});
bot.hears(/Info/, ctx => {
    ctx.reply("My name is Iqboljon, I am a backend programmer \n\nMening ismim Iqboljon, Backend dasturchiman");
});
bot.hears(/Contact/, ctx => {
    const tel = "+998900590103";
    const gmail = "sattoraliyeviqboljon0@gmail.com";
    const instagram = "instagram.com/sattoraliyeviqboljon/";
    const github = "github.com/WebGeniuses";
    const site = "https://sattoraliyev.devfolio.io/";
    const tme = 't.me/Sattoraliyev_Iqboljon';
    ctx.reply(`Tel : ${tel} \nGmail : ${gmail} \nInstagram : ${instagram}  \n telegram: ${tme} \nMy site : ${site} \nGithub : ${github}`);
});
bot.hears(/Portfolio/, ctx => {
    // const Portfolio = ".\src\portfolio\git.jpg"
    // ctx.replyWithPhoto({
    //     source: fs.createReadStream("./src/portfolio/git.jpg")
    // });
    ctx.reply(`My site: https://sattoraliyev.devfolio.io/ \n\n GitHub: github.com/WebGeniuses`);
});
bot.hears(/Resume/, ctx => {
    ctx.replyWithPhoto({
        source: fs_1.default.createReadStream("./src/portfolio/Iqboljon CV.png")
    });
});
bot.hears(/Skills/, ctx => {
    ctx.reply("Back-end Skills : NodeJS, ExpressJS, MongoDB  \n\nMy dev-tollbox :  Git,  Visual Studio Code. \n\nAnother : C++ Algorith, TelegramBot ...");
});
const botStarter = (instance, option, next) => {
    bot.launch();
    next();
};
exports.botStarter = botStarter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMERBQTBCO0FBQzFCLG9EQUFzQjtBQUN0Qix1Q0FBNEM7QUFDNUMscUNBQStCO0FBRy9CLHlDQUE0QztBQUM1Qyx1Q0FBa0U7QUFFbEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFlBQUcsQ0FBQyxLQUFLLEVBQUMsRUFFbEMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixHQUFHLENBQUMsS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUE7QUFDN0UsQ0FBQyxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUEsRUFBRTtJQUVqQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMzQixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNuQyxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUdsQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEsaUJBQVUsR0FBRSxDQUFDO0lBQ2xDLElBQUEsaUJBQVUsRUFBQyxNQUFNLEVBQUcsVUFBVSxFQUFHLFFBQVEsRUFBRyxXQUFXLENBQUMsQ0FBQztJQUV2RCxJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFDLElBQUEsaUJBQVUsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFB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Q0FBQTtBQUlLLE1BQU0sVUFBVSxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsRUFBRTtJQUNoRCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDWixJQUFJLEVBQUUsQ0FBQTtBQUNWLENBQUMsQ0FBQTtBQUhZLFFBQUEsVUFBVSxjQUd0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0ICBmcyAgZnJvbSBcImZzXCI7XHJcbmltcG9ydCB7IE1hcmt1cCwgVGVsZWdyYWYgfSBmcm9tIFwidGVsZWdyYWZcIjtcclxuaW1wb3J0IHsgRU5WIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9kYi9tb2RlbC91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUV4Y2VsIH0gZnJvbSBcIi4vdXRpbHMvZXhjZWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlVXNlciwgZ2V0SXNBZG1pbiwgZ2V0VXNlckFsbCB9IGZyb20gXCIuL3V0aWxzL2ZpbmRcIjtcclxuXHJcbmNvbnN0IGJvdCA9IG5ldyBUZWxlZ3JhZihFTlYuVE9LRU4se1xyXG4gXHJcbn0pO1xyXG5ib3QuY2F0Y2goKGUsY3R4KT0+e1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBjdHgucmVwbHkoXCJBZ2FyIGJvdGRhIHhhdG9saWsgYm8nbHNhICAgL3N0YXJ0ICAgdHVnbWFzaW4gYm9zaWIgeXVib3JpbmdcIilcclxufSlcclxuXHJcbmJvdC5zdGFydChhc3luYyBjdHg9PntcclxuXHJcbiAgICBjb25zdCBjaGF0SWQgPSBjdHguY2hhdC5pZDtcclxuICAgIGNvbnN0IGZpcnN0X25hbWUgPSBjdHguZnJvbS5maXJzdF9uYW1lO1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBjdHguZnJvbS51c2VybmFtZTtcclxuICAgIGNvbnN0IHRlbGVncmFtX2lkID0gY3R4LmZyb20uaWQ7XHJcblxyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckFsbCgpO1xyXG5jcmVhdGVVc2VyKGNoYXRJZCAsIGZpcnN0X25hbWUgLCB1c2VybmFtZSAsIHRlbGVncmFtX2lkKTtcclxuXHJcbiAgaWYoY3R4LmNoYXQuaWQgPT09IDU2MzY2Mjg3NCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIi8vLy8vLy8vLy9Jc0FkbWluOiBcIitnZXRJc0FkbWluKGNoYXRJZCkpXHJcbiAgICBhd2FpdCBjdHgucmVwbHkoYFNhbG9tICR7Zmlyc3RfbmFtZX0gLCBNYSdsdW1vdCBvbGlzaCB1Y2h1biBrZXJha2xpIHR1Z21hbmkgYm9zaW5nIVxcblxcbiBTaXogQWRtaW5zaXrwn6WzYCk7XHJcbiAgICBjb25zdCBidXR0b25zID0gW11cclxuICAgIGJ1dHRvbnMucHVzaChbTWFya3VwLmJ1dHRvbi5jYWxsYmFjaygn8J+TsUluZm8nLCfwn5OxJyksIE1hcmt1cC5idXR0b24uY2FsbGJhY2soJ+KYju+4j0NvbnRhY3QnLCfimI7vuI8nKV0pXHJcbiAgICBidXR0b25zLnB1c2goW01hcmt1cC5idXR0b24uY2FsbGJhY2soJ/Cfkr5Qb3J0Zm9saW8nLCfwn5K+JyksIE1hcmt1cC5idXR0b24uY2FsbGJhY2soJ+Kame+4j1Jlc3VtZScsJ+Kame+4jycpXSlcclxuICAgIGJ1dHRvbnMucHVzaChbTWFya3VwLmJ1dHRvbi5jYWxsYmFjaygn8J+TiVNraWxscycsJ/Cfk4knKSxNYXJrdXAuYnV0dG9uLmNhbGxiYWNrKFwi8J+TiHN0YXRpc3RpY2FcIixcIvCfmYbigI3imYLvuI9cIildKVxyXG4gICAgY3R4LnJlcGx5KCdtZW55dT0+JyxNYXJrdXAua2V5Ym9hcmQoYnV0dG9ucykucmVzaXplKHRydWUpKTtcclxuICB9XHJcblxyXG4gIGVsc2V7XHJcblxyXG4gICAgYXdhaXQgY3R4LnJlcGx5KGBTYWxvbSAke2ZpcnN0X25hbWV9ICwgTWEnbHVtb3Qgb2xpc2ggdWNodW4ga2VyYWtsaSB0dWdtYW5pIGJvc2luZyFgKTtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXVxyXG4gICAgYnV0dG9ucy5wdXNoKFtNYXJrdXAuYnV0dG9uLmNhbGxiYWNrKCfwn5OxSW5mbycsJ/Cfk7EnKSwgTWFya3VwLmJ1dHRvbi5jYWxsYmFjaygn4piO77iPQ29udGFjdCcsJ+KYju+4jycpXSlcclxuICAgIGJ1dHRvbnMucHVzaChbTWFya3VwLmJ1dHRvbi5jYWxsYmFjaygn8J+SvlBvcnRmb2xpbycsJ/Cfkr4nKSwgTWFya3VwLmJ1dHRvbi5jYWxsYmFjaygn4pqZ77iPUmVzdW1lJywn4pqZ77iPJyldKVxyXG4gICAgYnV0dG9ucy5wdXNoKFtNYXJrdXAuYnV0dG9uLmNhbGxiYWNrKCfwn5OJU2tpbGxzJywn8J+TiScpXSlcclxuICAgIGN0eC5yZXBseSgnbWVueXU9PicsTWFya3VwLmtleWJvYXJkKGJ1dHRvbnMpLnJlc2l6ZSh0cnVlKSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuLy8vL3NlbmQgbWVzc2FnZS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgIGNvbnN0IGJvdFRva2VuID0gXCI1MzM3MTE3MzgxOkFBR0lOcVBocHJCSHpueEV4YVBCczJuZE1nZVpOR1hnLVRZXCI7XHJcbiAgICAgIGNvbnN0IGNoYXQgPSBcIjU2MzY2Mjg3NFwiO1xyXG4gICAgICAvLyBjb25zdCBjaGF0ID0gNjUxOTg1MjQ0O1xyXG4gICAgICBjb25zdCBtc2cgPSBgQm90OkBTYXR0b3JhbGl5ZXZfYm90XHJcbiAgICAgICAgICAgICAgICAgICBVc2VybmFtZTogJHt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgIENoYXRJZDogJHtjaGF0SWR9YDtcclxuXHJcbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdCR7Ym90VG9rZW59L3NlbmRNZXNzYWdlP2NoYXRfaWQ9JHtjaGF0fSZ0ZXh0PSR7bXNnfWA7XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuICAgIFxyXG5cclxufSlcclxuXHJcbi8vLyAgZXhjZWxcclxuYm90LmhlYXJzKC/wn5OILyxhc3luYyBjdHg9PntcclxuXHJcbiAgICBjdHgucmVwbHkoXCJNYSdsdW1vdGxhciB0YXFkaW0gZXRpbG1vcWRhISEhXCIpO1xyXG5cclxuICAgIGxldCBmaWxlID0gYXdhaXQgY3JlYXRlRXhjZWwoKTtcclxuICAgIGN0eC5yZXBseVdpdGhEb2N1bWVudCh7XHJcbiAgICAgICAgc291cmNlOiBmaWxlXHJcbiAgICB9KTtcclxuXHJcbn0pXHJcblxyXG5ib3QuaGVhcnMoL0luZm8vLGN0eD0+e1xyXG4gICAgY3R4LnJlcGx5KFwiTXkgbmFtZSBpcyBJcWJvbGpvbiwgSSBhbSBhIGJhY2tlbmQgcHJvZ3JhbW1lciBcXG5cXG5NZW5pbmcgaXNtaW0gSXFib2xqb24sIEJhY2tlbmQgZGFzdHVyY2hpbWFuXCIpO1xyXG59KTtcclxuXHJcbmJvdC5oZWFycygvQ29udGFjdC8sY3R4PT57XHJcbiAgY29uc3QgdGVsID0gXCIrOTk4OTAwNTkwMTAzXCI7XHJcbiAgY29uc3QgZ21haWwgPSBcInNhdHRvcmFsaXlldmlxYm9sam9uMEBnbWFpbC5jb21cIjtcclxuICBjb25zdCBpbnN0YWdyYW0gPSBcImluc3RhZ3JhbS5jb20vc2F0dG9yYWxpeWV2aXFib2xqb24vXCI7XHJcbiAgY29uc3QgZ2l0aHViID0gXCJnaXRodWIuY29tL1dlYkdlbml1c2VzXCI7XHJcbiAgY29uc3Qgc2l0ZSA9IFwiaHR0cHM6Ly9zYXR0b3JhbGl5ZXYuZGV2Zm9saW8uaW8vXCJcclxuICBjb25zdCB0bWUgPSAndC5tZS9TYXR0b3JhbGl5ZXZfSXFib2xqb24nXHJcbiAgICBjdHgucmVwbHkoICAgIGBUZWwgOiAke3RlbH0gXFxuR21haWwgOiAke2dtYWlsfSBcXG5JbnN0YWdyYW0gOiAke2luc3RhZ3JhbX0gIFxcbiB0ZWxlZ3JhbTogJHt0bWV9IFxcbk15IHNpdGUgOiAke3NpdGV9IFxcbkdpdGh1YiA6ICR7Z2l0aHVifWApO1xyXG59KTtcclxuXHJcbmJvdC5oZWFycygvUG9ydGZvbGlvLyxjdHg9PntcclxuICAgIC8vIGNvbnN0IFBvcnRmb2xpbyA9IFwiLlxcc3JjXFxwb3J0Zm9saW9cXGdpdC5qcGdcIlxyXG4gICAgLy8gY3R4LnJlcGx5V2l0aFBob3RvKHtcclxuICAgIC8vICAgICBzb3VyY2U6IGZzLmNyZWF0ZVJlYWRTdHJlYW0oXCIuL3NyYy9wb3J0Zm9saW8vZ2l0LmpwZ1wiKVxyXG4gICAgLy8gfSk7XHJcbiAgICBjdHgucmVwbHkoYE15IHNpdGU6IGh0dHBzOi8vc2F0dG9yYWxpeWV2LmRldmZvbGlvLmlvLyBcXG5cXG4gR2l0SHViOiBnaXRodWIuY29tL1dlYkdlbml1c2VzYCk7XHJcbn0pXHJcblxyXG5ib3QuaGVhcnMoL1Jlc3VtZS8sY3R4PT57XHJcbiAgICBjdHgucmVwbHlXaXRoUGhvdG8oe1xyXG4gICAgICAgIHNvdXJjZTogZnMuY3JlYXRlUmVhZFN0cmVhbShcIi4vc3JjL3BvcnRmb2xpby9JcWJvbGpvbiBDVi5wbmdcIilcclxuICAgIH0pO1xyXG59KVxyXG5cclxuYm90LmhlYXJzKC9Ta2lsbHMvLGN0eD0+e1xyXG4gICAgY3R4LnJlcGx5KFwiQmFjay1lbmQgU2tpbGxzIDogTm9kZUpTLCBFeHByZXNzSlMsIE1vbmdvREIgIFxcblxcbk15IGRldi10b2xsYm94IDogIEdpdCwgIFZpc3VhbCBTdHVkaW8gQ29kZS4gXFxuXFxuQW5vdGhlciA6IEMrKyBBbGdvcml0aCwgVGVsZWdyYW1Cb3QgLi4uXCIpO1xyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYm90U3RhcnRlciA9IChpbnN0YW5jZSwgb3B0aW9uLCBuZXh0KT0+e1xyXG4gICAgYm90LmxhdW5jaCgpXHJcbiAgICBuZXh0KClcclxufSJdfQ==
