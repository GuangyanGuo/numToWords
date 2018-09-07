const convert = require('./n');

test('convert 990999999 to words', () => {
  expect(convert(990999999)).toBe('nine hundred and ninety million nine hundred and ninety nine thousand nine hundred and ninety nine');
});