const reverseString = function(string) {

    let reversedCharacters = string.split("").reverse();
    let reversedString = reversedCharacters.join("");
  return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
