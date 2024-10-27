const reverseString = function(string) {
    let reversedString = [];
    let newArray = Array.from(string);
    for(let i = newArray.length - 1; i >= 0; i--) {
        reversedString.push(newArray[i]);
    }
    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
