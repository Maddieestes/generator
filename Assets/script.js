
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // testing to make sure button is functional
  console.log ("button pressed")








// The password that will apper after the button is pressed
  return("Password has been created")

}
// Write password to the #password input

// This generates the password
function writePassword() {
  var password = generatePassword();
  // Make generate password function
  var passwordText = document.querySelector("#password");

  // This displays password on screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);