const showDouble = async(num) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => { 
        resolve(num * 2);
      }, 2000);
    });
  }
  
  const sumOfNumber = async (a, b, c) => {
    let ResultA, ResultB, ResultC;
    ResultA = await showDouble(a);
    ResultB = await showDouble(b);
    ResultC = await showDouble(c);
    return ResultA + ResultB + ResultC;
  }
  
  module.exports = sumOfNumber;
  