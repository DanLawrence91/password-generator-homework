// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// constants set for each type of character available to be selected
const useLower = 'abcdefghijklmnopqrstuvwxyz';
const useCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const useSpecial = '!@#$%^&*();:.,<>';
const useNumber = '0123456789';

// set function for generate password to include prompts from acceptance criteria
function generatePassword(){
  let userChars = '';
  let charLength = prompt("Please pick how many characters you want the password to be. It must be between 8 and 128 characters in length");
    // if nothing entered for character length or cancel is pressed it will end function
    if (!charLength){
      return;
  }
  
    // make sure characters chosen is 8 or above, if not user will need to restart
    if (charLength < 8){
      return alert("Please select number of characters over 8");
  }

    // make sure characters chosen is 128 or below, if not user will need to restart
    if (charLength > 128){
      return alert("Please select number of characters below 128");
  }
  // set up following confirmation messages if character length passes validation checks these confirm messages will then add to userChars variable if true
  
  let lowerCase = confirm('Please select whether you want to use lowercase characters?')
    if (lowerCase){
      userChars = userChars.concat(useLower)
    } 
    
  let upperCase = confirm('Please select whether you want to use uppercase characters?')
    if (upperCase){
      userChars = userChars.concat(useCapital)
  } 

  let specialCase = confirm('Please select whether you want to use special characters?')
    if (specialCase){
      userChars = userChars.concat(useSpecial)
    }

  let numbers = confirm('Please select whether you want to use numbers?')
    if (numbers){
      userChars = userChars.concat(useNumber)
    }
  //check that userChars only picks up selections made by user and not all character types
  console.log(userChars)
  
  //validation to make sure at least one of the criteria is selected, if not returns to start 
  if ((lowerCase === false && upperCase === false && numbers === false && specialCase === false)){
    return alert('At least one type of character must be selected. \nPlease try agin.');
  }  
  
  // generate random selections of characters based on character length chosen on first prompt, select a random index number in the string of userChars, which is based on selections made throughout the confirms the user has been through, these will then be added to mainPassword variable and will loop through until password length = charLength
  var mainPassword = "";
  for (var i = 0; i < charLength; i++ ) {
    mainPassword += userChars.charAt(Math.floor(Math.random() * userChars.length));
  }
  return mainPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);