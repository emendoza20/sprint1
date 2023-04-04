const functPromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {resolve("Try again....for two seconds");}, 2000)
  }) 
}

const functAsincrona = async () => {
  try {
      const result = await functPromise();
      console.log(result)
    }
    catch(err) {
      console.log(err.message)
    } 
}

functAsincrona();
