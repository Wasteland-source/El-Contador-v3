//A game inwhich you input a number and it tells you if it's higher or lower
/*
const Discord = require('discord.js')
//Imports discord.js library

let guesses = 0
//A variable that will count the guesses used

let randomNumber = Math.floor(Math.random() * 100)
//Generates a random number

module.exports = {

variables: function() {
  let guesses = 0
  //A variable that will count the guesses used

  const randomNumber = Math.floor(Math.random() * 100)
  //Generates a random number

},


  prompt: function(msg) {
    return('Please enter a guess from 0-100:');
    //Send's the instruction for a guess via a method
  this.ifStat(msg.content,this.randomNumber)
  },

  ifStat: function(numberIn, randomNumber) {

    let guesses = 0
    //A variable that will count the guesses used

    const randomNumber = Math.floor(Math.random() * 100)
    //Generates a random number

    if (guesses === 10) {
      return ('Game over, You\'ve ran out of guesses')
    } else if (numberIn > this.randomNumber) {
      return ('Your guess was too high')
      this.guesses++
      console.log(`You have used ${this.guesses} guesses`)
      this.prompt()
    } else if (numberIn < this.randomNumber) {
      return ('Your guess was too low')
      this.guesses++
      return (`You have used ${this.guesses} guesses`)
      this.prompt()
    } else if (numberIn == this.randomNumber) {
      return ('Congratulations! You\'ve guessed the number!')
      this.guesses++
      return (`You guessed the number in ${this.guesses} guesses`)
    } else {
      return ('I\'m sorry i don\'t recognize that as a number')
      return (`You have used ${this.guesses} guesses. This will not be counted as a guess`)
      this.prompt()
    }
    //An if/elseif/else statement that checks if the player has guesses remaining, If the number is too high or too low, if the input is equal to the random number and if none outputs an error message
  }
}
*/
//A game inwhich you input a number and it tells you if it's higher or lower

const Discord = require('discord.js')
//Imports discord.js library

module.exports = function(numberIn) {
  console.log('1')

  const Discord = require('discord.js')
  const main = require('./El_Contador.js')
  //imports the discord library and collector

  function prompt(numberIn) {
    console.log('2')

    console.log('3')
    console.log(collectorNumGame)
    console.log('4')
    collectorNumGame.on('collect', function(msg) {
      ifStat(msg.content)
    })
  }

  prompt(numberIn)

  let guesses = 0
  //A variable that will count the guesses used

  const randomNumber = Math.floor(Math.random() * 100)
  //Generates a random number

  function ifStat(numberIn) {
    if (guesses === 10) {
      return ('Game over, You\'ve ran out of guesses')
    } else if (numberIn > randomNumber) {
      return ('Your guess was too high')
      guesses++
      return (`You have used ${guesses}`)
      console.log(`${numberIn.content}${randomNumber}`)
    } else if (numberIn < randomNumber) {
      return ('Your guess was too low')
      guesses++
      return (`You have used ${guesses} guesses`)
      console.log(`${numberIn.content}${randomNumber}`)
      prompt()
    } else if (numberIn == randomNumber) {
      return ('Congratulations! You\'ve guessed the number!')
      guesses++
      return (`You guessed the number in ${guesses} guesses`)
      console.log(`${numberIn.content}${randomNumber}`)
    } else {
      return ('I\'m sorry i don\'t recognize that as a number. If you\'d like to quit the game please spam numbers or snap your keyboard over your knee, I haven\'t created a proper exit yet')
      return (`You have used ${guesses} guesses. This will not be counted as a guess`)
      console.log(`${numberIn.content}${randomNumber}`)
      prompt()
    }
    //An if/elseif/else statement that checks if the player has guesses remaining, If the number is too high or too low, if the input is equal to the random number and if none outputs an error message
  }
}
