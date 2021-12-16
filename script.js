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
  useNumeric: "0123456789",
}

function generatePassword(){
  let userPassword = prompt("Please pick how many characters you want the password to be. It must be between 8 and 128 characters in length");

  if (!userPassword){
    return;
  }

  //need to test if this set to 7 or 8. also may need to change from confirm to other e.g prompt or alert
  if (userPassword < 8){
    return alert("Please select number of characters over 8");
  }

  //need to test if this set to 127 or 128. also may need to change from confirm to other e.g prompt or alert
  if (userPassword > 128){
    return alert("Please select number of characters below 128");
  }

  // if (userPassword > 8 || userPassword < 128){
  //  confirm('Please select whether you want lowercase letters? \nOk for yes, Cancel for no')
  // }

  var lowerCase = confirm('Please select whether you want to use lowercase characters?')
  console.log(lowerCase)

  var upperCase = confirm('Please select whether you want to use uppercase characters?')
  console.log(upperCase)

  var numbers = confirm('Please select whether you want to use numbers?')
  console.log(numbers)

  var specialCase = confirm('Please select whether you want to use special characters?')
  console.log(specialCase)

  if ((lowerCase === false && upperCase === false) && (numbers === false && specialCase === false)){
    return window.alert('At least one type of character must be selected. \nPlease try agin.');
  }
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