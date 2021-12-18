// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// constants set for each type of character available to be selected
const useLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const useCapital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const useSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ';', ':', '.', '<', '>'];
const useNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// set function for generate password to include prompts from acceptance criteria
function generatePassword(charLength){
  let userChars = "";
  var charLength = prompt("Please pick how many characters you want the password to be. It must be between 8 and 128 characters in length");
    //validations if character length selection outside range of if no selection made
    if (!charLength){
      return;
  }
  
    //need to test if this set to 7 or 8. also may need to change from confirm to other e.g prompt or alert
    if (charLength < 8){
      return alert("Please select number of characters over 8");
  }

    //need to test if this set to 127 or 128. also may need to change from confirm to other e.g prompt or alert
    if (charLength > 128){
      return alert("Please select number of characters below 128");
  }
  //set up following confirmation messages if character length passes validation checks
  var lowerCase = confirm('Please select whether you want to use lowercase characters?')
    if (lowerCase){
      userChars = userChars.concat(useLower)
    } 
    
  var upperCase = confirm('Please select whether you want to use uppercase characters?')
    if (upperCase){
      userChars = userChars.concat(useCapital)
  } 

  var specialCase = confirm('Please select whether you want to use special characters?')
    if (specialCase){
      userChars = userChars.concat(useSpecial)
    }

  var numbers = confirm('Please select whether you want to use numbers?')
    if (numbers){
      userChars = userChars.concat(useNumber)
    }
  console.log(userChars)
  
  //validation to make sure at least one of the criteria is selected, if not returns to start 
  if ((lowerCase === false && upperCase === false && numbers === false && specialCase === false)){
    return alert('At least one type of character must be selected. \nPlease try agin.');
  }  
  
  //get random character from selections made by user
  var randomChara = userChars.charAt(Math.floor(Math.random() * userChars.length));


  var mainPassword = "";
  
  //mainPassword = mainPassword.concat(randomChara) - its not just randomChara though as this is only one, need randomChara after loop to get string of randomChara
  
  for ( var i = 0; i < length; i++ ) {
      mainPassword += randomChara;
  }
  return mainPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* 
at end need to use selections from each prompt to generate a password as long as at least one
is selected.
something to do with character variables index numbers - 
e.g. var specialSelection = Math.floor(Math.random() * charSpecial.length); that should select
selections from each character list. 
Need to tie this with character length selected. charGen selection will determine how many of 
each selected */