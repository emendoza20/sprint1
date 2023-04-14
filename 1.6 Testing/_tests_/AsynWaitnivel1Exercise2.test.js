const { functAsincrona } = require('../app/AsynWaitnivel1Exercise2');

describe('función asíncrona', () => {
  test('devuelve "Try again....for two seconds" después de 2 segundos', async () => {
    const result = await functAsincrona(arg);
    expect(result).toBe('Try again....for two seconds');
  });

  test('lanza un error cuando se le pasa un argumento', async () => {
    await expect(functAsincrona('invalid_argument')).rejects.toThrow();
  });
});
