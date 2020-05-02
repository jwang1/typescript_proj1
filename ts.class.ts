
export class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
 
    public describe(this: Person) {
        return "developer: " + this.name;
    }

}


const p: Person = new Person("JW");
console.log("using clas: " + p.describe());

const another = {name: "tt", describe: p.describe};
console.log(another.describe());



