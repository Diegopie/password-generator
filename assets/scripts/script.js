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
  var pass = '';

// * Run All Logic To Generate Password When User Clicks Button
  function generatePassword () {
    // Reset Global Variables to Default State If User Runs generatePassword() Again
    userChar = '';
    reqCharCount = 0;
    pass = '';
    // ** Ask length of characters from user
      var userLength = prompt('Please type a number for the length of your password, between 8 - 128');
      userLength = parseInt(userLength)
          // console.log('userLength: ' + userLength);  //view user value
          // console.log('userLength type: ' + typeof userLength)  //check the type of value
          // console.log('---Conditional: User prompts and confirms---');  //pg break
    // ** Conditional to check if length is correct and if they typed a letter
      if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
        alert("You must choose a number between 8 - 128. Please try again.");
        pass = 'Click \'Generate Password\' below to get started!';
        return pass;
    // ** If Correct, Get Conditions From User
    } else if (userLength >= 8 && userLength <= 128) {
    // ** Display Rules To User
      alert("Please select at least two character types. Your options will be special character, numbers, lowercase, and uppercase");     
    // ** Ask User To Include Special Characters:
      var inclSpec = confirm('Would you like to include special characters? (Okay/Yes | Cancel/No)');
            // console.log("incSpec: " + inclSpec);  //View boolean value
      // *** If User Selected True, Send This Array To The Userchar String    //I should put all this logic in a function, so that I can call that function for each condition
        if (inclSpec) {
          userChar += specChar;
              // console.log('1st conditional userChar: ' + userChar);  //View dynamic userChar string
          reqCharCount++;
              // console.log('1st reqCharCount: ' + reqCharCount);  //View current reCharCount
        }
    // ** Ask User To Include Numbers:
      var inclNumb = confirm('Would you like to include numbers? (Okay/Yes | Cancel/No)');
              // console.log("incNumb: " + inclNumb);//View boolean value
      // *** If User Selected True, Send This Array To The Userchar String
        if (inclNumb) {
          userChar += numbChar;
              // console.log('2nd conditional userChar: ' + userChar);  //View dynamic userChar string
          reqCharCount++;
              // console.log('2nd reqCharCount: ' + reqCharCount);  //View current reCharCount
        }
    // ** Ask User To Include Lower Case?
      var inclLower = confirm('Would you like to include lower-case letters? (Okay/Yes | Cancel/No)');
              // console.log("incLower: " + inclLower);//View boolean value
      // *** If User Selected True, Send This Array To The Userchar String
        if (inclLower) {
          userChar += lowerCase;
              // console.log('3rd conditional userChar: ' + userChar);  //View dynamic userChar string
          reqCharCount++;
              // console.log('3rd reqCharCount: ' + reqCharCount);  //View current reCharCount
        }    
    // ** Ask User To Include Upper Case?
      var incUpper = confirm('Would you like to include Upper-case letters? (Okay/Yes | Cancel/No)');
              // console.log("incUpper: " + incUpper);//View boolean value
      // *** If User Selected True, Send This Array To The Userchar String
        if (incUpper) {
          userChar += upperCase;
              // console.log('4th conditional userChar: ' + userChar);  //View dynamic userChar string
          reqCharCount++;
              // console.log('4th reqCharCount: ' + reqCharCount);  //View current reCharCount
        }
    
      // console.log('final reqCharCount: ' + reqCharCount);  //View total reCharCount
      // console.log("---Conditional to check reqCharCount---");  //pg break
    
  // ** This Conditional Will Check If User Selected Enough Character Types
    if (reqCharCount < 2) {
      alert("You must choose at least two character types. Please try again.");
      pass = 'Click \'Generate Password\' below to get started!';
      return pass;
    } else {
  // ** If User Has Selected All Apporpriate Prompts, Generate Password
          // console.log('---Function to genarate random password---');  //pg break
  // ** Create A Loop That Stops When pass.length === userLength
    for (;pass.length < userLength;) {
    // *** Create A Random Index Number To Get An Element From Dynamic userchar
      var indexNumb = Math.floor(Math.random() * userChar.length);
          // console.log('indexNumber: ' + indexNumb);  //review the rng index value
          // console.log('------');  //pg break
          // console.log('show index element: ' + userChar[indexNumb])  //view the correlating index element
          // console.log('------');  //pg break
    // *** Add Each Random Value To Pass
      pass += userChar[indexNumb];
        // console.log('show current pass: ' + pass);  //view the current string of pass
    }
  // ** Once The Length Of Pass === The Userlength Value, Stop The Loop And Return Pass
    return pass
    }
  }
}

// * Write Password To The #Password Input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // ** Add Event Listener To Generate Button
    generateBtn.addEventListener("click", writePassword);

// * View Content In Textarea Element And Copy To Clipboard
  function copy() {
    var copyText = document.querySelector('textarea');
    copyText.select();
    document.execCommand('copy');
  }
  // ** Add Event Listner To Trigger Copy Text To Clipboard
    document.querySelector('#copy').addEventListener('click', copy);