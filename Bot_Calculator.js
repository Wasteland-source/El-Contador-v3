const Discord = require('discord.js')
//Imports discord library

module.exports = {
  addition: function(num1, num2) {
    return num1 + num2;
  },
  //Adds num1 and num2

  subtraction: function(num1, num2) {
    return num1 - num2;
  },
  //Subtracts num1 and num2

  multiply: function(num1, num2) {
    return num1 * num2;
  },
  //Multiplys num1 and num2

  divide: function(num1, num2) {
    return num1 / num2;
  },
  //Diivides num1 and num2

  factorial: function(fac) {
    let result = 1;
    let argue;
    for (argue = fac; argue > 1; argue--) {
      result *= argue
    }
    return result
  },
  //Finds the factorial of an inputted number

  power: function(num1, num2) {
    result = num1
    while (num2 > 1) {
      result *= num1
      num2--
    }
    return result
  },
  //Multiplys num1 by itself num2 times

  calc: function(numberIn) {
    let numberArray = numberIn.match(/\d+/g).map(Number);

    let operatorArray = numberIn.split('').filter(function(op) {
      return (op === '+' || op === '-' || op === '*' || op === '/' || op === '!' || op === '^');
    });
    let operator = operatorArray[0];
    let numberOne = numberArray[0];
    let numberTwo = numberArray[1];
    //Creates an array using the users input and saves the strings to variables

    switch (operator) {
      case '+':
        return (this.addition(numberOne, numberTwo));
        break;
      case '-':
        return (this.subtraction(numberOne, numberTwo));
        break;
      case '/':
        return (this.divide(numberOne, numberTwo));
        break;
      case '*':
        return (this.multiply(numberOne, numberTwo));
        break;
      case '!':
        return (this.factorial(numberOne));
        break;
      case '^':
        return (this.power(numberOne, numberTwo));
        break;
      default:
        return ('Something was wrong with the input or i do not have that equation in my slender hypothetical body');
        break;
        //A switch statement checking which operator the user inputted and calling the corresonding function
    }
  }
};
