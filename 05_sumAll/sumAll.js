const sumAll = function(x ,y) {

 
    if (x < 0 || y < 0) {
        return "ERROR";
    } else if ( isNaN(x) || isNaN(y) ) {
        return "ERROR"
    }

 

    let sum = 0;
    let bigNumber;
    let smallNumber;
    if (x >= y) {
        bigNumber = x;
        smallNumber = y;
    } else {
        bigNumber = y;
        smallNumber = x;
    }

    for (i = smallNumber; i <= bigNumber; i++) {
        sum += i;
    }
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
