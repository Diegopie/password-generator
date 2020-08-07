// Assignment Code
var generateBtn = document.querySelector("#generate");


// Array for User Choices
let specChar = '!#$%&*=+-/:;<>?@[]^_`{}~'; //length is 24
let numbChar = ['123456789']; //length is 9
let lowerCase = ['abcdefghijklmnopqrstuvwxyz']; //length is 26
let upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']; //length is 26
// this array holds User Choises Arrays so that an RNG system can access every arrray at random and every array element at random
var userChoices = [specChar, numbChar, lowerCase, upperCase];

console.log('user choices array: ' + userChoices);

// Store User Selected boolian values in an array, userArray will then have user true statements stored in here for the genPass() to use
var userSelection = []; 
var userArray = ''; //store their selected options in a new array?
console.log('blank userarry' + userArray)

//Get conditions from user
function generatePassword () {
  // Ask length of characters from user
  var userLength = prompt('Please choose the length of your password, between 8 - 128 characters');
  //Conditional to check if length is correct
  if (userLength < 8 || userLength > 128) {
    alert("You must choose a number between 8 - 128. Please try again.")
    // If correct, get the rest of their choices and log conditions from user
  } else if (userLength >= 8 && userLength <= 128) {
          console.log('userLength: ' + parseInt(userLength));
    // Ask user to include special characters:
    var inclSpec = confirm('Would you like to include special characters?');
          console.log("incSpec: " + inclSpec);
      //Log user selection to userSelection
      userSelection.push(inclSpec);
      // If user selected true, send this array to the userArray string
      if (inclSpec) {
        userArray += specChar
      }
          console.log('1st conditional userArray: ' + userArray)
    // Ask user to include numbers:
    var inclNumb = confirm('Would you like to include numbers?');
          console.log("incNumb: " + inclNumb);
      //Log user selection to userSelection
      userSelection.push(inclNumb);
      // If user selected true, send this array to the userArray string
      if (inclNumb) {
        userArray += numbChar
      }
          console.log('2st conditional userArray: ' + userArray)
    // Ask user to include lower case?
    var inclLower = confirm('Would you like to include lower-case letters?');
          console.log("incLower: " + inclLower);
      //Log user selection to userSelection
      userSelection.push(inclLower);
      // If user selected true, send this array to the userArray string
      if (inclLower) {
        userArray += lowerCase
      }
          console.log('3rd conditional userArray: ' + userArray)
    // Ask user to include Upper case?
    var incUpper = confirm('Would you like to include Upper-case letters?');
          console.log("incUpper: " + incUpper);
      //Log user selection to userSelection
      userSelection.push(incUpper);
      // If user selected true, send this array to the userArray string
      if (incUpper) {
        userArray += upperCase
        console.log('4th conditional userArray: ' + userArray)
      }
      

    console.log('userSelection Array: ' + userSelection); //monitor user selection
  }


  console.log('This is the final user array: ' + userArray)
  console.log("-----------------");

// Declair var to be used to generate and display password
var pass = "";

// Run a function, based on the values created by the user 
function genPass () {
  for (i = 0; pass.length < userLength; i++) {
    
    
      // Create a random index #, so that the order of the password is also random??

  
      //create a random index number to get an element from the array
      console.log(userArray.length)
      var indexNumb = Math.floor(Math.random() * userArray.length);
      console.log('indexNumber: ' + indexNumb);
        console.log('-----------------------------');
        console.log('show index element: ' + userArray[indexNumb])
        console.log('-----------------------------');
      pass += userArray[indexNumb];
      console.log('show current pass: ' + pass);
         
  }
}

genPass(); 










// 2nd draft of creating random password with two variables

  // var pass = '';
  // for (i = 0; pass.length < userLength; i++) {
  //   if (inclSpec && inclNumb) {
  //     var specNum = Math.floor(Math.random() * specChar.length);
  //       console.log("random specIndex value " + specChar[specNum]);
  //     var numbNum = Math.floor(Math.random() * numbChar.length);
  //       console.log("random specIndex value " + numbChar[numbNum]);
  //     pass += specChar[specNum];
  //     pass += numbChar[numbNum];
  //     console.log("pass string length" + pass.length)  
  //     console.log('pass type' + typeof pass.length) 
  // } else if (inclNumb) {
  //     var numbNum = Math.floor(Math.random() * numbChar.length);
  //     console.log("RNG " + numbNum)
  //       console.log("random numbIndex value " + numbChar[numbNum]);
  //     pass += numbChar[numbNum];
  
      
  // }





      // 1st draft of creating random password
      // var pass = '';
      // for (i = 0; i < userLength; i++) {
      //   if (inclSpec) {
      //     var specNum = Math.floor(Math.random() * specChar.length) + 1;
      //       console.log("random index value " + specChar[specNum]);
      //     pass += specChar[specNum]
      //     console.log(pass)   
      // }
    


  // }


  //Math.floor(Math.random() * (max - min)) + min





  return pass
}


console.log("generatePassword is runing");





// Write password to the #password input
function writePassword() {
  console.log("writePassword is running")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
