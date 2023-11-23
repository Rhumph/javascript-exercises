const sumAll = function (...numbers) {

    let inputNumbers = [...numbers];
    const highestInputNumber = Math.max(...inputNumbers)
    const lowestInputNumber = Math.min(...inputNumbers)

    if(!Number.isInteger(highestInputNumber), !Number.isInteger(lowestInputNumber)){ 
       return "ERROR";
    }

    if (lowestInputNumber === highestInputNumber) {
        return "ERROR";
    } else if (lowestInputNumber < 0 || highestInputNumber < 0) {
        return "ERROR";
    } else if (lowestInputNumber,highestInputNumber) {
        return "ERROR";
    }else if (lowestInputNumber < highestInputNumber) {
        let sumNumber = 0;
        for (i = lowestInputNumber; i <= highestInputNumber; i++) {
            sumNumber += i;
        }
        return sumNumber;
    }

};

// Do not edit below this line
module.exports = sumAll;
