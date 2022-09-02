// List of variables

// Letters, numbers and special characters that can be used in the password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]
  
var upperCasedCharacters =[
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  'N',
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

var numericCharacters = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
]

var specialCharacters = [
"!",
"#",
"$",
"%",
"&",
"'",
"(",
")",
"*",
",",
"+",
"-",
".",
"/",
"<",
":",
";",
"<",
"=",
"?",
"@",
"[",
"^",
"_",
"`",
"{",
"|",
"}",
"~"
]

function getPasswordOptions () {
    var length = parseInt(prompt("How many characters would you like your password to be?"),10)
    
    if (Number.isNaN(length)) {
        alert("Password length must be provided as a number")
        return null;
    }

    if (length < 8) {
        alert("Password length must be at least 8 characters")
        return null;
    }

    if (length > 128) {
        alert("Password length must be fewer than 129 characters")
        return null;
    }

    var hasSpecialCharacters = confirm (
        "Click OK to confirm including special characters"
    )

    var hasNumbers = confirm (
        "Click OK to confirm including numbers"
    )

    var hasLowerCase = confirm (
        "Click OK to confirm including lowercase characters"
    )
    
    var hasUpperCase = confirm (
        "Click OK to confirm including upper case characters"
    )

    if(hasSpecialCharacters === false &&
      hasNumbers === false &&
      hasLowerCase === false &&
      hasUpperCase === false 
    ) {
      alert("Must select at least one character type");
      return null
    }

    var passwordOptions = {
      length: length,
      hasLowerCase: hasLowerCase,
      hasNumbers: hasNumbers,
      hasUpperCase: hasUpperCase,
      hasSpecialCharacters: hasSpecialCharacters
    }

    return passwordOptions;

};

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomElement = arr[randomIndex];
    return randomElement;
}


// generate the function "generatePassword"
function generatePassword () {
  var options = getPasswordOptions();
  var results = []

  var possibleCharacters = []

  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  for(var index = 0; index < options.length; index++) {
    var possibleCharacters = getRandom(possibleCharacters);

    results.push(possibleCharacters);
  }

  for (var index = 0; index < guaranteedCharacters.length; index++) {
    results[index] = guaranteedCharacters[index];
  }

  return results.join("")

};

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
