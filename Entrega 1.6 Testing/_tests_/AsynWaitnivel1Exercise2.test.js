const {promesaTime }= require("../app/AsynWaitnivel1Exercise2.js");


test('promesaTime resuelve con el mensaje correcto', async () => {
  const result = await promesaTime();
  expect(result).toBe('La promesa ha sido resuelta después de 5 segundos.');
});

test('promesaTime tarda al menos 5 segundos en resolver', async () => {
  const start = Date.now();
  await promesaTime();
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(5000);
});

