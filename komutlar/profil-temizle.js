const Discord = require('discord.js');
const db = require('quick.db') 
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')
   let kişi = message.mentions.users.first();
const user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
   if (message.mentions.users.size < 1) return message.reply('Lütfen Profilini Temizleyeceğin Kişiyi Belirt.');
     if (db.has("jkood."+message.guild.id+user.user.id) === false) return message.reply("Belirtilen Kişinin Profili Zaten Temiz Görünüyor.")

       message.reply('Belirtilen Kişinin Profili Temizlenmiştir.')
   db.delete("jkood."+message.guild.id+user.user.id)

}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: ["!profil-temizle",".profil-sil","!profil-sil"], 
permLevel: 0
}

exports.help = {
 name: '.profil-temizle', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};