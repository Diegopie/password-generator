// * Array for User Choices
  let specChar = '!#$%&*=+-/:;<>?@[]^_`{}~';
  let numbChar = '123456789';
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// * Declare Global Variables
  var generateBtn = document.querySelector("#generate");
  // Declare blank, dynamic string that will be populated by user choices
  var userChar = '';
  // Declare var to track if user has selected enough choices
  var reqCharCount = 0;
  // Declare var to be used to generate and display password
  var pass = "";

// * Run All Logic To Generate Password When User Clicks Button
  function generatePassword () {
    // Reset Global Variables to Default State If User Runs generatePassword() Again
    userChar = '';
    reqCharCount = 0;
    pass = "";
    // ** Ask length of characters from user
      var userLength = prompt('Please type a number for the length of your password, between 8 - 128');
      userLength = parseInt(userLength)
          console.log(typeof userLength)  //check the type of value
          console.log(userLength)
          console.log('---Conditional: User prompts and confirms---');  //pg break
    // ** Conditional to check if length is correct
      if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
        alert("You must choose a number between 8 - 128. Please try again.");
        pass = 'Click \'Generate Password\' below to get started!';
        return pass;
      // If correct, Get Conditions From User
    } else if (userLength >= 8 && userLength <= 128) {
            console.log('userLength: ' + parseInt(userLength));  //view user value
      //Display rules to the user
      alert("Please select at least two character types. Your options will be special character, numbers, lowercase, and uppercase");     
      // Ask user to include special characters:
      var inclSpec = confirm('Would you like to include special characters? (Okay/Yes | Cancel/No)');
            console.log("incSpec: " + inclSpec);  //View boolean value
        // If user selected true, send this array to the userChar string
        if (inclSpec) {
          userChar += specChar;
            console.log('1st conditional userChar: ' + userChar);  //View dynamic userChar string
          reqCharCount++;
            console.log('1st reqCharCount: ' + reqCharCount);  //View current reCharCount
        }
      // Ask user to include numbers:
      var inclNumb = confirm('Would you like to include numbers? (Okay/Yes | Cancel/No)');
            console.log("incNumb: " + inclNumb);//View boolean value
        // If user selected true, send this array to the userChar string
        if (inclNumb) {
          userChar += numbChar;
            console.log('2nd conditional userChar: ' + userChar);  //View dynamic userChar string
          reqCharCount++;
            console.log('2nd reqCharCount: ' + reqCharCount);  //View current reCharCount
        }
      // Ask user to include lower case?
      var inclLower = confirm('Would you like to include lower-case letters? (Okay/Yes | Cancel/No)');
            console.log("incLower: " + inclLower);//View boolean value
        // If user selected true, send this array to the userChar string
        if (inclLower) {
          userChar += lowerCase;
            console.log('3rd conditional userChar: ' + userChar);  //View dynamic userChar string
          reqCharCount++;
            console.log('3rd reqCharCount: ' + reqCharCount);  //View current reCharCount
        }    
      // Ask user to include Upper case?
      var incUpper = confirm('Would you like to include Upper-case letters? (Okay/Yes | Cancel/No)');
            console.log("incUpper: " + incUpper);//View boolean value
        // If user selected true, send this array to the userChar string
        if (incUpper) {
          userChar += upperCase;
            console.log('4th conditional userChar: ' + userChar);  //View dynamic userChar string
          reqCharCount++;
            console.log('4th reqCharCount: ' + reqCharCount);  //View current reCharCount
        }
    
      console.log('final reqCharCount: ' + reqCharCount);  //View total reCharCount
    console.log("---Conditional to check reqCharCount---");  //pg break
    
    //This conditional will check if user selected enough character types
    if (reqCharCount < 2) {
      alert("You must choose at least two character types. Please try again.");
      pass = 'Click \'Generate Password\' below to get started!';
      return pass;
    } else {
    console.log('---Function to genarate random password---');  //pg break
    // Run a function to randomly get an index value to correlate with the dynamic userChar string, than attach each string to var pass
    function genPass () {
      // Create a loop that stops when pass.length === userLength
      for (;pass.length < userLength;) {
        //create a random index number to get an element from dynamic userChar
        var indexNumb = Math.floor(Math.random() * userChar.length);
          console.log('indexNumber: ' + indexNumb);  //review the rng index value
          console.log('------');  //pg break
          console.log('show index element: ' + userChar[indexNumb])  //view the correlating index element
          console.log('------');  //pg break
        pass += userChar[indexNumb];
          console.log('show current pass: ' + pass);  //view the current string of pass
      }
    }
    genPass(); 
    return pass
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function copy() {
      console.log('---copy Function---');  //pg break
  var copyText = document.querySelector('textarea');
  copyText.select();
  document.execCommand("copy");
}

document.querySelector('#copy').addEventListener('click', copy);