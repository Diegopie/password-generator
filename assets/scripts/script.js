// Assignment Code
var generateBtn = document.querySelector("#generate");
  console.log(generateBtn)

// Array for User Choices

const specChar = ['!', '#', '$', '%', '&', '*', '=', '+', '-', '/', ':', ';', '<',  '>', '?', '@', '[',']', '^', '_', '`', '{', '}', '~']; //length is 24
const numbChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; //length is 9
const lowerCase = ['a', 'b',' c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' , 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //length is 26
const upperCase = ['A', 'B',' C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' , 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //length is 26
var userChoices = [specChar, numbChar, lowerCase, upperCase]

console.log(userChoices)

 

// Store User Variables in an array
  
var userSelection = [];
  

function generatePassword () {
// code to be run

//Get conditions from user

  // length of characters
  var userLength = prompt('Please choose the length of your password, between 8 - 128 characters');

  //Conditional to check if length is correct
  if (userLength < 8 || userLength > 128) {
    alert("You must choose a number between 8 - 128. Please try again.")

  } else if (userLength >= 8 && userLength <= 128) {
      console.log(parseInt(userLength));
      //Log user selection to userSelection
      userSelection.push(parseInt(userLength));

      // include special characters?
      var inclSpec = confirm('Would you like to include special characters?');
        console.log("incSpec " + inclSpec);
        //Log user selection to userSelection
        userSelection.push(inclSpec);

      // include numbers
      var inclNumb = confirm('Would you like to include numbers?');
        console.log("incNumb " + inclNumb);
        //Log user selection to userSelection
        userSelection.push(inclNumb);
        
      // include lower case
      var inclLower = confirm('Would you like to include lower-case letters?');
        console.log("incLower " + inclLower);
        //Log user selection to userSelection
        userSelection.push(inclLower);

      console.log(userSelection);
  }



  console.log("-----------------");
  console.log(userSelection);

// Combine user selections to generate the password 
   










// 2nd draft of creating random password with two variables

  var pass = '';
  for (i = 0; pass.length < userLength; i++) {
    if (inclSpec && inclNumb) {
      var specNum = Math.floor(Math.random() * specChar.length);
        console.log("random specIndex value " + specChar[specNum]);
      var numbNum = Math.floor(Math.random() * numbChar.length);
        console.log("random specIndex value " + numbChar[numbNum]);
      pass += specChar[specNum];
      pass += numbChar[numbNum];
      console.log("pass string length" + pass.length)  
      console.log('pass type' + typeof pass.length) 
  } else if (inclNumb) {
      var numbNum = Math.floor(Math.random() * numbChar.length);
      console.log("RNG " + numbNum)
        console.log("random numbIndex value " + numbChar[numbNum]);
      pass += numbChar[numbNum];
  
      
  }





      // 1st draft of creating random password
      // var pass = '';
      // for (i = 0; i < userLength; i++) {
      //   if (inclSpec) {
      //     var specNum = Math.floor(Math.random() * specChar.length) + 1;
      //       console.log("random index value " + specChar[specNum]);
      //     pass += specChar[specNum]
      //     console.log(pass)   
      // }
    


  }


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
