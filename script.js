// Assignment code here
//Variables
var characterLength = []
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacters = ["!","@","#","$","%","^","&","*","?"];
var number = ["0","1","2","3","4","5","6","7","8","9"];


//Prompts for user
function prompts() {
  console.log("I'm being clicked");

  var characterLength = parseInt(prompt(" Please choose lenght of password, in numerical form, from 8-128")); 
    if(characterLength <8 || characterLength >128) {
      alert("Please choose a number between 8-128");
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



