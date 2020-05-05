"use strict";
function actions(trigger) {
    switch (trigger.kind) {
        case ("A"):
            trigger.actionA();
            break;
        case ("B"):
            trigger.actionB();
            break;
        default:
            console.log("not implemented");
    }
}
actions({ kind: "A", actionA: () => console.log("triggered from type A of the discriminated Union") });
//# sourceMappingURL=DiscriminatedUnions.js.map