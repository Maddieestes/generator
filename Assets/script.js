// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Arrays to make if statements easier
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "<", "=", ">", "?", "@", "~"];


function generatePassword() {
  var text = "";
  var newArray = [];
  let Length = prompt("How long would you like your password to be? Choose a number between 8-128.");

  // Password length requirements to meet
  if (isNaN(Length)) {
    alert("Please Try again! You have to enter a number.");
    return;
  } else if (Length < 8 || Length > 128) {
    alert(" Please try again! Number must be between 8-12.");
    return;
  };

  // prompting users input and confirming info

  let pickUp = "Do you want to have upper case letters in your password?";
  choiceUp = confirm(pickUp);

  let pickLower = "Do you want to have lower case letters in your password?";
  choiceLower = confirm(pickLower);

  let pickNumber = "Do you want to add numbers to your password?";
  choiceNumber = confirm(pickNumber);

  let pickSymbol = "Do you want to add symbols to your password?";
  choiceSymbol = confirm(pickSymbol);

  // Character sets to choose from
  if (!choiceUp && !choiceLower && !choiceNumber && !choiceSymbol) {
    alert("Please pick at least one character option. ");
    var newArray = [];
    return;
  } else {
    // added if statements to have the generator know what to do with the user inputs
    if (choiceUp == true) {
      newArray = newArray.concat(upper);
    }

    if (choiceLower == true) {
      newArray = newArray.concat(lower);
    }

    if (choiceNumber == true) {
      newArray = newArray.concat(number);
    }

    if (choiceSymbol == true) {
      newArray = newArray.concat(symbol);
    }

  }

  //generating password
  for (var i = 0; i < Length; i++)
    text += newArray[Math.floor(Math.random() * newArray.length)];
  return text;
}