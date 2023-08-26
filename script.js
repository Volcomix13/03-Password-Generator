// Assignment code here
//Variables
const characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()"
};


//Prompts for user
function prompts() {
  console.log("I'm being clicked");

  var characterLength = parseInt(prompt(" Please choose lenght of password, in numerical form, from 8-128")); 
    if(characterLength <8 || characterLength >128) {
      return "Password must be between 8-128 characters long";
    } else if (isNaN(characterLength)) {
      characterLength = prompt("Please enter a valid number");
    } else {
      alert("Password will be" + characterLength + "characters long");
    }
  
  var uppercaseCharacters = confirm("Include uppercase letters?");

  var lowercaseCharacters = confirm("Include lowercase letters?");

  var specialCharacters =  confirm("Include special characters?");

  var numbers = confirm("include numbers?");

  //object
  var choices = {
    length: characterLength, 
    uppercaseCharacters: uppercaseCharacters,
    lowercaseCharacters: lowercaseCharacters,
    specialCharacters: specialCharacters,
    numbers: numbers,
  };
  console.log(choices);
  return choices;
}

function generatePassword () {//find a way to get the options in this function, will need to randomly select characters out of the chosen options
  var password = '';
  for (var i = 7; i < characterLength; i++){
    var randomLetter = Math.floor(Math.random() * characterLength.length);
    password = password + correctChoices[randomLetter];
  }
  return password;

}

 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctChoices = prompts();
  var passwordText = document.querySelector("#password");

  if (correctChoices) {
   var newPassword = generatePassword();
   passwordText.value = newPassword;
   
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



