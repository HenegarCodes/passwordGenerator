// Assignment Code
var generateBtn = document.querySelector("#generate");

// input values
var characterLength;
var confirmSymbols;
var confirmNumbers;
var confirmUppercase;
var confirmLowercase;
let password = '';



//typers of inputs/characters that can be included in the password
var mainLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var mainUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialSymbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function starts our generating password when the buytton is licked on the webpage
function generatePassword() {
  //once clicked the prompt comes up and asks the amount of characters we want for a password
characterLength = (prompt("Choose the amount of characters between 8 - 128 your password will have"));
//sends an alert message prompt if someone does not pick a number between the proper guidelines set
  if (characterLength < 8 || characterLength > 128) {
    alert("please enter a character amount between 8-128.");
  }
  //if they do pick between correct parameters they get a confirmation with the character length amount
  else {
    confirm("Select okay if you are satisfied with the " + (characterLength) + " characters you put in?");
  }
//all of these are variables to use later. They all confirm if within their password they want; lowercase, uppercase, numbers, and symbols.
var confirmLowercase = confirm("Select okay if you want lowercase letters in your password?");
var confirmUppercase = confirm("Select okay if you want uppercase letters in your password?");
var confirmNumbers = confirm("Select okay if you want numbers in your password?");
var confirmSymbols = confirm("Select okay if you want special characters letters in your password?");

//if the user selects no on all options the alert below pops up and runs through the loop again until one is selected at the least.
while (confirmLowercase == false & confirmNumbers == false & confirmSymbols == false & confirmUppercase == false) {
  alert("In order to generate a password you must select one of the following options.");
  var confirmLowercase = confirm("Select okay if you want lowercase letters in your password?");
  var confirmUppercase = confirm("Select okay if you want uppercase letters in your password?");
  var confirmNumbers = confirm("Select okay if you want numbers in your password?");
  var confirmSymbols = confirm("Select okay if you want special characters letters in your password?");
}

//This is a variable holder to keep the randomized numbers after confirmed.
var passText =[]

//grabbing random items fromm all the arrays selected okay to. If selected no when prompted it will skip over.
if (confirmLowercase) {
  passText = passText.concat(mainLowercase)
}

if (confirmUppercase) {
  passText = passText.concat(mainUppercase)
}

if (confirmNumbers) {
  passText = passText.concat(numbers)
}

if (confirmSymbols) {
  passText = passText.concat(specialSymbols)
}

  //created variable to hold password in when doing for loop
var passwordHold = ""

//for loop creates variable i starting at zero then increasing to desired number of chracters through the second line and will run it with the selection at random through the if statements and stops at the correct length. 
for (var i = 0; i < characterLength; i++) {
passwordHold = passwordHold + passText[Math.floor(Math.random() * passText.length)];
console.log(passwordHold);
}
//above it console logs every single iteration it has.
//we then return the pssword hold.
return passwordHold;

}
