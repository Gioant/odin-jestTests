const reverseString = require('./reverseString');

test('function should reverse a given string', ()=> {
    const input = "hello";
    const expectedOutput = "olleh";

    expect(reverseString(input)).toBe(expectedOutput);
});