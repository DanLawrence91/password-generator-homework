// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// variables set for different character types
var charsCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charsNumeric = "1234567890"
var charsLower = "abcdefghijklmnopqrstuvwxyz"
var special = "!@#$%^&*();:,.<>"
// set function for generate password to include prompts from acceptance criteria
var generatePassword = function() {
  
  //prompts needed for each character type and password length
  var charNum = prompt("Please pick how many characters you want the password to be. It must be between 8 and 128 characters in length");

  if (!charNum){
    return;
  }

  //need to test if this set to 7 or 8. also may need to change from confirm to other e.g prompt or alert
  if (charNum < 8){
    return confirm("Please select number of characters over 8");
  }

  //need to test if this set to 127 or 128. also may need to change from confirm to other e.g prompt or alert
  if (charNum > 128){
    return confirm("Please select number of characters below 128");
  }

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
