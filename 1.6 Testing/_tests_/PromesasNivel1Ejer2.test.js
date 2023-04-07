const { showMessage, logName } = require('../app/PromesasNivel1Ejer2.js'); 
describe('showMessage function', () => {
  test('should call callback function with correct message', () => {
    const callback = jest.fn();
    showMessage('Elizabeth', callback);
    expect(callback).toHaveBeenCalledWith('Hola mi nombre es, Elizabeth');
  });
});

describe('logName function', () => {
  test('should log name to console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    logName('Elizabeth');
    expect(consoleSpy).toHaveBeenCalledWith('Elizabeth');
  });
});
