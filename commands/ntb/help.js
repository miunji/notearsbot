const { Command } = require('discord.js-commando');
const Discord = require('discord.js');


module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      memberName: 'help',
      group: 'ntb',
      description: 'Help',
      guildOnly: true,
    });
  }
  
  run(message) {
    const embed = new Discord.MessageEmbed()
        .setDescription(`
            r.hug <user> - hug
            r.lick <user> - lick
            r.kiss <user> - kiss
            r.bite <user> - bite
            r.poke <user> - poke
            r.kill <user> - kill
            r.cry - cry
            r.кто <keyword> - random user

            **Love 💖**

            r.marry <user> - get married
            r.divorce <user> - divorce`)
        .setImage('https://i.imgur.com/FH3kDsB.png')

    message.channel.send(embed)

    setTimeout(() => message.delete(), 1000)
}};