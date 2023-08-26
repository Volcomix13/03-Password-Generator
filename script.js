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


function generatePassword () {
  const passwordLength = parseInt(prompt ("Please enter a password length between 8 and 128"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    return "";
  }

let password = "";

const selectedCharacterSets = [];
for (const key in characters) {
  if (confirm(`include ${key} characters?`)) {
    selectedCharacterSets.push(characters[key]);
  }
}

if (selectedCharacterSets.length === 0) {
  alert("Please select at least one character set");
  return "";
}

while (password.length < passwordLength) {
  const selectedCharacterSet = selectedCharacterSets[Math.floor(Math.random() * 
    selectedCharacterSets.length)];
    password += getRandomCharacter(selectedCharacterSet);
}

return password;
}
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



