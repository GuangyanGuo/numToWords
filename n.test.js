const convert = require('./n');

test('convert 990999999 to words', () => {
    expect(convert(990999999)).toBe('nine hundred and ninety million, nine hundred and ninety nine thousand, nine hundred and ninety nine');
});

test('convert 2 to words', () => {
    expect(convert(2)).toBe('two');
});

test('convert 12 to words', () => {
    expect(convert(12)).toBe('twelve');
});

test('convert 22 to words', () => {
    expect(convert(22)).toBe('twenty two');
});

test('convert 100 to words', () => {
    expect(convert(100)).toBe('one hundred');
});

test('convert 202 to words', () => {
    expect(convert(202)).toBe('two hundred and two');
});

test('convert 210 to words', () => {
    expect(convert(210)).toBe('two hundred and ten');
});

test('convert 212 to words', () => {
    expect(convert(212)).toBe('two hundred and twelve');
});

test('convert 240 to words', () => {
    expect(convert(240)).toBe('two hundred and forty');
});

test('convert 222 to words', () => {
    expect(convert(222)).toBe('two hundred and twenty two');
});

test('convert 251 to words', () => {
    expect(convert(251)).toBe('two hundred and fifty one');
});

test('convert 919 to words', () => {
    expect(convert(919)).toBe('nine hundred and nineteen');
});

test('convert 1060 to words', () => {
    expect(convert(1060)).toBe('one thousand and sixty');
});

test('convert 1090000 to words', () => {
    expect(convert(1090000)).toBe('one million and ninety thousand');
});

test('convert 1000000 to words', () => {
    expect(convert(1000001)).toBe('one million and one');
});

test('convert 1002000 to words', () => {
    expect(convert(1002000)).toBe('one million and two thousand');
});

test('convert 101002000 to words', () => {
    expect(convert(101002000)).toBe('one hundred and one million, two thousand');
});

test('convert 911000012 to words', () => {
    expect(convert(911000012)).toBe('nine hundred and eleven million, twelve');
});

test('convert 915000010 to words', () => {
    expect(convert(915000010)).toBe('nine hundred and fifteen million, ten');
});




