const {add} = require('./calculator');

test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('should return 1 for string 1', () => {
    expect(add('1')).toBe(1);
});

test('should return 3 for string 1,2', () => {
    expect(add('1,2')).toBe(3);
});

test('should return 10 for string 1,2,3,4', () => {
    expect(add('1,2,3,4')).toBe(10);
});

test('should handle new line as a delimiter', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('should throw exception with any negative numbers passed in', () => {
    expect(() => add('-1,2,3,-4')).toThrow('Negative numbers found: -1,-4');
});

test('should ignore big numbers', () => {
    expect(add('1,2,3,1001')).toBe(6);
});
