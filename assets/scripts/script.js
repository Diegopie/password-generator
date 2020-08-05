// Assignment Code
var generateBtn = document.querySelector("#generate");
  console.log(generateBtn)

// Do I need arrays for each condition????
const specChar = ['!', '#', '$', '%', '&', '*', '=', '+', '-', '/', ':', ';', '<',  '>', '?', '@', '[',']', '^', '_', '`', '{', '}', '~'];





// Store User Variables in an array
  
let userSelection = [];
  

function generatePassword () {
  // code to be run

//Get conditions from user
  // length of characters
  var userLength = prompt('Please choose the length of your password, between 8 - 128 characters');
    console.log(userLength);
    // include special characters?
  var inclSpec = confirm('Would you like to include special characters?');
    console.log("incSpec " + inclSpec);
    // include numbers
  var inclNumb = confirm('Would you like to include numbers?');
    console.log("incNumb " + inclNumb);
  var inclLower = confirm('Would you like to include lower-case letters?');
    console.log("incLower " + inclLower);

  return 1+2
  
}
  console.log("generatePassword is runing");


generatePassword();


// Write password to the #password input
function writePassword() {
  console.log("writePassword is running")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
