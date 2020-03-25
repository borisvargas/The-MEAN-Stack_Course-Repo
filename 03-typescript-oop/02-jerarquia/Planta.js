"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Organismo_1 = require("./Organismo");
class Planta extends Organismo_1.Organismo {
    constructor(height, age, species) {
        super('planta');
        this.height = height;
        this.age = age;
        this.species = species;
    }
    // comportamiento
    photosynthesis() {
        console.log(`La planta de tipo ${this.species} esta haciendo fotosistesis.`);
    }
}
let girasol = new Planta(12, 1, 'girasol');
girasol.photosynthesis();
console.log(`El ${girasol.species}es de tipo ${girasol.getType()}`);
