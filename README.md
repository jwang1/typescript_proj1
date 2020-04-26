# some TypeScript practice

## 1. using yarn for package dependencies

## 2. install lite-server via npm, can use yarn

npm install --save-dev lite-server &

## 3. update package.json to add "start" of "lite-server" in "script" field

## 4. start lite-server

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
