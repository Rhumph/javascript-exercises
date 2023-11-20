const removeFromArray = function (array, ...values) {

    let modifiedArray = [...array];
    let inputValues = values;

    for (let i = 0; i <= inputValues.length; i++){ 
        for (x = 0; x <= modifiedArray.length; x++){
            if(modifiedArray[x] === inputValues[i]){ 
                modifiedArray.splice(x, 1);
            };
        };
    }
    return modifiedArray;

};


// Do not edit below this line
module.exports = removeFromArray;
