//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
const { sum, subtract, mult, divide } = require("../app/operaciones");
// NIVEL 1
// Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
// math tests
describe("math tests", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(sum(1, 2)).toBe(3);
    });
      
    test("subtract 1 - 2 to equal -1", () => {
      expect(subtract(1, 2)).toBe(-1);
    });
  
    test("multiply 3 * 2 to equal 6", () => {
      expect(mult(3, 2)).toBe(6);
    });
  
    test("divide 4 / 2 to equal 2", () => {
      expect(divide(4, 2)).toBe(2);
    });
  });

  describe('Operación de suma para numeros negativo y positivos', () => {
    test('debería sumar un número positivo y un número negativo', () => {
      expect(sum(5, -3)).toBe(2);
      expect(sum(-8, 4)).toBe(-4);
      expect(sum(0, -10)).toBe(-10);
    });
  });


  describe("zero", () => {
    test("El resultado de la suma es cero, que se evalúa como falso", () => {
      expect(sum(0, 0)).toBeFalsy();  
    });
  
    test(" El resultado de la resta es cero, que se evalúa como falso 0-0", () => {
    
      expect(subtract(0, 0)).toBeFalsy(); 
    });
  
    test(" El resultado de la multiplicación es cero, que se evalúa como falso", () => {
   
      expect(mult(0, 5)).toBeFalsy(); 
    });
  
    test("division by zero should throw an error", () => {
        expect(() => divide(10, 0)).toThrow("error division por 0");
      });
      
  });

  

 

 