const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const mongoose = require("mongoose");
let config = require('./config.json');
let botId = config.botId;
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


module.exports = class MarryCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'marry',
      memberName: 'marry',
      group: 'ntb',
      description: 'Marry the mentioned user',
      guildOnly: true,
      args: [
        {
          key: 'userToMarry',
          prompt: '❌ Please select the member you would like to propose to.',
          type: 'member',
          default: 'isempty',
          wait: 0.0001
        }
      ]
    });
  }

  async run(message, { userToMarry }) {
    const exists = await Marry.findOne({ userID: message.author.id });
    const married = await Marry.findOne({ userID: userToMarry.id });

    if (userToMarry === 'isempty') {
      return message.channel.send('❌ Please select the member you would like to propose to.')}
    if (exists?.userID === message.author.id) {
      return message.channel.send(`❌ ${message.author}, you are already married.`)}
    if (married?.userID === userToMarry.id) {
      return message.channel.send('❌ This user is already married.')}
    if (userToMarry === botId) {
      return message.channel.send('wow, stupid, no way!')}
    if (userToMarry.id === message.author.id) {
      return message.channel.send('❌ You cannot marry yourself.');
    }
    if (exists?.userID != message.author.id && married?.userID != userToMarry.id) {

      const embed = new Discord.MessageEmbed()
      .setColor('#fce1f0')
      .setDescription(`**Wedding 💍**
      
      ${message.author} makes a marriage proposal ${userToMarry}
      
      Are you ready to get married?
  
      `);
    message.channel.send(embed).then(msg => {
      msg.react('💞').then(() => msg.react('💔'))
      setTimeout(() => msg.delete(), 30000)
      setTimeout(() => message.delete(), 30000);

      

      msg.awaitReactions((reaction, author) => author.id === userToMarry.id 
      && (reaction.emoji.name === '💞' || reaction.emoji.name === '💔'),
        { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '💔') {
          const embed = new Discord.MessageEmbed()
      .setColor('#fce1f0')
      .setDescription(`${userToMarry} refuses the offer 😔`);
      return message.channel.send(embed)}
      if (reaction.emoji.name === '💞') {

      const createdExists = new Marry({
        userName : message.author.username,
        userID : message.author.id,
        userPartnerName : userToMarry.user.username,
        userPartnerID : userToMarry.id
      });
      createdExists.save().catch(e => console.log(e));

      const createdMarried = new Marry({
        userName : userToMarry.user.username,
        userID : userToMarry.id,
        userPartnerName : message.author.username,
        userPartnerID : message.author.id
      });
      createdMarried.save().catch(e => console.log(e));

      const embed = new Discord.MessageEmbed()
      .setColor('#fce1f0')
      .setDescription(`${message.author} and ${userToMarry} together now. 💞`);
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