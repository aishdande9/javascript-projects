const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isLetter = function(strValue){
  if(strValue.startsWith('a')){
    return true;
  }else{
    return false;
  }
};

console.log(getValidInput("Enter the string value :",isLetter));

// TODO 2: write a validator 
// that ensures input is a vowel
let isVowel = function(str1){
  let vowels = ['a','e','i','o','u'];
  if(vowels.includes(str1))
  {
    return true;}
    else{
      return false;
    }
  };
  
  console.log(getValidInput("Enter the input that is vowel :",isVowel));

// Be sure to test your code!
