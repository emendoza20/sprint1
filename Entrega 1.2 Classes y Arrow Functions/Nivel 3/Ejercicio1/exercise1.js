class Cats {
  constructor(brand, age, sex){
    this.brand = brand;
    this.age =  age;
    this.sex= sex;
  }
    sayHi = () => {
    console.log(`Hello, my brand is  ${this.brand} i have ${this.age} and my sex is ${this.sex} `);
  };
}

let  Bengali = new Cats("Bengalí", 3, "M");
let  angora= new Cats("angora", 5, "F");
 Bengali.sayHi();
 angora.sayHi();
//const Balines = new Cats("Balinés", 2, "F");


