"use strict";
console.log("Understanding TypeScript");
console.log("testing the liver deployment.");
function add(a, b) {
    return a + b;
}
const a = 3.5;
const b = 5;
const s = add(a, b);
console.log("sum of " + a + " and " + b + " is: " + s);
const aTestEnv = 'qa';
const aProdEnv = "prod";
console.log("type of aTestEnv: " + typeof (aTestEnv));
console.log("type of aProdEnv: " + typeof (aProdEnv));
var ENVS;
(function (ENVS) {
    ENVS[ENVS["DEV"] = 0] = "DEV";
    ENVS[ENVS["QA"] = 1] = "QA";
    ENVS[ENVS["PC"] = 2] = "PC";
    ENVS[ENVS["PROD"] = 3] = "PROD";
})(ENVS || (ENVS = {}));
;
console.log("type of TypeScript's enum: " + typeof (ENVS.PROD));
console.log("value of TypeScript enum: " + ENVS.PROD);
console.log("what's TypeScript enum - ENVS : " + ENVS);
//# sourceMappingURL=app.js.map