# some TypeScript practice

## 1. using yarn for package dependencies

## 2. install lite-server via npm, can use yarn

npm install --save-dev lite-server &

## 3. update package.json to add "start" of "lite-server" in "script" field

## 4. start lite-server   (need to be in the project directory; sometimes, VS default dir on shell command, is where VS runs)

npm start &

## 5. note, Visual Code Studio VSCode also has Plugin (lite-server), from there, just plugin (may not need to update package.json), and then start the server (default port 5500,  npm start 3000 by default)

## 6. TypeScript enum transpiled to JavaScript function
1. enum ENVS {DEV, QA, PC, PROD};
2. In JavaScript, transpiled, as

```JavaScript
var ENVS;
(function (ENVS)) {
    ENVS[ENVS["DEV"] = 0] = "DEV";
    ENVS[ENVS["QA"] = 1] = "QA";
    ENVS[ENVS["PC"] = 2] = "PC";
    ENVS[ENVS["PROD"] = 3] = "PROD";
})(ENVS || (ENVS = {}));
```


 > the thing in that ENVS object, passed to the anonymous function, looks like:
 >

1. Array ENVS[0] of "DEV" etc;  and 
2. Object:  ENVS["DEV"] = 0;

***


## 7. union type -- string | number | boolean

```TypeScript
function add(n1: string | number, n2 : string | number) {
    if (typeof (n1) === 'number' && typeof (n2) === 'number') {
        return (+n1) + (+n2);  // note +n1 forces to make sure n1 is number, otherwise transpiler error
    } else {
        return n1.toString() + n2.toString();
    }
}
```

## 8. literal type

```TypeScript
function add(n1: string | number,
             n2: string | number,
             resultPresentation: 'as-number' | 'as-text') {
    if (typeof(n1) === 'number' && typeof(n2) === 'number' || resultPresentation === 'as-number') {
        return +n1 + +n2;
    } else {
        return n1.toString() + n2.toString();
    }
}
```

## 9. type alias

```TypeScript

type User = {name: string; age: number};

function greet(usr: User) {
    ...
}
```

## 10. Function type usage

```TypeScript

function add(n1: number, n2: number): number {
    return n1 + n2;
}

// Function type used to define a variable to accept specific Function-type: here, 2 number parameters and returning a number
let aFunc: (a: number, b: number) => number;
aFunc = add;

console.log(aFunc(21, 3));
```

## 11. TypeScript Interfaces are NOT transpiled to JavaScript

TS Interfaces, similar to Java Interface, but different in the sense that TS Interfaces are not transpiled into JS.

## 12. Discriminated Unions (TypeScript types)

```TypeScript
interface   A {
    kind: "a",
    walking: () => void
}

interface  B {
    kind: "b",
    talking: () => void
}

type AOrB = A | B;

function chooseAction(action: AOrB) {
    switch(action.kind) {
        case "a":
            walking();
            break;
        case "b":
            talking();
            break;
        default:
            console.log("not implemented");
    }
}

chooseAction({"kind": "b", "walking": () => console.log("it's type B, and started walking")});

```

## 13. A working launch.json (where node executable can be obtained via which node from command line)

```Json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            // Without runtimeExecutable (specially when nvm is used for npm and node), will get "no path found for node" error during launch
            "runtimeExecutable": "/Users/jwang/.nvm/versions/node/v10.9.0/bin/node",
            // For some reason, comment-out the port, both Debug and direct-run-without-debug WORK
            //"port": 3003,

            "skipFiles": [
                "<node_internals>/**"
            ],
            // TODO: still trying to find out multiple TypeScript classes to be debugged
            "program": "${workspaceFolder}/projects/first_ts/types/DiscriminatedUnions.ts",
            //"program": "${workspaceFolder}/projects/first_ts/main.ts",

            // VS not allowing multiple TS file debugging
            // "program": ["${workspaceFolder}/projects/first_ts/maints",
            //            "${workspaceFolder}/projects/first_ts/app.ts"],
            "outFiles": [
                "${workspaceFolder}/**/*.js"
                //"${workspaceFolder}/projects/first_ts/dist/**/*.js"
            ]
        }

    ]
}
```