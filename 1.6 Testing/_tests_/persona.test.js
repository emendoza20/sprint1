const Persona = require('../app/persona');

describe('Persona', () => {
  it('debe llamar al constructor con los argumentos adecuados', () => {
    const constructorMock = jest.fn();
    const persona = new constructorMock('Elizabeth');
    expect(constructorMock).toHaveBeenCalledWith('Elizabeth');
  });
  
  it('debe llamar al método dirNombre()', () => {
    const dirNombreMock = jest.fn();
    const persona = new Persona('Elizabeth');
    persona.dirNombre = dirNombreMock;
    persona.dirNombre();
    expect(dirNombreMock).toHaveBeenCalled();
  });
});