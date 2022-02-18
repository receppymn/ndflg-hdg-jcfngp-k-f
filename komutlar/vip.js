const Discord = require('discord.js');
const db = require('quick.db');
const jkood = require('../jkood.js');

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin!`);
    const log = await jkood.log
  if(log == null) return message.channel.send('');

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
  if (!member) return message.reply('Lütfen Bir Kullanıcı veya ID Girin.')
  if (member.roles.cache.has(jkood.viprol)) return message.reply("Bu Kişi Zaten V.I.P!")
  let vip = jkood.viprol
  
 member.roles.add(vip)
  
  const embed = new Discord.MessageEmbed()
    .setAuthor("VIP Verme İşlemi Başarılı!")
    .addField(`Vip Yapılan\n`, `${member}`)
    .addField(`Yetkili\n`, `${message.author}`)
    .setColor("BLUE")
    .setTimestamp()  
message.channel.send(embed)

     const embed2 = new Discord.MessageEmbed()
    .setAuthor("Bir Kişiye VİP Verildi!")
    .addField(`Verilen\n`, `${member}, ${member.id}`)
    .addField(`Alan\n`, `${message.author}`)
    .setColor("#07a8ff")
    .setTimestamp()  
    message.guild.channels.cache.get(jkood.log).send(embed2)


} 


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['.vip'],
  permLevel: 0
}
exports.help = {
  name: '!vip',
  description: "Vip verir",
  usage: 'vip @kişi'
}