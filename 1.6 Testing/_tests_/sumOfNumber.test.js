const sumOfNumber = require('../app/sumOfNumber');

describe('sumOfNumber function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('should return the sum of the doubles of input numbers', async () => {
    const resultPromise = sumOfNumber(1, 2, 3);

    // advance time by 2 seconds for each call to showDouble function
    jest.advanceTimersByTime(2000);
    const result1 = await resultPromise;

    jest.advanceTimersByTime(2000);
    const result2 = await resultPromise;

    jest.advanceTimersByTime(2000);
    const result3 = await resultPromise;

    expect(result1).toBe(12);
    expect(result2).toBe(12);
    expect(result3).toBe(12);
  });

  test('should throw an error if input value is not a number', async () => {
    try {
      await sumOfNumber('1', 2, 3);
    } catch (err) {
      expect(err.message).toBe('El valor debe ser un número');
    }
  });
});






