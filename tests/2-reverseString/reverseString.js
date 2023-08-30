function reverseString(input){
    // split word in array, reverse each letter & join them together
    return input.split("").reverse().join("");
}

module.exports = reverseString;