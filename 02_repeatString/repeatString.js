const repeatString = function (string, number) {

    // let num;
    // let userStringInput = "hey";
    let outputString = ""

    for (let i = 0; i < number; i++) {

        outputString = outputString.concat(string);

    }

    return outputString;

    // if (userNumberInput < 0) {
    //     let errorMessage = "ERROR"
    //     return errorMessage;
    // } else if(outputString >= 0){
    //     return outputString;
    // }
};

// Do not edit below this line
module.exports = repeatString;
