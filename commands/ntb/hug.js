const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
let config = require('./config.json');
let botId = config.botId;

var randomGif = ["https://i.waifu.pics/eZCLENy.gif",
    "https://i.waifu.pics/Y6COnB-.gif",
    "https://i.waifu.pics/YXY3bxv.gif",
    "https://i.waifu.pics/HWhukIP.gif",
    "https://i.waifu.pics/Dxp5TtV.gif",
    "https://i.waifu.pics/NF752LN.gif",
    "https://i.waifu.pics/8OTc8Kd.gif",
    "https://i.waifu.pics/~FeT-Rh.gif",
    "https://i.waifu.pics/shkxTih.gif",
    "https://i.waifu.pics/jT8iHBU.gif",
    "https://i.waifu.pics/jgrs5rs.gif",
    "https://i.waifu.pics/EgW6S9x.gif",
    "https://i.waifu.pics/PXfD8FU.gif",
    "https://i.waifu.pics/S7HrqqC.gif",
    "https://i.waifu.pics/c7JsUDX.gif",
    "https://i.waifu.pics/JlT~_wG.gif",
    "https://i.waifu.pics/UVOaZuA.gif",
    "https://i.waifu.pics/Ngdh2a8.gif",
    "https://i.waifu.pics/dJuQNA8.gif",
    "https://i.waifu.pics/ieQ7b9X.gif",
    "https://i.waifu.pics/hl7ZFQ2.gif",
    "https://i.waifu.pics/RM2NjNt.gif",
    "https://i.waifu.pics/zzIKkSW.gif",
    "https://i.waifu.pics/1fzx9SW.gif",
    "https://i.waifu.pics/scyPNue.gif",
    "https://i.waifu.pics/EYcAlMR.gif",
    "https://i.waifu.pics/mj~uAm~.gif",
    "https://i.waifu.pics/hvmqZ4H.gif",
    "https://i.waifu.pics/GXcNgeE.gif",
    "https://i.waifu.pics/C2_DXCM.gif",
    "https://i.waifu.pics/ea_Veyc.gif",
    "https://i.waifu.pics/ztvx9hE.gif",
    "https://i.waifu.pics/~wgpe1b.gif",
    "https://i.imgur.com/9tElG58.gif",
    "https://i.imgur.com/mkiZv03.gif",
    "https://i.imgur.com/qVJfVkv.gif",
    "https://i.imgur.com/efMVx3p.gif"];


module.exports = class HugCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'hug',
      memberName: 'hug',
      group: 'ntb',
      description: 'Hug the mentioned user',
      guildOnly: true,
      args: [
        {
          key: 'userToHug',
          prompt: '❌ Please select the member you would like to hug.',
          type: 'member',
          default: 'isempty',
          wait: 0.0001
        }
      ]
    });
  }
  
  run(message, { userToHug }) {
    if (userToHug == 'isempty') {
        return message.channel.send('❌ Please select the member you would like to hug.')}
    if (userToHug == botId) {
      return message.channel.send('leave me alone!')}
    if (userToHug.id == message.author.id) {
      return message.channel.send('❌ You cant hug yourself!');
    }
    else {
        const gif = randomGif[Math.floor(Math.random() * randomGif.length)];

        const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author}** hugs **${userToHug}**`)
        .setImage(gif)

        message.channel.send(embed)
    }
    setTimeout(() => message.delete(), 1000)
}};