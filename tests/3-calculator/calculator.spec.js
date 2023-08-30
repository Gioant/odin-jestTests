const { add, subtract, divide, multiply } = require('./calculator');

describe('Math Function', () => {
    //test case for add function
    test('add function should add two numbers correctly', () => {
        const result = add(1, 1);
        expect(result).toBe(2);
    });


    //test case for minus function
    test('add function should subtract two numbers correctly', () => {
        const result = subtract(5, 3);
        expect(result).toBe(2);
    });

    //test case for divide function
    test('add function should divide two numbers correctly', () => {
        const result = divide(8, 2);
        expect(result).toBe(4);
    });

    //test case for multiply function
    test('add function should multiply two numbers correctly', () => {
        const result = multiply(3, 3);
        expect(result).toBe(9);
    });
});