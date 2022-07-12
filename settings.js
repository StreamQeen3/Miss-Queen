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
global.alivelogo = `https://i.pinimg.com/originals/d0/5a/f9/d05af9f29bdc165d849080a69632c209.jpg`
global.alive =`🛑🄷🄴🅈 🅃🄷🄴🅁🄴🛑

🔴𝐁𝐨𝐭 𝐎𝐧𝐥𝐢𝐧𝐞 𝐍𝐎𝐖 ‼️

𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 ➠ 💆‍𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿_𝚋𝚘𝚝_24/7💆‍♂️

🔊𝕎𝕆ℝ𝕂 𝕋𝕀𝕄𝔼 ➠ ➋➍❱➐ *තමා ඉතින්*

▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
*Min*- - - - - - - - - - - -● *Max*

🅣🅗🅐🅝🅚🅢 🅕🅞🅡 🅤🅢🅘🅝🅖 🅜🅔

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
