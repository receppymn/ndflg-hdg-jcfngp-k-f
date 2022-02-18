const Discord = require('discord.js');
const db = require('quick.db') 
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')
const kişi = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
   if (message.mentions.users.size < 1) return message.reply('Lütfen İstatistiklerini Sıfırlayacak Kişiyi Belirt.');
     if (db.has(`toplamistatistik${kişi.id}`) === false) return message.reply("Belirtilen Kişinin İstatistikleri Zaten 0 Görünüyor.")


   message.reply('Belirtilen Kişinin İstatistikleri Sıfırlanmıştır.')
db.delete(`toplamistatistik${kişi.id}`)
db.delete(`erkekistatistik${kişi.id}`)
db.delete(`kızistatistik${kişi.id}`)  

}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: ["!stats-sıfırla"], 
permLevel: 0
}

exports.help = {
 name: '.stats-sıfırla', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};