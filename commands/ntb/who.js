const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class WhoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'who',
      memberName: 'who',
      group: 'ntb',
      description: 'Who',
      guildOnly: true,
      args: [
        {
          key: 'keyword',
          prompt: '❌ Please write a keyword.',
          type: 'string',
          default: 'isempty',
          wait: 0.0001
        }
      ]
    });
  }
  
  run(message, { keyword }) {
    if (keyword == 'isempty') {
        return message.channel.send('❌ Please write a keyword.')}
    else {
        const user = message.guild.members.cache.random().user;

        const embed = new Discord.MessageEmbed()
        .setDescription(`**${user}** **${keyword}**`)
        .setImage('https://i.imgur.com/n9L9eA2.png')

        message.channel.send(embed)
    }
    setTimeout(() => message.delete(), 1000)
}};