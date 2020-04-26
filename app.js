console.log("Understanding TypeScript");
console.log("testing the liver deployment.");
function add(a, b) {
    return a + b;
}
var a = 3.5;
var b = 5;
var s = add(a, b);
console.log("sum of " + a + " and " + b + " is: " + s);
var aTestEnv = 'qa';
var aProdEnv = "prod";
console.log("type of aTestEnv: " + typeof (aTestEnv));
console.log("type of aProdEnv: " + typeof (aProdEnv));
var ENVS;
(function (ENVS) {
    ENVS[ENVS["DEV"] = 0] = "DEV";
    ENVS[ENVS["QA"] = 1] = "QA";
    ENVS[ENVS["PC"] = 2] = "PC";
    ENVS[ENVS["PROD"] = 3] = "PROD";

    // understand the TypeScript enum to JavaScript's function
    console.log("________ inside Transpiled JavaScript ______");
    console.log("ENVS['DEV']] = " + ENVS['DEV']);
    console.log("ENVS[ENVS['DEV']]] = " + ENVS[ENVS['DEV']]);

})(ENVS || (ENVS = {}));
;
console.log("type of TypeScript's enum: " + typeof (ENVS.PROD));
console.log("value of TypeScript enum: " + ENVS.PROD);
console.log("value of TypeScript enum: " + ENVS.NONE);

console.log("what's TypeScript enum - ENVS : " + ENVS);
