// Assignment Code
var generateBtn = document.querySelector("#generate");

// input values
var characterLength;
var confirmSymbols;
var confirmNumbers;
var confirmUppercase;
var confirmLowercase;


//typers of inputs/characters that can be included in the password
 var alphaLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var alphaUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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


function generatePassword() {
characterLength = (prompt("Choose the amount of characters between 8 - 128 your password will have"));
  if (characterLength < 8 || characterLength > 128) {
    alert("please enter a character amount between 8-128.");
  }
  else {
    confirm("Select okay if you are satisfied with the characters you put in?");
  }

var confirmLowercase = confirm("Select okay if you want lowercase letters in your password?");
var confirmUppercase = confirm("Select okay if you want uppercase letters in your password?");
var confirmNumbers = confirm("Select okay if you want numbers in your password?");
var confirmSymbols = confirm("Select okay if you want special characters letters in your password?");

if (confirmLowercase == false & confirmNumbers == false & confirmSymbols == false & confirmUppercase == false) {
  alert("In order to generate a password you must select one of the following options.");
}


}




  
  
