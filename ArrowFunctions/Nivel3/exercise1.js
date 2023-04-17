class Persona {
  constructor(nom, cognom) {
    if (
      ((this.name = nom), (this.surname = cognom), this.constructor === Persona)
    ) {
      throw new Error("No se puede instanciar una clase abstracta");
    }
  }
  InfoPersona = () => {
    console.log(`${this.name}  ${this.surname}`);
  };
}

class Personaje extends Persona {
  constructor(nom, cognom) {
    super(nom, cognom);
  }
}

const crearPersona = (nom, cognom) => {
  const persona = Object.create(Persona.prototype);
  persona.name = nom;
  persona.surname = cognom;
  return persona;
};

const persona1 = crearPersona("Elizabeth", "mendoza");
const persona2 = crearPersona("Maria", "Hernandez");
console.log(persona1);
console.log(persona2);
