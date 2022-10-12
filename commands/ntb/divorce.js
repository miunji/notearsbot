const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const mongoose = require("mongoose");
let config = require('./config.json');
let mongo = config.dataUrl;

mongoose.connect(mongo);

const marrySchema = new mongoose.Schema({
  userName : {
    type : mongoose.SchemaTypes.String,
    required : true
  },

  userID : {
      type : mongoose.SchemaTypes.String,
      required : true
  },

  userPartnerName : {
    type : mongoose.SchemaTypes.String,
    required : true
  },

  userPartnerID : {
      type : mongoose.SchemaTypes.String,
      required : true
  }
});

if (!mongoose.modelNames().includes('Marry')) {
  mongoose.model('Marry', marrySchema);
}
const Marry = mongoose.model('Marry');

module.exports = class DivorceCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'divorce',
      memberName: 'divorce',
      group: 'ntb',
      description: 'Divorce',
      guildOnly: true,
      args: [
        {
          key: 'userToDivorce',
          prompt: '❌ Please select the member you wish to divorce.',
          type: 'member',
          default: 'isempty',
          wait: 0.0001
        }
      ]
    });
  }

  async run(message, { userToDivorce }) {
    const exists = await Marry.findOne({ userID: message.author.id });
    const divorce = await Marry.findOne({ userID: userToDivorce.id });

    if (userToDivorce == 'isempty') {
        return message.channel.send('❌ Please select the member you wish to divorce.')}
    if (exists?.userID !== message.author.id) {
        return message.channel.send('❌ You dont have a soul mate.')}
    if (divorce?.userID !== userToDivorce.id) {
        return message.channel.send('❌ You are not married.')}
    if (userToDivorce.id === message.author.id) {
      return message.channel.send(`${message.author}, fool?`)}
    if (exists?.userID === message.author.id && divorce?.userID === userToDivorce.id) {
        const embed = new Discord.MessageEmbed()
      .setDescription(`**Divorce 💔**
    
      ${message.author}, Do you really want to divorce ${userToDivorce}?
  
      `);
    message.channel.send(embed).then(msg => {
      msg.react('✅').then(() => msg.react('❌'))
      setTimeout(() => msg.delete(), 30000)
      setTimeout(() => message.delete(), 30000);
    

      msg.awaitReactions((reaction, user) => user.id == message.author.id 
      && (reaction.emoji.name == '✅' || reaction.emoji.name == '❌'),
        { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '❌') {
            const embed = new Discord.MessageEmbed()
      .setDescription(`Looks like ${message.author} changed his mind.`);
      return message.channel.send(embed)}
    if (reaction.emoji.name === '✅') {
     
      Marry.deleteOne({ userID: message.author.id }, (err) => console.log(err));
      Marry.deleteOne({ userID: userToDivorce.id }, (err) => console.log(err));

      const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author} and ${userToDivorce} no longer together. 💔`);
    message.channel.send(embed)
    .catch(() => {
    });
      }
  }).catch(()=>{
    const embed = new Discord.MessageEmbed()
    .setDescription('❌ No response after 20 seconds, offer no longer valid.');
    message.channel.send(embed)
    .then(message => {
      setTimeout(() => message.delete(), 10000)
    })
    .catch();
  });
}).catch(()=>{
});
}}};