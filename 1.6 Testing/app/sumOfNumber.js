const showDouble = async (num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num * 2);
      }, 10000);
    });
  };
  
  const sumOfNumber = async (a, b, c) => {
    const promises = [showDouble(a), showDouble(b), showDouble(c)];
    const [ResultA, ResultB, ResultC] = await Promise.all(promises);
    return ResultA + ResultB + ResultC;
  };
  
  module.exports = sumOfNumber;
  