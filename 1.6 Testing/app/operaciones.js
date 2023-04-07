// Nivell 1
//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 
//Testeja la correcta execució d'aquestes funcions.

const matematicas = {
    sumar: (...numeros) => numeros.every(Number)? numeros.reduce((total, numero) => total += numero) : "Sólo se pueden introducir números como parámetro",
    restar: (...numeros) => numeros.every(Number)? (numeros[0]*2 - numeros.reduce((total, numero) => total += numero)) : "Sólo se pueden introducir números como parámetro",
    multiplicar: (...numeros) => numeros.every(Number)? numeros.reduce((total,numero) => total *= numero) : "Sólo se pueden introducir números como parámetro",
    dividir : (...numeros) => numeros.every(Number)? (numeros.reduce((total, numero) => total /= numero)) : "Sólo se pueden introducir números como parámetro"
};

module.exports = matematicas;