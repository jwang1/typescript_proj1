
interface A {
    kind: "A",
    actionA: () => void
}

interface B {
    kind: "B",
    actionB: () => void
}

type AOrB = A | B;

function actions(trigger: AOrB) {
    switch(trigger.kind) {
        case("A"):
            trigger.actionA();
            break;
        case("B"):
            trigger.actionB();
            break;
        default: 
            console.log("not implemented");
    }
}

actions({kind: "A", actionA: () => console.log("triggered from type A of the discriminated Union")});