/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94762511600'] // Owner number , (අයිතිකරුගේ නම්බර් එක )
global.pemilik = ['94762511600'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94762511600'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '💆‍♂️𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿_𝚋𝚘𝚝_24/7💆‍♂️' // Your name ඔබේ නම 
global.botnma = '𝙼𝚒𝚜𝚜 𝚀𝚎𝚎𝚗 𝚆𝙰_𝚋𝚘𝚝' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = '💆‍♂️𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿_𝚋𝚘𝚝_24/7💆‍' //ownernama,ownername
global.packname = '𝙼𝚒𝚜𝚜 𝚀𝚎𝚎𝚗 𝚆𝙰_𝚋𝚘𝚝' // Sticker package name 
global.author = '💆‍♂️𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿_𝚋𝚘𝚝_24/7💆‍' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති ` ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://c4.wallpaperflare.com/wallpaper/668/104/991/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg`
global.alive =`─ ⋞ 〈🛑 *🄷🄴🅈 🅃🄷🄴🅁🄴* 🛑〉 ⋟ ─

⫺ ╤╤╧╧╤╤ ⋞ 〈 ⫹⫺ 〉 ⋟ ╤╤╧╧╤╤ ⫹
┋   ‍  ‍ 🔴 *𝐁𝐨𝐭 𝐎𝐧𝐥𝐢𝐧𝐞 𝐍𝐎𝐖* ‼️
⫺ ╧╧╧╧╧╧ ⋞ 〈 ⫹⫺ 〉 ⋟ ╧╧╧╧╧╧ ⫹
┋
┋ ‍ ❯❯ *🅱️🅾️🆃 🅸🅽🅵🅾️* ❮❮
┋
┋⛥❮ *𝚂𝚙𝚎𝚎𝚍*❯ *0.0111 𝘔𝘪𝘭𝘪𝘴𝘦𝘤𝘰𝘯𝘥𝘴*
┋⛥❮ *𝚁𝚞𝚗𝚝𝚒𝚖𝚎*❯ *10 𝘏𝘰𝘶𝘳𝘴,49 𝘔𝘪𝘯𝘶𝘵𝘦𝘴*
┋⛥❮ *𝙱𝚘𝚝 𝙽𝚊𝚖𝚎*❯ *𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯 𝘞𝘈 𝘣𝘰𝘵*
┋⛥❮ *𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖*❯ *𝘓𝘪𝘯𝘶𝘹*
┋⛥❮ *𝚃𝚘𝚝𝚊𝚕 𝚄𝚜𝚎𝚛*❯ *999*
┋⛥❮ *𝙾𝚠𝚗𝚎𝚛   𝙽𝚊𝚖𝚎*❯ *𝚆𝚊_𝚋𝚘𝚝 24/7*
┋⛥❮ *𝙾𝚠𝚗𝚎𝚛 𝙽𝚞𝚖𝚋𝚎𝚛*❯ +94762511600
┋
┋ ‍  ‍   ‍  ‍  ‍ ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
┋ ‍  ‍ *Min* - - - - - - - - - - - -● *Max*
┋
┋ 🅣🅗🅐🅝🅚🅢 🅕🅞🅡 🅤🅢🅘🅝🅖 ┋ ‍  ‍   ‍  ‍  ‍ ‍  ‍   ‍  ‍  ‍ ‍  ‍   ‍🅜🅔
┋
⫺ ╧╧╧╧╧╧ ⋞ 〈 ⫹⫺ 〉 ⋟ ╧╧╧╧╧╧ ⫹

Download song type .yt 
Thanks fro using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `
🌀 Thanks Fro using 𝙼𝚒𝚜𝚜 𝚀𝚎𝚎𝚗 𝚆𝙰_𝚋𝚘𝚝
✾ Some bugs fixing
😼♥️
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = ``
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = ``
// Caption 
global.cap = `💆‍𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿_𝚋𝚘𝚝_24/7💆‍`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
