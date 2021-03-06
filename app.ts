console.log("Understanding TypeScript");
console.log("testing the liver deployment.")

function add(a: number, b: number) : number {
    return a + b
}

const a = 3.5;
const b = 5;
const s = add(a, b);

console.log("sum of " + a + " and " + b + " is: " + s);


// check the custom type (following type, is just string type with limited allowed values)
type nonProdEnv = 
    'dev'
    | 'qa'
    | 'pc';

type prodEnv = 'prod';

type allEnv = nonProdEnv | prodEnv;

const aTestEnv: nonProdEnv = 'qa';

const aProdEnv: prodEnv = "prod";


console.log("type of aTestEnv: " + typeof(aTestEnv));
console.log("type of aProdEnv: " + typeof(aProdEnv));

enum ENVS {
  DEV,
  QA,
  PC,
  PROD,
};

console.log("type of TypeScript's enum: " + typeof(ENVS.PROD));
console.log("value of TypeScript enum: " + ENVS.PROD);

console.log("what's TypeScript enum - ENVS : " + ENVS)

