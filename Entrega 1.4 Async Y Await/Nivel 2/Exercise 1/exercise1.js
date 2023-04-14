debugger
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


const sumOfNumber = async (a, b, c)=> {
  let ResultA,ResultB,ResultC
    ResultA = await showDouble(a);
    ResultB= await showDouble(b);
    ResultC = await showDouble(c);
  return ResultA  + ResultB + ResultC;
}
sumOfNumber(4, 4, 4)
  .then((result) =>
    console.log('Result sumOfNumber:', result)
  )
  .catch((err) => console.log(err.message))


