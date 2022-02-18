const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin!`);
const kişi = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!args[0]) {
    const erkekbilgi = await db.fetch(`erkekistatistik${message.author.id}.${message.guild.id}`)
    const kızbilgi = await db.fetch(`kızistatistik${message.author.id}.${message.guild.id}`)
    const toplambilgi = await db.fetch(`toplamistatistik${message.author.id}.${message.guild.id}`)
    const codework = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("BLUE")
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**Yetkilinin İstatistikleri**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam Kaydı \`${toplambilgi ? toplambilgi : '0'}\`**
    **Toplam Erkek Kaydı \`${erkekbilgi ? erkekbilgi : '0'}\`**
    **Toplam Kadın Kaydı \`${kızbilgi ? kızbilgi : '0'}\`**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(codework)}
  if(kişi) {
    const erkekbilgi = await db.fetch(`erkekistatistik${kişi.id}.${message.guild.id}`)
    const kızbilgi = await db.fetch(`kızistatistik${kişi.id}.${message.guild.id}`)
    const toplambilgi = await db.fetch(`toplamistatistik${kişi.id}.${message.guild.id}`)
    const codework = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("BLUE")
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**Yetkilinin Bilgileri**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    **Toplam Kaydı \`${toplambilgi ? toplambilgi : '0'}\`**
    **Toplam Erkek Kaydı \`${erkekbilgi ? erkekbilgi : '0'}\`**
    **Toplam Kadın Kaydı \`${kızbilgi ? kızbilgi : '0'}\`**
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`)
    message.channel.send(codework)}
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["!stats"],
 permLevel: 0,
};
exports.help = {
 name: '.stats'
};