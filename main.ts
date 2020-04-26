interface Person {
    age: number,
    name: string,
    talk(): string,
}

let john = {
    age: 23,
    name: 'John',
    talk: function() : string {
        return "my name is: " + this.name + ", " + this.age + " old, ";
    },
}

function talkOut(person: Person) {
    return person.talk();
}

console.log(talkOut(john));