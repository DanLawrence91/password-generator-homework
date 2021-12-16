// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// set function for generate password to include prompts from acceptance criteria
function generatePassword() {
  // variables set for different character types
  var charsCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var charsNumeric = "1234567890"
  var charsLower = "abcdefghijklmnopqrstuvwxyz"
  var special = "!@#$%^&*();:,.<>"

  //prompts needed for each character type and password length
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
