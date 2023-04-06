// Assignment code here
//Variables
var characterLength = 128;

var uppercaseCharacters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var lowercaseCharacters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var specialCharacters = "!,@,#,$,%,^,&,*,(,)?"
var number = "0,1,2 3,4,5,6,7,8,9"


//Prompts for user
function Prompts(){
  characterLength = prompt(" Please choose lenght of password, in numerical form, from 8-128");
  if (characterLength < 8 || characterLength > 128) {
    return false;
  }

  if (confirm("Include uppercase letters?")) {
    uppercaseCharacters = uppercaseCharacters;

  }
  
  if (confirm("Include lowercase letters?")) {
      lowercaseCharacters = lowercaseCharacters;
  }

  if (confirm ("Include special characters?")){
    specialCharacters = specialCharacters;
  }

  if (confirm("include numbers?")){
    number = number;
  }
  return true;
}

function generatePassword () {
  var password = '';
  for (var i = 7; i < characterLength; i++){
  }

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



