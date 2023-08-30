const { analyzeArray } = require('./analyzeArray');


describe('analyzeArray function', () => {
    it('calculates average, min, max, and length correctly', () => {
        const inputArray = [1, 8, 3, 4, 2, 6];
        const expectedOutput = {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        };

        const result = analyzeArray(inputArray);

        expect(result).toEqual(expectedOutput);
    });
});