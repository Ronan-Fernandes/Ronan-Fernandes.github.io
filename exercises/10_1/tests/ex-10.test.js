const { obj1, obj2, obj3 } = require('./ex-10');

describe('test if 2 objects is equal', () => {
    test('obj1 should be equal to obj2', () => { expect(obj1).toEqual(obj2) });
    test('obj1 should not be equal to obj3', () => { expect(obj1).not.toEqual(obj3)});
});