const add = function(...numbers) {
  let arr = [0, ...numbers];
  let sumOfArray = arr.reduce((sum, current) => sum + current);
  return sumOfArray  
};

const subtract = function(...numbers) {	
  let arr = [...numbers];
  let subractionOfArray = arr.reduce((sum, current) => sum - current);
  return subractionOfArray 
};

const sum = function(...numbers) {	
  if (numbers.length === 1 && Array.isArray(numbers[0])) {
    let sumOfArray = numbers[0].reduce((sum, current) => sum + current, 0);
    return sumOfArray;
  }
  
  let arr = [...numbers];
  let undefinedZero = 0;
  arr.unshift(undefinedZero);
  let sumOfArray = arr.reduce((sum, current) => sum + current);
  return parseInt(sumOfArray)  
};

const multiply = function(...numbers) {
  if (numbers.length === 1 && Array.isArray(numbers[0])) {
    let sumOfArray = numbers[0].reduce((sum, current) => sum * current);
    return sumOfArray;
  }
  
  let arr = [...numbers];
  // let undefinedZero = 0;
  // arr.unshift(undefinedZero);
  let sumOfArray = arr.reduce((sum, current) => sum * current);
  return parseInt(sumOfArray)  
};

const power = function(...numbers) {
  if (numbers.length === 1 && Array.isArray(numbers[0])) {
    let sumOfArray = numbers[0].reduce((sum, current) => sum ** current);
    return sumOfArray;
  }
  
  let arr = [...numbers];
  // let undefinedZero = 0;
  // arr.unshift(undefinedZero);
  let sumOfArray = arr.reduce((sum, current) => sum ** current);
  return parseInt(sumOfArray) 
};

const factorial = function(number) {
 let result = 1

 for (let index = 1; index <= number; index++) {
  result *= index;  
 }
 return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
