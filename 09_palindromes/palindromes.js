const palindromes = function (sentence) {

    isAPalindrome = false;
    let functionSentence = String(sentence);
    let lowerCaseSTring = functionSentence.toLowerCase();
    let cleanedString = lowerCaseSTring.replace(/[^\w]|_/g, '');

    let inverseString = cleanedString.split('').reverse().join('');

    if (cleanedString === inverseString) { 
        isAPalindrome =true;
    }

    // console.log(grammarFreeString + " " + inverseString)

    return isAPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
