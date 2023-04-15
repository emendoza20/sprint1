class Persona {
  constructor(nom) {
    this.nom = nom;
  }

  dirNom() {
    console.log(this.nom);
  }
}
const person = new Persona("John");
person.dirNom(); // Output: "John"

module.exports = Persona;
