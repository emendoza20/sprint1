⭐Nivell 1
**Descripción**
Una Promise es un objeto que representa la terminación o fracaso de una operación asíncrona. Una función callback es una función que se pasa a otra función como argumento y se invoca dentro de la función externa para completar algún tipo de rutina o acción. Conocerlas bien es una de las bases importantes para la programación con Node.


Usa el intérprete de node en todos los casos.

Nivel 1
**- Ejercicio 1**
Crea una función que devuelva una Promise que invoque la función resolve() o reject() que recibe. Invócala pasándole las dos funciones de forma que impriman un mensaje diferente dependiendo de si la Promise se resuelve o no.
 
 desarrollo:

 1) Creo la funcion que devuelve la promesa:
Crear una promesa:
Las promesas se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros, resolve y reject, que nos permiten indicarle a esta que se resolvió o se rechazó.