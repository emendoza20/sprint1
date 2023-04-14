const Persona = require('../app/persona');

describe('Person class', () => {
  it('should call the constructor with the correct argument', () => {
    const mockConstructor = jest.fn();
    const person = new mockConstructor("Elizabeth");

    expect(mockConstructor).toHaveBeenCalledWith("Elizabeth");
  });

  it('should call the dirNom method with the correct argument', () => {
    const person = new Persona("Moises");
    const mockDirNom = jest.spyOn(person, 'dirNom');
    person.dirNom();

    expect(mockDirNom).toHaveBeenCalled();
  });
});

 