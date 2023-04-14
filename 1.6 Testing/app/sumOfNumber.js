const showDouble = async(num) =>{
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject(new Error("El valor debe ser un número"));
    }
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
}

const sumOfNumber = async (a, b, c)=> {
  let ResultA, ResultB, ResultC
  try {
    ResultA = await showDouble(a);
    ResultB = await showDouble(b);
    ResultC = await showDouble(c);
    return ResultA + ResultB + ResultC;
  } catch (err) {
    throw err;
  }
}
module.exports = sumOfNumber;
