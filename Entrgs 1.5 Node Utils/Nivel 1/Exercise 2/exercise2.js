const fs = require('fs');

const leerArchivo = () => {
  fs.readFile('fichero.txt', 'utf8', (error, mensaje) => {
    if (error) {
      console.log('Hubo un error al leer el archivo:', error);
    } else {
      console.log('Contenido del archivo:', mensaje);
    }
  });
}


leerArchivo();
