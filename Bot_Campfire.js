//Sending a wholesome message with a gif of a campfire

module.exports = function() {
  const Discord = require('discord.js')
//Importing the discord.js library

const embed = new Discord.RichEmbed()
//Creates a variable to reprosent rich embed

embed.setTitle('Wholesome and relaxing <3')
//Setting the title of the embed block

embed.setDescription('You sit down at the top of a small hill at the end of a long day with a small group of your closest friends, as you and your friends sit around the fire, talking late into the night you look deep into the fire for a moment and smile to yourself. Everything is going to be okay')
//set's the description of the embed block

embed.setImage('https://media.giphy.com/media/vlEyXRgGUjSoM/giphy.gif')
//Set's the image of the embed block as the campfire gif

embed.setColor(0xFF7F50)

return(embed)
//Returns embed to be sent
}
