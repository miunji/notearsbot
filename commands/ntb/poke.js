const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
let config = require('./config.json');
let botId = config.botId;

var randomGif = ["https://i.waifu.pics/5du1H~U.gif",
    "https://i.waifu.pics/tqhmLSK.gif",
    "https://i.waifu.pics/i2mQiAk.gif",
    "https://i.waifu.pics/oxcUkpw.gif",
    "https://i.waifu.pics/Yf8glJM.gif",
    "https://i.waifu.pics/DWmZwNP.gif",
    "https://i.waifu.pics/oPFWOJk.gif",
    "https://i.waifu.pics/yxmTwwe.gif",
    "https://cdn.weeb.sh/images/B14SJlTQG.gif",
    "https://cdn.weeb.sh/images/HJZpLxkKDb.gif",
    "https://cdn.weeb.sh/images/rJ0hlsnR-.gif",
    "https://cdn.weeb.sh/images/SydLxJFwW.gif",
    "https://cdn.weeb.sh/images/rktSlkKvb.gif",
    "https://cdn.weeb.sh/images/SyJzRTKFW.gif",
    "https://cdn.weeb.sh/images/r1ALxJKwW.gif",
    "https://cdn.weeb.sh/images/rkaUe1YPb.gif",
    "https://cdn.weeb.sh/images/Hk2HekKD-.gif",
    "https://cdn.weeb.sh/images/BJhIekKwb.gif",
    "https://cdn.weeb.sh/images/H1x2HxyYD-.gif"];


module.exports = class PokeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'poke',
      memberName: 'poke',
      group: 'ntb',
      description: 'Poke the mentioned user',
      guildOnly: true,
      args: [
        {
          key: 'userToPoke',
          prompt: '❌ Please select the member you want to poke.',
          type: 'member',
          default: 'isempty',
          wait: 0.0001
        }
      ]
    });
  }
  
  run(message, { userToPoke }) {
    if (userToPoke == 'isempty') {
        return message.channel.send('❌ Please select the member you want to poke.')}
    if (userToPoke == botId) {
      return message.channel.send('leave me alone!')}
    if (userToPoke.id == message.author.id) {
      return message.channel.send('❌ You cant poke yourself!');
    }
    else {
        const gif = randomGif[Math.floor(Math.random() * randomGif.length)];

        const embed = new Discord.MessageEmbed()
        .setColor('#fce1f0')
        .setDescription(`**${message.author}** poked **${userToPoke}**`)
        .setImage(gif)

        message.channel.send(embed)
    }
    setTimeout(() => message.delete(), 1000)
}};