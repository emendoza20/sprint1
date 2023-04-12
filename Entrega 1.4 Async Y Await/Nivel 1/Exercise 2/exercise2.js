const functPromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {resolve("Try again....for two seconds");}, 2000)
  }) 
}

const functAsincrona = async (arg) => {
  if (arg) {
    throw new Error('La función no espera argumentos');
  }
  try {
      const result = await functPromise();
      return result;
    }
    catch(err) {
      throw new Error('Hubo un error en la función asíncrona');
    } 
}

functAsincrona("algo");
