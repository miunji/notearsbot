const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
let config = require('./config.json');
let botId = config.botId;

var randomGif = ["https://i.waifu.pics/6Izshr4.gif",
    "https://i.waifu.pics/ylnGeuF.gif",
    "https://i.waifu.pics/9b1NpBN.gif",
    "https://i.waifu.pics/hsAy9-u.gif",
    "https://i.waifu.pics/OByL0MA.gif",
    "https://i.waifu.pics/aHcQUmi.gif",
    "https://i.waifu.pics/ETWB-ef.gif",
    "https://i.waifu.pics/judBJyS.gif",
    "https://i.waifu.pics/jNWDXiC.gif",
    "https://i.waifu.pics/lgsRSai.gif",
    "https://i.waifu.pics/8uhQSdY.gif",
    "https://i.waifu.pics/Qug33iz.gif",
    "https://i.waifu.pics/7Z1tV23.gif",
    "https://i.waifu.pics/hGFuwrQ.gif",
    "https://i.imgur.com/mk3IJ3D.gif",
    "https://i.imgur.com/iSdXZdN.gif",
    "https://i.imgur.com/zFt6G60.gif",
    "https://i.imgur.com/8cKh2ZZ.gif",
    "https://i.imgur.com/FjheAOw.gif",
    "https://i.imgur.com/HfQTHXw.gif",
    "https://i.imgur.com/RQUHq43.gif",
    "https://i.imgur.com/bG5nUd4.gif",
    "https://i.imgur.com/WJFrFEV.gif",
    "https://i.imgur.com/bdyhqdD.gif",
    "https://i.imgur.com/9rgtxl1.gif",
    "https://i.imgur.com/whZmLjf.gif",
    "https://i.imgur.com/I5gzVpv.gif",
    "https://i.imgur.com/UKLEDR1.gif",
    "https://i.imgur.com/wLCbBeR.gif",
    "https://i.imgur.com/fikL6v4.gif",
    "https://i.imgur.com/vH6hw7z.gif",
    "https://i.imgur.com/pnaIVg8.gif",
    "https://i.imgur.com/Udez2UR.gif",
    "https://i.imgur.com/tTHTPAv.gif",
    "https://i.imgur.com/ccQAwTQ.gif",
    "https://i.imgur.com/58ROTgQ.gif",
    "https://i.imgur.com/lwc3Ekm.gif",
    "https://i.imgur.com/lKaZrEA.gif",
    "https://i.imgur.com/GQYFwEC.gif",
    "https://i.imgur.com/XIF7QqC.gif",
    "https://i.imgur.com/XmH2FOt.gif",
    "https://i.imgur.com/YBtK0c1.gif",
    "https://i.imgur.com/tF01HFf.gif",
    "https://i.imgur.com/DhpYGAK.gif",
    "https://i.imgur.com/NXraxwI.gif"];


module.exports = class KillCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'kill',
      memberName: 'kill',
      group: 'ntb',
      description: 'Kill the mentioned user',
      guildOnly: true,
      args: [
        {
          key: 'userToKill',
          prompt: '❌ Please select the member you want to kill.',
          type: 'member',
          default: 'isempty',
          wait: 0.0001
        }
      ]
    });
  }
  
  run(message, { userToKill }) {
    if (userToKill == 'isempty') {
        return message.channel.send('❌ Please select the member you want to kill.')}
    if (userToKill == botId) {
      return message.channel.send('it wont work, dude!')}
    if (userToKill.id == message.author.id) {
      return message.channel.send('❌ You cant kill yourself!');
    }
    else {
        const gif = randomGif[Math.floor(Math.random() * randomGif.length)];

        const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author}** killed **${userToKill}**`)
        .setImage(gif)

        message.channel.send(embed)
    }
    setTimeout(() => message.delete(), 1000)
}};