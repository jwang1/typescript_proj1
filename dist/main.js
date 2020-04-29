"use strict";
let john = {
    age: 23,
    name: 'John',
    talk: function () {
        return "my name is: " + this.name + ", " + this.age + " old, ";
    },
};
function talkOut(person) {
    return person.talk();
}
console.log(talkOut(john));
//# sourceMappingURL=main.js.map