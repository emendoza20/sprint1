function sum(a, b) {
    return a + b;
  }

function subtract(a,b) {
    return a - b
}  

function mult(a, b) {
    return a * b
}

function divide(a, b) {

    if (b === 0) {
        throw new Error("error division por 0");
      }
      return a / b;
    
}
  module.exports = {sum, subtract, mult, divide};