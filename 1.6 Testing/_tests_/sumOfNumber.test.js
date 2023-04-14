const sumOfNumber = require('../app/sumOfNumber.js');
const { advanceTimersByTime } = require('jest-fake-timers');

test('sumOfNumber should return the sum of the doubled values after 6 seconds', async () => {
  jest.useFakeTimers();
  const sumPromise = sumOfNumber(1, 2, 3);
  jest.advanceTimersByTime(2000); // Advance 2 seconds
  const result = await sumPromise;
  jest.advanceTimersByTime(4000); // Advance remaining 4 seconds
  expect(result).toBe(12);
}, 10000);
