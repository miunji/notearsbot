const { CommandoClient } = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
let config = require('./config.json');
let botId = config.botId;
let token = config.token;

const client = new CommandoClient({
    commandPrefix: 'r.',
    unknownCommandResponse: false,
    owner: botId,
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['ntb', 're']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        prefix: false,
        ping: true,
        eval: true,
        unknownCommand: false,
        commandState: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setActivity('love');
});

client.login(token);