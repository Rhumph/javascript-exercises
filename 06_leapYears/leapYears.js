const leapYears = function(inputYear) {
    
    const divideFour = inputYear % 4;
    const divideOneHundred = inputYear % 100;
    const divideFourHundred = inputYear % 400;
    let isLeapYear;

    if ((divideFour == 0 && !divideOneHundred == 0) || divideFourHundred ==0) {
        isLeapYear = true;
      } else { 
        isLeapYear = false;
      }

      return (isLeapYear)
};

// Do not edit below this line
module.exports = leapYears;
