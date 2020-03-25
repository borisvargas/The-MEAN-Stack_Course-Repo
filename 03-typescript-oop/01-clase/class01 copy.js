"use strict";
// Compilacion en ES5
var Dog = /** @class */ (function () {
    function Dog(age, name) {
        this.age = age;
        this.name = name;
    }
    Dog.prototype.sleep = function (hours) {
        var timeToSleep = "my dog sleep " + hours;
        console.log(timeToSleep);
    };
    return Dog;
}());
var dog = new Dog(5, 'dany');
console.log(dog);
