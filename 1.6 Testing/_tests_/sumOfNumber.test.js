const sumOfNumber = require('../app/sumOfNumber');


describe('sumOfNumber', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should return the correct sum of numbers', async () => {
    const result = await sumOfNumber(1, 2, 3);
    expect(result).toBe(12);
  });

  test('should wait for all promises to resolve', async () => {
    const promise = sumOfNumber(1, 2, 3);
    jest.runAllTimers();
    const result = await promise;
    expect(result).toBe(12);
  });
});
