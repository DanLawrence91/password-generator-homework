// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// set function for generate password to include prompts from acceptance criteria


const passwordKeys = {
  useCapital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  useLower: "abcdefghijklmnopqrstuvwxyz",
  useSpecial: "!@#$%^&*();:,.<>",
  useNumeric: "1234567890",
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* need to set so if first prompt is correct, moves to second prompt,
then can be yes or no but needs to move through prompts for each character type,
at end need to use selections from each prompt to generate a password as long as at least one
is selected. If one hasn't been selected set alert saying at least one needs to be selected
something to do with character variables index numbers - 
e.g. var specialSelection = Math.floor(Math.random() * charSpecial.length); that should select
selections from each character list. 
Need to tie this with character length selected. charGen selection will determine how many of 
each selected */