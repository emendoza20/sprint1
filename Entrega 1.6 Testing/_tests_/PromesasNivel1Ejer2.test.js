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

/*datos falsos para la función showMessage:*/
describe('showMessage function', () => {
  test('should call callback function with correct message', () => {
    const callback = jest.fn();
    showMessage('', callback); // probando con un nombre vacío
    expect(callback).toHaveBeenCalledWith('Hola mi nombre es, ');

    showMessage(undefined, callback); // probando con un nombre undefined
    expect(callback).toHaveBeenCalledWith('Hola mi nombre es, undefined');

    showMessage(null, callback); // probando con un nombre null
    expect(callback).toHaveBeenCalledWith('Hola mi nombre es, null');

    showMessage(1234, callback); // probando con un número en lugar de un nombre
    expect(callback).toHaveBeenCalledWith('Hola mi nombre es, 1234');

    showMessage([], callback); // probando con un array en lugar de un nombre
    expect(callback).toHaveBeenCalledWith('Hola mi nombre es, ');
  });
});


