Nivell 2
- - Exercici 1
Dados los objetos employees y salarias, crea una arrow function getEmployee() que devuelva una Promise efectuando la búsqueda en el objeto por su id.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

Desarrollo:
a) creo un arrow funcion getEmployee con el parametro id que hay que encontrar, se construye la funcion Promesa con sus parametros resolve y reject, luego se realiza la busqueda del id del empleado con el metodo find y si es encontrado se retornara la promesa exitosamente, si no será rechazada


notas: https://dev.to/duxtech/es6-promesas-en-javascript-5bpb