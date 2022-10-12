const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
let config = require('./config.json');
let botId = config.botId;

var randomGif = ["https://i.waifu.pics/pi4nDsc.png",
    "https://i.waifu.pics/9WRtGbr.gif",
    "https://i.waifu.pics/0eShqy~.gif",
    "https://i.waifu.pics/Bn-ITNy.gif",
    "https://i.waifu.pics/L9bms1Z.gif",
    "https://i.waifu.pics/qMP8Vet.gif",
    "https://i.waifu.pics/uLaSSOF.gif",
    "https://i.waifu.pics/T_qYUxK.gif",
    "https://i.waifu.pics/bKScj44.gif",
    "https://i.waifu.pics/UgYmj1t.gif",
    "https://i.waifu.pics/m71ri9g.gif",
    "https://i.waifu.pics/pQ1rb_d.gif",
    "https://i.waifu.pics/Mz~1TKA.gif",
    "https://i.waifu.pics/QzTSr-F.gif",
    "https://i.waifu.pics/cnTLq9v.gif",
    "https://i.waifu.pics/roi1riO.gif",
    "https://i.waifu.pics/YTKHSD4.gif",
    "https://i.waifu.pics/W0VmZno.gif",
    "https://i.waifu.pics/PulivJk.gif",
    "https://i.waifu.pics/Kc2gzBT.gif",
    "https://i.waifu.pics/vutUNH1.gif",
    "https://i.waifu.pics/J1rhxfN.gif"];


module.exports = class BiteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'bite',
      memberName: 'bite',
      group: 'ntb',
      description: 'Bite the mentioned user',
      guildOnly: true,
      args: [
        {
          key: 'userToBite',
          prompt: '❌ Please select the member you want to bite.',
          type: 'member',
          default: 'isempty',
          wait: 0.0001
        }
      ]
    });
  }
  
  run(message, { userToBite }) {
    if (userToBite == 'isempty') {
        return message.channel.send('❌ Please select the member you want to bite.')}
    if (userToBite == botId) {
      return message.channel.send('leave me alone!')}
    if (userToBite.id == message.author.id) {
      return message.channel.send('❌ You cant bite yourself!');
    }
    else {
        const gif = randomGif[Math.floor(Math.random() * randomGif.length)];

        const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author}** bitten **${userToBite}**`)
        .setImage(gif)

        message.channel.send(embed)
    }
    setTimeout(() => message.delete(), 1000)
}};