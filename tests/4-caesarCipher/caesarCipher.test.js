const { caesarCipher } = require('./caesarCipher');

describe('Function Should Encrypt a Given Word by Shifting Each Letter According to the Shift Factor Number', () => {

    //test case for letters only
    test('Output Should Return The Given Encrypted Word Containing Only LowerCase Alphabetic Letters', () => {
        const result = caesarCipher("hello", 3);
        expect(result).toBe("khoor");
    });

    test('Output Should Contain the Encrypted Word Regardless of Letter Case', () => {
        const result = caesarCipher("HeLLo", 3);
        expect(result).toBe("KhOOr");
    });

    test('Output Should Contain the Encrypted Word Regardless of Letter Case and Ignore Punctuation', () => {
        const result = caesarCipher("HeLLo!", 3);
        expect(result).toBe("KhOOr!");
    });

    test('Output Should Contain the Encrypted Word Regardless of Letter Case, Ignoring Punctuation and Numbers', () => {
        const result = caesarCipher("HeLLo!123", 3);
        expect(result).toBe("KhOOr!123");
    });

    test('Test for Wrapping: Input Word Starting with Z Should Wrap Around Correctly After Encryption', () => {
        const result = caesarCipher("ZeBrA!123", 3);
        expect(result).toBe("ChEuD!123");
    });

});