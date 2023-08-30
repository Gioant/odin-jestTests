const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const alphabetArrayUC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function caesarCipher(word, shiftFactor) {

    //formula: c = (x + n) % 26
    // encrypted letter = letter + shiftFactor % 26 letters of alphabet

    let result = "";
    let letter_index;

    const regexLowerCase = /[a-z]/;
    const regexUppercase = /[A-Z]/;

    //loop through the end of the word
    for (let i = 0; i < word.length; i++) {

        //save each letter from word
        const letter = word[i];

        //letter is lowercase
        if (regexLowerCase.test(letter)) {

            //get encrypted letter using formula
            letter_index = (alphabetArray.indexOf(letter) + shiftFactor) % alphabetArray.length;

            //add encrypted letter to result from alphabet array
            result = result + alphabetArray[letter_index];

            //letter is uppercase, use 2nd array
        } else if (regexUppercase.test(letter)) {

            letter_index = (alphabetArrayUC.indexOf(letter) + shiftFactor) % alphabetArray.length;

            result = result + alphabetArrayUC[letter_index];
        } else {
            //add non-letter characters to final result variable (finalsecretWord)
            result = result + letter;
        }
    }

    return result;
}

module.exports = { caesarCipher };


