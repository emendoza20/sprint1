const Persona = require('../app/persona');

describe('Persona', () => {
  let mockPersona;

  beforeEach(() => {
    mockPersona = {
      nom: 'John',
      dirNom: jest.fn(),
    };
    jest.spyOn(global, 'Persona').mockImplementation(() => mockPersona);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new instance of Persona', () => {
    const persona = new Persona('John');
    expect(global.Persona).toHaveBeenCalledTimes(1);
    expect(persona).toBe(mockPersona);
    expect(mockPersona.nom).toBe('John');
  });

  it('should call dirNom() method', () => {
    const persona = new Persona('John');
    persona.dirNom();
    expect(mockPersona.dirNom).toHaveBeenCalledTimes(1);
  });
});
