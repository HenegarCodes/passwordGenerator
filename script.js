// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength;

 var lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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

confirm("Select okay if you want lowercase letters in your password?");

confirm("Select okay if you want uppercase letters in your password?");

confirm("Select okay if you want numbers in your password?");

confirm("Select okay if you want special characters letters in your password?");
}






  
  
