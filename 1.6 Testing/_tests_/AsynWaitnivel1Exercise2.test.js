const {promesaTime }= require("../app/AsynWaitnivel1Exercise2.js");

describe('promesaTime', () => {
  test('se resuelve después de 5 segundos', async () => {
    const result = await promesaTime();
    expect(result).toBe('La promesa ha sido resuelta después de 5 segundos.');
  },10000);
});
