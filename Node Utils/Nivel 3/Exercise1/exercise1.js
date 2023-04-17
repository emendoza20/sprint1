/**const fs = require('fs');
const { Buffer } = require('buffer');

const encodeFile = (filePath) => {
  
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.log('ERROR:', error);
    } else {
 
      const hexEncoded = Buffer.from(data).toString('hex');
      fs.writeFile('hexEncoded.txt', hexEncoded, (error) => {
        if (error) {
          console.log('ERROR:', error);
        } else {
          console.log(`Se escribió con éxito el archivo ${filePath} codificado en hexadecimal en el archivo hexEncoded.txt.`);
        }
      });
      
    
      const base64Encoded = Buffer.from(data).toString('base64');
      fs.writeFile('base64Encoded.txt', base64Encoded, (error) => {
        if (error) {
          console.log('ERROR:', error);
        } else {
          console.log(`Se escribió con éxito el archivo ${filePath} codificado en base64 en el archivo base64Encoded.txt.`);
        }
      });
    }
  });
}***/

//encodeFile('fichero.txt');
/********************borrar archivos originales********************** */
const fs = require('fs');
const crypto = require('crypto');
const { Buffer } = require('buffer');

const encryptFile = (filePath) => {
   
  fs.readFile('hexEncoded.txt', 'utf8', (error, data) => {
    if (error) {
      console.log('ERROR:', error);
    } else {
     
      const key = crypto.scryptSync('password', 'salt', 24);
      const iv = Buffer.alloc(16, 0); // Vector de inicialización
      const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
      let encrypted = cipher.update(data, 'hex', 'base64');
      encrypted += cipher.final('base64');
      fs.writeFile('hexEncoded.enc', encrypted, (error) => {
        if (error) {
          console.log('ERROR:', error);
        } else {
          console.log(`Se cifró con éxito el archivo hexEncoded.txt en el archivo hexEncoded.enc usando el algoritmo AES-192-CBC.`);
          // Borrar el archivo original
          fs.unlink('hexEncoded.txt', (error) => {
            if (error) {
              console.log('ERROR:', error);
            } else {
              console.log('Se borró con éxito el archivo hexEncoded.txt.');
            }
          });
        }
      });
    }
  });

  
  fs.readFile('base64Encoded.txt', 'utf8', (error, data) => {
    if (error) {
      console.log('ERROR:', error);
    } else {

      const key = crypto.scryptSync('password', 'salt', 24);
      const iv = Buffer.alloc(16, 0); // Vector de inicialización
      const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
      let encrypted = cipher.update(data, 'base64', 'base64');
      encrypted += cipher.final('base64');
      fs.writeFile('base64Encoded.enc', encrypted, (error) => {
        if (error) {
          console.log('ERROR:', error);
        } else {
          console.log(`Se cifró con éxito el archivo base64Encoded.txt en el archivo base64Encoded.enc usando el algoritmo AES-192-CBC.`);
       
          fs.unlink('base64Encoded.txt', (error) => {
            if (error) {
              console.log('ERROR:', error);
            } else {
              console.log('Se borró con éxito el archivo base64Encoded.txt.');
            }
          });
        }
      });
    }
  });
}

encryptFile();
/*****************3)**************/

const fs = require('fs');
const crypto = require('crypto');
const { Buffer } = require('buffer');

const decryptFile = (filePath) => {
  // Leer el archivo cifrado en hexadecimal
  fs.readFile('hexEncoded.enc', (error, data) => {
    if (error) {
      console.log('ERROR:', error);
    } else {
      // Descifrar el archivo
      const key = crypto.scryptSync('password', 'salt', 24);
      const iv = Buffer.alloc(16, 0); // Vector de inicialización
      const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
      let decrypted = decipher.update(data, 'base64', 'hex');
      decrypted += decipher.final('hex');
      // Descodificar el archivo y escribir el archivo descodificado
      const decoded = Buffer.from(decrypted, 'hex').toString('utf8');
      fs.writeFile('hexEncoded.txt', decoded, (error) => {
        if (error) {
          console.log('ERROR:', error);
        } else {
          console.log(`Se descifró con éxito el archivo hexEncoded.enc en el archivo hexEncoded.txt y se decodificó usando el formato hexadecimal.`);
          // Borrar el archivo cifrado
          fs.unlink('hexEncoded.enc', (error) => {
            if (error) {
              console.log('ERROR:', error);
            } else {
              console.log('Se borró con éxito el archivo hexEncoded.enc.');
            }
          });
        }
      });
    }
  });

  // Leer el archivo cifrado en base64
  fs.readFile('base64Encoded.enc', (error, data) => {
    if (error) {
      console.log('ERROR:', error);
    } else {
      // Descifrar el archivo
      const key = crypto.scryptSync('password', 'salt', 24);
      const iv = Buffer.alloc(16, 0); // Vector de inicialización
      const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
      let decrypted = decipher.update(data, 'base64', 'base64');
      decrypted += decipher.final('base64');
      // Descodificar el archivo y escribir el archivo descodificado
      const decoded = Buffer.from(decrypted, 'base64').toString('utf8');
      fs.writeFile('base64Encoded.txt', decoded, (error) => {
        if (error) {
          console.log('ERROR:', error);
        } else {
          console.log(`Se descifró con éxito el archivo base64Encoded.enc en el archivo base64Encoded.txt y se decodificó usando el formato base64.`);
          // Borrar el archivo cifrado
          fs.unlink('base64Encoded.enc', (error) => {
            if (error) {
              console.log('ERROR:', error);
            } else {
              console.log('Se borró con éxito el archivo base64Encoded.enc.');
            }
          });
        }
      });
    }
  });
}

decryptFile();
