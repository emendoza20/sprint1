const { sumOfNumber } = require('../app/doubleNumbers');
jest.useFakeTimers();

describe('sumOfNumber', () => {
  test('should return the sum of doubled numbers after 2 seconds', async () => {
    const a = 1,
          b = 2,
          c = 3;

    const promise = sumOfNumber(a, b, c);

    jest.advanceTimersByTime(2000); // avanzar el tiempo 2 segundos

    const result = await promise;

    expect(result).toBe(12);
  });
});
 





