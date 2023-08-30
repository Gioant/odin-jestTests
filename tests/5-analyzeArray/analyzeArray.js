function analyzeArray(numArr){
    //save each result into a variable to be used as properties for an object
    const sum = numArr.reduce((total, num) => total + num, 0);
    const average = sum / numArr.length;

    console.log(average);

    //find min & max
    const min = Math.min(...numArr);
    const max= Math.max(...numArr);

    //find length of array
    const length = numArr.length;

    //create object with properties using variables
    const resultObject = {
        average: average,
        min: min,
        max: max,
        length: length
    }

    return resultObject;
}

module.exports = { analyzeArray };
