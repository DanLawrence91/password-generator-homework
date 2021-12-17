// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// set function for generate password to include prompts from acceptance criteria

let useCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let useLower = "abcdefghijklmnopqrstuvwxyz";
let useSpecial = "!@#$%^&*();:,.<>";
let useNumber = "0123456789";

var indexCapital = (Math.floor(Math.random() * useCapital.length))
var randomCapital = useCapital[indexCapital]

console.log(randomCapital) //console.log to check it works

var indexLower = (Math.floor(Math.random() * useLower.length))
var randomLower = useLower[indexLower]

console.log(randomLower) //console.log to check it works

var indexSpecial = (Math.floor(Math.random() * useSpecial.length))
var randomSpecial = useSpecial[indexSpecial]

console.log(randomSpecial) //console.log to check it works

var indexNumber = (Math.floor(Math.random() * useNumber.length))
var randomNumber = useNumber[indexNumber]

console.log(randomNumber) //console.log to check it works

function generatePassword(){
  let charLength = prompt("Please pick how many characters you want the password to be. It must be between 8 and 128 characters in length");

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
  let lowerCase = confirm('Please select whether you want to use lowercase characters?')
  console.log(lowerCase) //console log on each to check whether selection saved to computer

  let upperCase = confirm('Please select whether you want to use uppercase characters?')
  console.log(upperCase)

  let numbers = confirm('Please select whether you want to use numbers?')
  console.log(numbers)

  let specialCase = confirm('Please select whether you want to use special characters?')
  console.log(specialCase)

  //validation to make sure at least one of the criteria is selected, if not returns to start 
  if ((lowerCase === false && upperCase === false && numbers === false && specialCase === false)){
    //maybe look at loop to take back to initial question
    return alert('At least one type of character must be selected. \nPlease try agin.');
  }

  let characters = (lowerCase === true || upperCase === true || number === true || specialCase === true)

  // if ((lowerCase === true || upperCase === true || number === true || specialCase === true)){
  //   return //password will go here
  // }
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