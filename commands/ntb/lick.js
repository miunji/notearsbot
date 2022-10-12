const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
let config = require('./config.json');
let botId = config.botId;

var randomGif = ["https://i.waifu.pics/hV9cyEJ.gif",
    "https://i.waifu.pics/vRYYPgV.gif",
    "https://i.waifu.pics/LyVaHfl.gif",
    "https://i.waifu.pics/sqndUwO.gif",
    "https://i.waifu.pics/RpQBJ5j.gif",
    "https://i.waifu.pics/kanHQ0f.gif",
    "https://i.waifu.pics/iL8UVFd.gif",
    "https://i.waifu.pics/RIMRo9T.gif",
    "https://i.waifu.pics/p0FcuY4.gif",
    "https://i.waifu.pics/at~DQwu.gif",
    "https://cdn.weeb.sh/images/Hkknfs2Ab.gif",
    "https://cdn.weeb.sh/images/H1EJxR_vZ.gif",
    "https://cdn.weeb.sh/images/rJ6hrQr6-.gif",
    "https://cdn.weeb.sh/images/rykRHmB6W.gif",
    "https://cdn.weeb.sh/images/Sk15iVlOf.gif",
    "https://cdn.weeb.sh/images/BkvTBQHaZ.gif",
    "https://cdn.weeb.sh/images/H13HS7S6-.gif"];


module.exports = class LickCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'lick',
      memberName: 'lick',
      group: 'ntb',
      description: 'Lick the mentioned user',
      guildOnly: true,
      args: [
        {
          key: 'userToLick',
          prompt: '❌ Please select the member you want to lick.',
          type: 'member',
          default: 'isempty',
          wait: 0.0001
        }
      ]
    });
  }
  
  run(message, { userToLick }) {
    if (userToLick == 'isempty') {
        return message.channel.send('❌ Please select the member you want to lick.')}
    if (userToLick == botId) {
      return message.channel.send('leave me alone!')}
    if (userToLick.id == message.author.id) {
      return message.channel.send('❌ You cant lick yourself!');
    }
    else {
        const gif = randomGif[Math.floor(Math.random() * randomGif.length)];

        const embed = new Discord.MessageEmbed()
        .setColor('#fce1f0')
        .setDescription(`**${message.author}** licked **${userToLick}**`)
        .setImage(gif)

        message.channel.send(embed)
    }
    setTimeout(() => message.delete(), 1000)
}};