//A rich embed showing all the commands and giving advice

module.exports = function() {

  const Discord = require('discord.js');
  //Imports the discord.js library

  const help = new Discord.RichEmbed();
  //creating a new block

  help.setTitle('Help & Commands');
  //Set's the title of the help block

  help.setColor(0x15317E);
//Set's the colour of the help block to lapis blue

  help.addField('Help','If you made your way here and still need help with this command i\'m going to delete this bot and go live in the countryside');
//Add's the help command to help

help.addField('Ping','Sending \'~ping\' will send a ping from your pc to this bot and send a message and the ping in return, This is to check if the bot is online and if it is experiencing connection issues');
//Add's the ping command to help

help.addField('Avatar','Sending \'~avatar\' will trigger the bot to send your avatar back in the same channel, In future you\'ll be able to mention a user or send their ID and recieve their avatar back');
//Add's avatar command to help block

help.addField('Calculator','Sending \'~calc\' followed by an equation will give the result of that equation. Currently you are able to add (number + number),subtract (number - number),multiply (number * number),divide (number / number),find the factorial-a number multiplied by all the numbers leading up to it-(number!) and find the power of-a number multiplied by itself the amount number two specifies-(number ^ number)');
//Add's the calculator command to help block

help.addField('Number Game','Sending \'~numgame\' will start the number game. The objective of the game is to correctly guess the random number within an amount of guesses with the bot\'s assistance. PLEASE DO NOT USE THIS COMMAND YET AS IT FUCKS THE BOT BECAUSE IT\'S A COLOSSAL BITCH');
//Add's the number game command to the help block

help.addField('Campfire','Sending \'~campfire\' will trigger the bot to send a wholesome message with a nice gif of a campfire for your enjoyment');
//Add's the campfire command to the help block

help.addField('Misc','You can use capital letters or lowercase letters at any character within your command and it will work the same. For example \'~campfire\' and \'~CAmPfIRe\' will both trigger the campfire command');
//Add's misc information to the help block

  return(help)
  //Returns the help block to send
}
