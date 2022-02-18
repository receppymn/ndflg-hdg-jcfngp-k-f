const Discord = require("discord.js");
const db = require('quick.db');
const jkood = require('../jkood.js');
const zaman = require("useful-tools")

exports.run = async (client, message, args) => {
    const log = await jkood.log
  if(log == null) return message.channel.send('');

  const kayıtkanalı = await jkood.Kayıtkanal
  if(kayıtkanalı == null) return message.channel.send('');
  if (message.channel.id !== kayıtkanalı) return message.channel.send(`Kayıt İşlemlerini Sadece Ayarlanmış Kayıt Kanalından Yapabilirsiniz. (<#${kayıtkanalı}>)`);
  if(!message.member.roles.cache.has(jkood.KayitYetkilisi)) { return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
  } else {
  const erkekrol = await jkood.KadınRol
  if(!erkekrol) return message.reply(`Kadın Rolü Ayarlanmamış!`)
    
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
      if(!member) return message.channel.send("Lütfen Bir Kullanıcı Girin.")
       if(member.id === message.author.id) return message.reply('Kendini Kayıt Edemessin. Lütfen Geçerli Bir Kullanıcı Gir.')
    if(member.id === client.user.id) return message.reply('Botu Kayıt Edemessin. Lütfen Geçerli Bir Kullanıcı Gir.')
    if(member.id === message.guild.OwnerID) return message.reply('Sunucu Sahibini Kayıt Edemessin. Lütfen Geçerli Bir Kullanıcı Gir.')
    const user = message.guild.member(member)
    if (user.roles.cache.has(jkood.KadınRol)) return message.reply("Bu Kişi Zaten Kayıtlı!")
    const nick = args[1];
   const yas = args[2] || ""
      if(!nick) return message.channel.send("Lütfen Bir İsim Girin.")
      if (isNaN(yas)) return message.channel.send("Lütfen Bir Yaş Girin.");
    setTimeout(function(){user.roles.add(jkood.KadınRol)},3000)
    setTimeout(function(){user.roles.remove(jkood.kayıtsızrol)},4000)
    user.setNickname(`${nick}${jkood.tag}`)
    
    if(jkood.kızdiger){
    jkood.kızdiger.map(async youtubejkood => {
    await user.roles.add(youtubejkood)
  })
}
 
    if(jkood.kızalinacakdiger){
    jkood.kızalinacakdiger.map(async youtubejkood => {
    await user.roles.remove(youtubejkood)
  })
}
    
      let sayı = 1
  let data = db.get("jkood."+message.guild.id+user.user.id)
  let isimler 
  if(data){
   isimler = db.get("jkood."+message.guild.id+user.user.id).map(jkoodcommunity => `**${sayı++}. \`${jkoodcommunity.name}\`**`).slice(0, jkood.Eskiİsimler).join("\n")
  } else {
       isimler = "`Eski İsim Kaydı Bulunamadı!`"
  }
    
    let sayı2 = 1
  let data2 = db.get("jkood."+message.guild.id+user.user.id)
  let katarih 
  if(data2){
   katarih = db.get("jkood."+message.guild.id+user.user.id).map(jkoodcommunity => `**${sayı2++}. \`${jkoodcommunity.tarih}\`**`).slice(0, jkood.KayitTarihi).join("\n")
  } else {
       katarih = "`Kayıt Tarihi Bulunamadı!`"
  }
    
    let sayı3 = 1
  let data3 = db.get("jkood."+message.guild.id+user.user.id)
  let kayetkili
  if(data3){
   kayetkili = db.get("jkood."+message.guild.id+user.user.id).map(jkoodcommunity => `**${sayı3++}. \`<@${jkoodcommunity.kaydeden}>\`**`).slice(0, jkood.kayitedenler).join("\n")
  } else {
       kayetkili = "`Kayıt Edenler Bulunamadı!`"
  }
    
  db.push("jkood."+message.guild.id+user.user.id,{
    id: user.user.id,
    name: `${nick}${jkood.tag}`,
    tarih: `${zaman.tarih(Date.now())}`,
    cinsiyet: "Kadın",
    kaydeden: message.author.id
  })
    
    
      const Embed = new Discord.MessageEmbed()
    .setAuthor("Kadın Üye Kaydı Yapıldı!")
    .addField(`Kayıt Edilen\n`, `${user}`)
    .addField(`Yetkili\n`, `${message.author}`)
    .setColor("#fc2dfd")
    .setTimestamp()  
    message.guild.channels.cache.get(jkood.Kayıtkanal).send(Embed)
    
      const Embed2 = new Discord.MessageEmbed()
    .setAuthor("Bir Üye Kadın Olarak Kaydedildi!")
    .addField(`Kayıt Edilen\n`, `${nick}${jkood.tag}(${user}), ${user.id}`)
    .addField(`Yetkili\n`, `${message.author}`)
    .setColor("#fc2dfd")
    .setTimestamp()  
    message.guild.channels.cache.get(jkood.log).send(Embed2)
    

    db.add(`kızistatistik${message.author.id}.${message.guild.id}`, 1)
    db.add(`toplamistatistik${message.author.id}.${message.guild.id}`, 1)
    
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["!k",".k","!kadın"],
  permLevel: 0
};
exports.help = {
  name: ".kadın",
  description: "",
  usage: "kadın @etiket"
};
   