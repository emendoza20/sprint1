
const showDouble = async(num) =>{
    return new Promise((resolve,reject) => {
      setTimeout(() => { resolve(num * 2);
       }, 2000);
  });
}/*const function example() {
  const result = await doubleAfter2Seconds(5);
  console.log(result); // 10
}

example();*/


const sumOfNumbers= async (a, b, c)=> {
  if (typeof a!== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Los tres parámetros deben ser números');
  }

  if (a< 0 || b < 0 || c < 0) {
    throw new Error('Los tres parámetros deben ser números positivos');
  }
  let ResultA,ResultB,ResultC
    ResultA = await showDouble(a);
    ResultB= await showDouble(b);
    ResultC = await showDouble(c);
  return ResultA  + ResultB + ResultC;
}
sumOfNumbers(1,'u', 'f')
  .then((result) =>
    console.log('Result sumOfNumber:', result)
  )
  .catch((err) => console.log(err))

  sumOfNumbers(1, 2, -3)
  .then((result) =>
    console.log('Result sumOfNumbers:', result)
  )
  .catch((err) => console.log(err))
  

  