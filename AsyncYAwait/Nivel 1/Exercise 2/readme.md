***Ejercicio 2***
Crea una nueva función asíncrona que llame a otra que devuelva una Promise que efectúe su función resolve() después de 2 segundos de su invocación.

desarrollo:

1)Se crea la función asíncrona functAsincrona que utiliza la palabra clave await para esperar a que se resuelva una nueva Promise. Esta Promise se crea   el constructor Promise, y se le pasa como argumento una función que contiene un temporizador setTimeout() que invoca la función resolve() después de 2 segundos.