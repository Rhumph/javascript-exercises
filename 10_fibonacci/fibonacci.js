const fibonacci = function (fibonacciSequenceIndex) {

    let fibseqind = parseInt(fibonacciSequenceIndex);

    if (fibseqind < 0) {
        return "OOPS"
    }

    let fibonacciSequenceArray = [0, 1, 1];

    for (let i = 3; i <= fibseqind; i++) {
        let nextFibonacciNumber = fibonacciSequenceArray[i - 1] + fibonacciSequenceArray[i - 2];
        fibonacciSequenceArray.push(nextFibonacciNumber);
    }

    let selectedFibIndex = fibonacciSequenceArray[fibonacciSequenceIndex];
    return selectedFibIndex

};

// Do not edit below this line
module.exports = fibonacci;
