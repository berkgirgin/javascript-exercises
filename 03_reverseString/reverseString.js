const reverseString = function(str) {
    txt = "";

    for (i = (str.length -1) ; i >=0 ; i--) {
        txt += str.charAt(i);
    }
    return txt;

};

// Do not edit below this line
module.exports = reverseString;
