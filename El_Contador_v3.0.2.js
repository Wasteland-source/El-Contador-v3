const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json')
const config = require('./Config.json')
//Bring's discord.js, Starts up a dicord client for the bot and saves the token as well as brings up my config file
const calculator = require('./Bot_Calculator.js')
const numberGame = require('./Bot_Number_game.js')
const campfire = require('./Bot_Campfire.js')
//Imports different commands

client.on('ready', function() {
  console.log(`Successfully logged in as ${client.user.tag}`);
  console.log(`${client.user.tag} is currently connected to ${client.guilds.size} servers`)
});
//Display's a log in message when El Contador logs in

client.on('message', function(msg) {
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;
  //Ignores messages without the prefix and by the bot himself

  const args = msg.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  //Declare's two new variables. Args Cut's the input into it's first word,second etc. the command variable makes the input all lowercase so any combination of uppercase and lowercase can be used by the user and commands will still be triggered

  if (command === 'ping') {
    try {
      msg.channel.send(`You fucking animal, you absolute fuck, you think i\'m some kinda play thing for you to ping? Were you expecting pong? You stupid little cream filled bitch. Don\'t ever talk to me again. This ping took ${client.ping} milliseconds`)
      console.log(`${msg.author.tag} has sent a ping and recieved a pong`);
    } catch (error) {
      msg.channel.send(`I'm sorry ${msg.author.username}, I can't do that ${msg.author.username}. Beep boop`)
      console.log(`${msg.author.tag} broke my sweet wee ping pong`);
    }
  }
  //If the command is ping send the pong message and log success otherwise send an error message to discord and log the failure

  if (command === 'calc') {
    try {
      msg.channel.send(calculator.calc(msg.content))
      console.log(`${msg.author.tag} made a calculation`);
    } catch (error) {
      msg.channel.send(`I'm sorry ${msg.author.username}, I can't do that ${msg.author.username}. Beep boop`)
      console.log(`${msg.author.tag} broke the calculator`);
    }
  }
  //If the command is calc send the message content through the calculator and log success otherwise send an error message to discord and log the failure

  if (command === 'numgame') {
    try {
      msg.channel.send(numberGame(msg.content))
      console.log(`${msg.author.tag} played the number game`);
      console.log(`${msg.content}${numberGame.randomNumber}`)
    } catch (error) {
      msg.channel.send(`I'm sorry ${msg.author.username}, I can't do that ${msg.author.username}. Beep boop`)
      console.log(`${msg.author.tag} broke the number game`)
      console.log(`${msg.content}${numberGame.randomNumber}`)
    }
  }
  //If the command is numgame send the message content through the number game otherwise send an error message to discord and log the failure

  if (command === 'avatar') {
    try {
      msg.channel.send(msg.author.avatarURL)
      console.log(`${msg.author.tag} took a peek at their own avatar`)
    } catch (error) {
      msg.channel.send(`I'm sorry ${msg.author.username}, I can't do that ${msg.author.username}. Beep boop`)
      console.log(`${msg.author.tag} encountered an error with calling their avatar`)
    }
  }
  //If the command is avatar send the user's avatar to the discord channel and log success otherwise send an error message to discord and log the failure

  if (command === 'campfire') {
    try {
      msg.channel.send(campfire())
      console.log(`${msg.author.tag} sat at the campfire`)
    } catch (error) {
      msg.channel.send(`beep boop something went wrong with this command beep boop`)
      console.log(`${msg.author.tag} encountered an error when attempting to sit by the campfire`)
    }
  }
  //If the command is campfire send the message and attachment and log success otherwise send an error message to discord and log the failure
})

client.login(auth.token);
//Logs into the Discord client with the login token
