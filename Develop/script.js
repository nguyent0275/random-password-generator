// Assignment code here

// how many characters would you like your password to contain
// include special characters? include numeric characters? include uppercase and lowercase characters?
// use parseInt

// password object storing the key value pairs that the functions and if else statements use below
var passwordOptions = {
  num: "1234567890",
  specialChar: "'!#$%&'()*+,-./:" + ';<=>?@[]^_`{|}~"`',
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

// selecting the "generate password" button in the html
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// selecting the <textarea> in the html / passwordText objects
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  // checks how many characters the user wants in their password
  var characterCount = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  // checks if the character is equal to NaN (not a number), if so it alerts them and returns
  if (isNaN(characterCount)) {
    alert("Please input a number");
    return;
  }
  // checks if the character is in between the range of 8-128, if not it alerts them and returns
  if (characterCount < 8 || characterCount > 128) {
    alert("Please input a number between 8-128");
    return;
  }
  // prompts for what the password will contain
  var hasNumber = confirm("Would you like your password to contain numbers");
  var hasSpecialChar = confirm(
    "Would you like your password to contain special characters?"
  );
  var hasUpperCase = confirm(
    "Would you like your password to contain uppercase letters?"
  );
  var hasLowerCase = confirm(
    "Would you like your password to contain lowercase letters?"
  );
  // default password contains numbers and letters
  var characters = "";
  // checks if user wants numbers
  if (hasNumber) {
    characters += passwordOptions.num;
  }
  // checks if user wants lower cases
  if (hasLowerCase) {
    characters += passwordOptions.lowerCase;
  }
  // checks if user wants special characters
  if (hasSpecialChar) {
    characters += passwordOptions.specialChar;
  }
  // checks if user wants upper case characters
  if (hasUpperCase) {
    characters += passwordOptions.hasUpperCase;
  }
  // input check / checks if user confirmed any options
  if (characters === "") {
    alert("Please confirm at least one option");
    return;
  }
  var password = generateRandomString(characterCount, characters);

  // where the password is being displayed
  passwordText.value = password;
}

// function for generating random string
function generateRandomString(length, characters) {
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}
