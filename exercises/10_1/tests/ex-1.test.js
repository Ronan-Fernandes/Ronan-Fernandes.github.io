const sum = require('./ex-1'); 

describe('add', () => {
    test('somar dois numeros', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });
    test('não soma strings', () => {
        expect(() => sum(4, '5')).toThrow(); //tipo expected(()=>sum(1,'1')).toThrow() 
        expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    });
})