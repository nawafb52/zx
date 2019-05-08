const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})

console.log("تم التشغيل,");


client.on('guildMemberAdd', member => {
member.createDM().then(function (channel) {
if(mohamed) {
setTimeout(() => mohamed.send(`**-**حين تغيب شمس أحلامكم.. لا تنتظروا شروق شمس جديدة.. فقد تتأخر عليكم كثيراً.. 
وحأولوا أنتم أن تبحثوا عنها خلف غيوم الأيام.. كي لا تضيع سنواتكم في ظلمة الإنتظار. 🕊 
حياكم بسيرفير Vegas. 
رابط ☘ | https://discord.gg/xMHym5W ** **`), 9900)        
}
});
client.login(process.env.BOT_TOKEN);
