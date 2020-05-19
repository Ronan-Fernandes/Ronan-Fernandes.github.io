const mySum = require('./ex-3');

describe('sum all the elements of an array', () => {
    test('sum the array', () => {
        expect(mySum([1, 2, 3, 4])).toEqual(10);
        expect(mySum([1, -2, -3, 4])).toEqual(0);
    })
});