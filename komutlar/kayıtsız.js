const Discord = require("discord.js");
const jkood = require('../jkood.js');

exports.run = async(client, message, args) => {
if(!message.member.hasPermission(jkood.KayitYetkilisi)) return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
    const log = await jkood.log
  if(log == null) return message.channel.send('');

const kayıtsız = jkood.kayıtsızrol

const kişi = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!kişi) return message.reply('Lütfen bir kullanıcı girin.')

if(kişi.id === message.author.id) return message.reply('Kendini Kayıtsıza Atamazsın. Lütfen Geçerli Bir Kullanıcı Gir.')
if(kişi.id === client.user.id)return message.reply('Botu Kayıtsıza Atamazsın. Lütfen Geçerli Bir Kullanıcı Gir.')
if(kişi.id === message.guild.OwnerID) return message.reply('Sunucu Sahibini Kayıtsıza Atamazsın. Lütfen Geçerli Bir Kullanıcı Gir.');
  const user = message.guild.member(kişi)
  if (user.roles.cache.has(kayıtsız)) return message.reply("Bu Kişi Zaten Kayıtsız!")
  
  user.setNickname("")

const embed = new Discord.MessageEmbed()
.setAuthor("Kayıtsıza Atma İşlemi Başarılı!")
.addField(`Kayıtsıza Atılan`, `${kişi}`)
.addField(`İşlemi Uygulayan`,`${message.author}`)
.setColor('BLUE')
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.setTimestamp()
message.channel.send(embed)
  
      const embed2 = new Discord.MessageEmbed()
    .setAuthor("Bir Üye Kayıtsıza Atıldı!")
    .addField(`Kayıt Edilen\n`, `${user}, ${user.id}`)
    .addField(`Yetkili\n`, `${message.author}`)
    .setColor("GREEN")
    .setTimestamp()  
    message.guild.channels.cache.get(jkood.log).send(embed2)

kişi.roles.add(kayıtsız) 
kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)})
      
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["!unregister","!unreg",".unreg",".kayıtsız","!kayıtsız"],
    permLevel: 0,
}
exports.help = {
      name: ".unregister"
}