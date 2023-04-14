const fPromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {resolve("Vamoss");}, 2000)
  }) 
}

const fAsincrona = async () => {
  try {
      const result = await fPromise();
      console.log(result)
    }
    catch(err) {
      console.log(err.message)
    } 
}


module.exports = {fPromise, fAsincrona};
