const capitalize = require('./capitalize');

test('function should capitalize first letter of a string', ()=> {
    const input = "hello";
    const expectedOutput = "Hello";

    expect(capitalize(input)).toBe(expectedOutput);
});