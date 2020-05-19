const myIndexOf = require('./ex-2');

describe('index of an element', () => {
    test('return expected index', () => {
        expect(myIndexOf([1, 2, 3, 4], 3)).toEqual(2);
        expect(myIndexOf([1, 2, 3, 4], 5)).toEqual(-1);
    })
});