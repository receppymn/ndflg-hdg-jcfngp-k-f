const Discord = require('discord.js');
const db = require('quick.db');
const jkood = require('../jkood.js');

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin!`);
      const log = await jkood.log
  if(log == null) return message.channel.send('');

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
  if (!member) return message.reply('Lütfen Bir Kullanıcı veya ID Girin.')
  if (!member.roles.cache.has(jkood.viprol)) return message.reply("Bu Kişi Zaten V.I.P Değil!")
  let vip = jkood.viprol
  
 member.roles.remove(vip)
  
   const embed = new Discord.MessageEmbed()
    .setAuthor("VIP Alma İşlemi Başarılı!")
    .addField(`Vip Yetkisi Alınan\n`, `${member}`)
    .addField(`Yetkili\n`, `${message.author}`)
    .setColor("BLUE")
    .setTimestamp()     
message.channel.send(embed)

     const embed2 = new Discord.MessageEmbed()
    .setAuthor("Bir Kişiden VİP Alındı!")
    .addField(`Verilen\n`, `${member}, ${member.id}`)
    .addField(`Alan\n`, `${message.author}`)
    .setColor("#07a8ff")
    .setTimestamp()  
    message.guild.channels.cache.get(jkood.log).send(embed2)




} 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['!vipal'],
  permLevel: 0
}
exports.help = {
  name: '.vipal',
  description: "Belirtilen üyeye kayıtsız rolü verir",
  usage: 'vip @kişi'
}