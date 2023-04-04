const fs = require('fs');

const Message = (mensaje) => {
  fs.writeFile('fichero.txt', mensaje, (error) => {
    if (error) {
      console.log('ERROR:', error);
    } else {
      console.log('Se escribió con exito el mensaje en el archivo.');
    }
  });
}

Message('Hola este es un mensaje de prueba .');
