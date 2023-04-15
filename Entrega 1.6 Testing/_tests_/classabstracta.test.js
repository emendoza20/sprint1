const { Persona,Personaje } = require("../app/classabstracta");

  describe('Persona', () => {
    it('throws an error when instantiated', () => {
      expect(() => new Persona('Elita', 'Medonza')).toThrow('No se puede instanciar una clase abstracta');
    });
  });
  
  describe('Personaje', () => {
    it('can be instantiated', () => {
      const person = new Personaje('John', 'Doe');
      expect(person).toBeInstanceOf(Personaje);
      expect(person).toBeInstanceOf(Persona);
    });
  
    it('has a working InfoPersona method', () => {
      const person = new Personaje('John', 'Doe');
      const spy = jest.spyOn(console, 'log');
      person.InfoPersona();
      expect(spy).toHaveBeenCalledWith('John Doe');
    });
  });
  