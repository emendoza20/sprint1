***Ejercicio 1***
 
1)Crea una función que cree dos archivos codificados en hexadecimal y en base64 respectivamente, a partir del archivo del nivel 1.

desarrollo del apartado 1:

a)En este código, la función encodeFile toma un argumento filePath que representa la ruta del archivo a leer. La función usa el método **fs.readFile() *** para leer el archivo en formato utf8, luego lo codifica en hexadecimal y en base64 utilizando la clase Buffer de Node.js y escribe cada archivo en el sistema de archivos utilizando el método fs.writeFile(),Si hay algún error al leer o escribir los archivos, se muestra un mensaje de error en la consola. Si todo va bien, se muestra un mensaje de éxito en la consola indicando que los archivos han sido escritos con éxito.ç

2)Crea una función que guarde los archivos del punto anterior, ahora cifrados con el algoritmo aes-192-cbc, y borre los archivos iniciales