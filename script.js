// Assignment code here
//Variables
const characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()"
};

// Function to generate random characters/prompts

function getRandomCharacter (characterset) {
  const randomCharacter = Math.floor(Math.random() * characterset.length);
  return characterset[randomCharacter];
}


function generatePassword () {//find a way to get the options in this function, will need to randomly select characters out of the chosen options
  const passwordLenght = parseInt(prompt ("Please enter a password length between 8 and 128"));

  if (isNaN(passwordLenght) || passwordLenght < 8 || passwordLenght > 128) {
    alert("Please enter a valid password length");
    return "",
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



