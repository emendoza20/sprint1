const showDouble = async (num) => {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        resolve(num * 2);
      }, 2000);
    });
  };
  
  
  const sumOfNumber = async (a, b, c) => {
    const ResultA = await showDouble(a),
          ResultB = await showDouble(b),
          ResultC = await showDouble(c);
    return ResultA + ResultB + ResultC;
  };
  
  
  module.exports = { sumOfNumber };
  