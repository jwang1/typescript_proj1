"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return "developer: " + this.name;
    }
}
exports.Person = Person;
const p = new Person("JW");
console.log("using clas: " + p.describe());
const another = { name: "tt", describe: p.describe };
console.log(another.describe());
//# sourceMappingURL=ts.class.js.map