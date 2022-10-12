const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
let config = require('./config.json');
let botId = config.botId;

var randomGif = ["https://i.waifu.pics/OV1__2G.gif",
    "https://i.waifu.pics/Zjzdknf.gif",
    "https://i.waifu.pics/h3IJio-.gif",
    "https://i.waifu.pics/cW4uZF0.gif",
    "https://i.waifu.pics/6ApTQ4Z.gif",
    "https://i.waifu.pics/tDs7FJo.gif",
    "https://i.waifu.pics/-CgQNpM.gif",
    "https://i.waifu.pics/pP3CMQW.gif",
    "https://i.waifu.pics/x6XaUk8.gif",
    "https://i.waifu.pics/m4P8R9A.gif",
    "https://i.waifu.pics/yQ1rB_w.gif",
    "https://i.waifu.pics/iQgFiV~.gif",
    "https://i.waifu.pics/k1ng2GY.gif",
    "https://i.waifu.pics/q2xa_Cx.gif",
    "https://i.waifu.pics/YWhrijG.gif",
    "https://i.waifu.pics/wsirY-8.gif",
    "https://i.waifu.pics/ROlkkMZ.gif",
    "https://i.waifu.pics/dWl9mvI.gif",
    "https://i.waifu.pics/9o~tu3U.gif",
    "https://i.waifu.pics/aSe6WAS.gif",
    "https://i.waifu.pics/3k-Ea7T.gif",
    "https://i.waifu.pics/b5rMP0J.gif",
    "https://i.waifu.pics/7Rp0WDH.gif",
    "https://i.waifu.pics/~dg_OKZ.gif",
    "https://i.waifu.pics/IIjltcS.gif",
    "https://i.waifu.pics/InsjcaW.gif",
    "https://i.waifu.pics/yr12Nd5.gif",
    "https://i.waifu.pics/w2P9Awj.gif",
    "https://i.waifu.pics/sBjxuUU.gif",
    "https://i.waifu.pics/~cFkADL.gif",
    "https://i.waifu.pics/6A0KOzy.gif",
    "https://i.waifu.pics/NEN13QB.gif",
    "https://i.waifu.pics/7xsqPxX.gif",
    "https://i.waifu.pics/ISS3i5R.gif",
    "https://i.waifu.pics/iE6ENOO.gif",
    "https://i.waifu.pics/D2U452k.gif",
    "https://i.waifu.pics/jcMTlvm.gif",
    "https://i.waifu.pics/nvag_wv.gif",
    "https://i.waifu.pics/wsirY-8.gif",
    "https://i.waifu.pics/iHr3H8w.gif",
    "https://i.waifu.pics/IVHT1cf.gif",
    "https://i.waifu.pics/CrN5SqM.gif",
    "https://i.waifu.pics/I0fKKlq.gif",
    "https://i.imgur.com/mwY67og.gif",
    "https://i.imgur.com/yotDo0K.gif",
    "https://i.imgur.com/gXPCAVj.gif",
    "https://i.imgur.com/pCuBKO8.gif",
    "https://i.imgur.com/DhteIV5.gif",
    "https://i.imgur.com/NihiP1q.gif",
    "https://i.imgur.com/dZO1g9C.gif"];


module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'kiss',
      memberName: 'kiss',
      group: 'ntb',
      description: 'Kiss the mentioned user',
      guildOnly: true,
      args: [
        {
          key: 'userToKiss',
          prompt: '❌ Please select the member you want to kiss.',
          type: 'member',
          default: 'isempty',
          wait: 0.0001
        }
      ]
    });
  }
  
  run(message, { userToKiss }) {
    if (userToKiss == 'isempty') {
        return message.channel.send('❌ Please select the member you want to kiss.')}
    if (userToKiss == botId) {
      return message.channel.send('leave me alone!')}
    if (userToKiss.id == message.author.id) {
      return message.channel.send('❌ You cant kiss yourself!');
    }
    else {
        const gif = randomGif[Math.floor(Math.random() * randomGif.length)];

        const embed = new Discord.MessageEmbed()
        .setColor('#fce1f0')
        .setDescription(`**${message.author}** kissed **${userToKiss}**`)
        .setImage(gif)

        message.channel.send(embed)
    }
    setTimeout(() => message.delete(), 1000)
}};