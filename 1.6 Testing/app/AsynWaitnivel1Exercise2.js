async function promesaTime() {
  let result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("La promesa ha sido resuelta después de 5 segundos.");
    },5000);
  });

  return result;
}
promesaTime().then((result) => {
  console.log(result);
});

module.exports = { promesaTime};
  