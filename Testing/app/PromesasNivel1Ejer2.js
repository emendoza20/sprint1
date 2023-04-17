let showMessage = (nombre, callback) => {
    const myName = `Hola mi nombre es, ${nombre}`; 
    callback(myName);
  }
  
  let logName = (nombre) => {
    console.log(nombre);
  }
  
  module.exports = {
    showMessage,
    logName
  };
  