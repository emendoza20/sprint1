//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
const fMatematicas = require('../app/operaciones.js')

describe('TEST funciones matematicas', () => {

    test('TEST sumar', () => {
        expect(fMatematicas.sumar(2,5,4)).toBe(11);
        expect(fMatematicas.sumar(2,"string",4)).toBe("Sólo se pueden introducir números como parámetro")
    })
    test('TEST restar', () => {
        expect(fMatematicas.restar(10,5,2)).toBe(3)
        expect(fMatematicas.restar(2,"string",4)).toBe("Sólo se pueden introducir números como parámetro")
    })  

    test('TEST multiplicar', () => {
        expect(fMatematicas.multiplicar(2,5,3)).toBe(30)
        expect(fMatematicas.multiplicar(2,"string",4)).toBe("Sólo se pueden introducir números como parámetro")
    })  

    test('TEST dividir', () => {
        expect(fMatematicas.dividir(10,2,5)).toBe(1)
        expect(fMatematicas.dividir(2,"string",4)).toBe("Sólo se pueden introducir números como parámetro")
    }) 
})