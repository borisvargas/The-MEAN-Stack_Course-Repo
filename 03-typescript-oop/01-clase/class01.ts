// instancia de clase Dog compilacion ES6

class Dog {

    // estado
    age: number;
    name: string;
    weight: number;
    gender: string;
    color: string;

    constructor(
        age: number,
        name: string,
        weight: number,
        gender: string,
        color: string
    ) {
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.gender = gender;
        this.color = color;
    }

    // comportamiento
    breathe() {
        console.log(`${this.name} esta respirando.`);
    }
    eat( food:string ) {
        console.log(`${this.name} come ${food}.`);
    }
    run( destination:number ) {
        console.log(`${this.name} corre ${destination} metros.`);
    }
    sleep( hours:number ) {
        console.log(`${this.name} duerme ${hours} horas.`);
    }
    bark() {
        console.log(`${this.name} ladra.`);
    }
}

let myPet = new Dog(5, 'donkan', 20, 'macho', 'negro');

console.log(myPet);

myPet.breathe();
myPet.eat('croquetas');
myPet.run(100);
myPet.sleep(4);
myPet.bark();