// Generate Select Tag's Options
for (let i = 9; i < 129; i++) {
    let newSelect = document.createElement('option')
    newSelect.text = i;
    document.querySelector('#length').appendChild(newSelect);
}

// * Array for User Choices
const specChar = '!#$%&*=+-/:;<>?@[]^_`{}~';
const numbChar = '123456789';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// * Declare Global Variables
var generateBtn = document.querySelector("#generate");
// ** Declare blank, dynamic string that will be populated by user choices
var userChar = '';
// ** Declare var to track if user has selected enough choices
var reqCharCount = 0;
// ** Declare var to be used to generate and display password
var pass = '';

// ** Create Pass From User Inputs
function generatePassword2() {
    // *** Reset Variables Back to Default
    userChar = '';
    reqCharCount = 0;
    pass = '';
    document.querySelector('#alert').innerText = "";

    // *** Go through each option, checking for true values. If true, appending character options and incrementing reqCharCount
    // Pass Length
    const userLength = document.querySelector('#length').value;
    console.log("length", userLength);
    // Special Character
    const spec = document.querySelector('input[name="special"]:checked').value
    console.log("spec", spec);
    if (spec === 'true') {
        userChar += specChar;
        reqCharCount++;
    }
    // Number Character
    const numb = document.querySelector('input[name="number"]:checked').value
    console.log("number", numb);
    if (numb === 'true') {
        userChar += numbChar;
        reqCharCount++;
    }
    // Lower Character
    const low = document.querySelector('input[name="lower"]:checked').value
    console.log("low", low);
    if (low === 'true') {
        userChar += lowerCase;
        reqCharCount++;
    }
    // Upper Character
    const upper = document.querySelector('input[name="upper"]:checked').value
    console.log("upper", upper);
    if (upper === 'true') {
        userChar += upperCase;
        reqCharCount++;
    }

    // ** Check if enough options have been selected, then randomize selected characters
    if (reqCharCount < 2) {
        document.querySelector('#alert').innerText = "You must choose at least two character types";
        return "";
    } else {
        for (; pass.length < userLength;) {
            var indexNumb = Math.floor(Math.random() * userChar.length);
            pass += userChar[indexNumb];
    }}
    return pass
}

// * Write Password To The #Password Input
function writePassword() {
    var password = generatePassword2();
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
// ** Add Event Listener To Trigger Copy Text To Clipboard
document.querySelector('#copy').addEventListener('click', copy);
