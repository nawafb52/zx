const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})

console.log("تم التشغيل,");
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return setTimeout(() => channel.send(`
رمضان كريم يارب تكون سنة سعيدة عليك
Welcome To  Vegas.
[ https://discord.gg/xMHym5W ]
**`)
}
});
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return setTimeout(() => channel.send(`**
ي تُرى الضحكه النابته على وجهك , مشتل من الجنه ولا جرعه من الورد ، تعال سمعنا صوتك ♥ 
Welcome To  Vegas.**
https://discord.gg/gF87Ukm
**`) , 1000)
}).catch(console.error)
})
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return setTimeout(() => channel.send(`
 😘😘😍😍😍💜💜💙💛💛💜💕👊✌✌✌حياك ياقلبي
https://discord.gg/JRV6zX6
**`), 10000)
}).catch(console.error)
})
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return setTimeout(() => channel.send(`-**حين تغيب شمس أحلامكم.. لا تنتظروا شروق شمس جديدة.. فقد تتأخر عليكم كثيراً.. 
وحأولوا أنتم أن تبحثوا عنها خلف غيوم الأيام.. كي لا تضيع سنواتكم في ظلمة الإنتظار. 🕊 
حياكم بسيرفير Vegas. 
رابط ☘ | https://discord.gg/xMHym5W ** 
`), 5000)
 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
